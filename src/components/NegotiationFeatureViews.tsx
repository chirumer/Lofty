"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUp,
  ArrowRightLeft,
  ChevronRight,
  CircleDot,
  Mic,
  RefreshCcw,
  RotateCcw,
  ShieldAlert,
  Square,
  UserRound,
  X
} from "lucide-react";
import { DEMO_LISTING_ID } from "@/lib/constants";
import { DEMO_EVENTS, DEMO_LISTING, DEMO_MESSAGES, DEMO_NEGOTIATION } from "@/lib/demo";
import { formatCurrency, formatRelativeTime, formatTimestamp } from "@/lib/utils";
import type { AgentRole, Listing, Message, MessageType, Negotiation, NegotiationEvent } from "@/types";

export type NegotiationShellProfile =
  | "seller_agent"
  | "buyer_agent"
  | "seller_client"
  | "buyer_client";

type LoadJsonResult = {
  error?: string;
};

type NegotiationFeatureController = {
  listing: Listing;
  negotiation: Negotiation;
  messages: Message[];
  events: NegotiationEvent[];
  loading: boolean;
  initialized: boolean;
  isFallback: boolean;
  error: string | null;
  statusMessage: string | null;
  analyze: () => Promise<void>;
  refresh: () => Promise<void>;
  resetDemo: () => Promise<void>;
  sendMessage: (payload: {
    senderRole: AgentRole;
    content: string;
    messageType: MessageType;
  }) => Promise<{ ok: boolean; error?: string }>;
  transcribeAudio: (payload: {
    audioBase64: string;
    audioMimeType: string;
  }) => Promise<{ transcript?: string; error?: string }>;
};

type ProfileOption = {
  id: NegotiationShellProfile;
  label: string;
  name: string;
  email: string;
  description: string;
};

type ChatProfile = {
  role: AgentRole;
  agentName: string;
  agentLabel: string;
  activeContact: {
    name: string;
    detail: string;
    initials: string;
    status: string;
  };
  contacts: Array<{
    name: string;
    detail: string;
    preview: string;
    initials: string;
    active?: boolean;
  }>;
};

type NegotiationViewConfig = {
  canManage: boolean;
  role: "buyer" | "seller" | "agent";
  title: string;
  description: string;
};

const PROFILE_OPTIONS: ProfileOption[] = [
  {
    id: "seller_agent",
    label: "Seller Agent",
    name: "Ryan",
    email: "seller.agent@example.com",
    description: "Manage the thread as the listing-side agent and send chat, email, or call-note updates."
  },
  {
    id: "buyer_agent",
    label: "Buyer Agent",
    name: "Alex",
    email: "buyer.agent@example.com",
    description: "Manage the thread as the buyer-side agent and negotiate price, terms, and concessions."
  },
  {
    id: "seller_client",
    label: "Seller View",
    name: "Seller Client",
    email: "seller.client@example.com",
    description: "Review the negotiation snapshot and timeline from the seller's read-only perspective."
  },
  {
    id: "buyer_client",
    label: "Buyer View",
    name: "Buyer Client",
    email: "buyer.client@example.com",
    description: "Review the negotiation snapshot and timeline from the buyer's read-only perspective."
  }
];

function materializeDemoMessages() {
  return DEMO_MESSAGES.map((message, index) => ({
    id: `demo-message-${index}`,
    ...message
  }));
}

function materializeDemoEvents() {
  return DEMO_EVENTS.map((event, index) => ({
    id: `demo-event-${index}`,
    ...event
  }));
}

function getStatusClass(status: Negotiation["status"]) {
  if (status === "agreed") {
    return "status-pill status-pill--agreed";
  }

  if (status === "failed") {
    return "status-pill status-pill--failed";
  }

  if (status === "pending") {
    return "status-pill status-pill--pending";
  }

  return "status-pill status-pill--active";
}

function getMessageTypeLabel(messageType: MessageType) {
  if (messageType === "email") {
    return "Email";
  }

  if (messageType === "call_transcript") {
    return "Call";
  }

  return "Chat";
}

function getMessageTypeBadgeClass(messageType: MessageType) {
  if (messageType === "email") {
    return "message-badge message-badge--email";
  }

  if (messageType === "call_transcript") {
    return "message-badge message-badge--call";
  }

  return "message-badge";
}

function getTimelineSourceClass(sourceType: NegotiationEvent["source_type"]) {
  if (sourceType === "email") {
    return "message-badge message-badge--email";
  }

  if (sourceType === "call") {
    return "message-badge message-badge--call";
  }

  return "message-badge";
}

function getEventLabel(eventType: NegotiationEvent["event_type"]) {
  if (eventType === "offer_made") {
    return "Offer";
  }

  if (eventType === "counter_offer") {
    return "Counter";
  }

  if (eventType === "concern_raised") {
    return "Issue";
  }

  if (eventType === "term_agreed") {
    return "Term";
  }

  if (eventType === "email_received") {
    return "Email";
  }

  if (eventType === "call_completed") {
    return "Call";
  }

  if (eventType === "deal_agreed") {
    return "Agreed";
  }

  if (eventType === "deal_failed") {
    return "Failed";
  }

  if (eventType === "status_changed") {
    return "Status";
  }

  return "Update";
}

function getChatProfile(profile: NegotiationShellProfile): ChatProfile | null {
  if (profile === "seller_agent") {
    return {
      role: "seller_agent",
      agentName: "Ryan",
      agentLabel: "Seller's Agent",
      activeContact: {
        name: "Alex",
        detail: "Buyer's Agent",
        initials: "AL",
        status: "Active negotiation thread"
      },
      contacts: [
        {
          name: "Alex",
          detail: "Buyer's Agent",
          preview: "Primary negotiation thread",
          initials: "AL",
          active: true
        },
        {
          name: "Seller",
          detail: "Client",
          preview: "Internal seller updates",
          initials: "SE"
        }
      ]
    };
  }

  if (profile === "buyer_agent") {
    return {
      role: "buyer_agent",
      agentName: "Alex",
      agentLabel: "Buyer's Agent",
      activeContact: {
        name: "Ryan",
        detail: "Seller's Agent",
        initials: "RY",
        status: "Active negotiation thread"
      },
      contacts: [
        {
          name: "Ryan",
          detail: "Seller's Agent",
          preview: "Primary negotiation thread",
          initials: "RY",
          active: true
        },
        {
          name: "Buyer",
          detail: "Client",
          preview: "Internal buyer updates",
          initials: "BY"
        }
      ]
    };
  }

  return null;
}

function getNegotiationViewConfig(profile: NegotiationShellProfile): NegotiationViewConfig {
  if (profile === "seller_agent" || profile === "buyer_agent") {
    return {
      canManage: true,
      role: "agent",
      title: "Negotiation Command Center",
      description:
        "Track price movement, objections, agreed terms, pending items, and timeline events extracted from the shared message thread."
    };
  }

  if (profile === "buyer_client") {
    return {
      canManage: false,
      role: "buyer",
      title: "Buyer Negotiation View",
      description:
        "Follow the active offer, the buyer-side concerns being tracked, and the items still pending before the deal can move forward."
    };
  }

  return {
    canManage: false,
    role: "seller",
    title: "Seller Negotiation View",
    description:
      "Review the listing-side posture, agreed terms, and timeline activity without changing the shared negotiation record."
  };
}

async function readJson<T extends LoadJsonResult>(response: Response) {
  return (await response.json().catch(() => ({}))) as T;
}

export function getProfileOption(profile: NegotiationShellProfile) {
  return PROFILE_OPTIONS.find((option) => option.id === profile) ?? PROFILE_OPTIONS[0];
}

export function useNegotiationFeatureState(listingId = DEMO_LISTING_ID): NegotiationFeatureController {
  const [listing, setListing] = useState<Listing>(DEMO_LISTING);
  const [negotiation, setNegotiation] = useState<Negotiation>(DEMO_NEGOTIATION);
  const [messages, setMessages] = useState<Message[]>(() => materializeDemoMessages());
  const [events, setEvents] = useState<NegotiationEvent[]>(() => materializeDemoEvents());
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const [isFallback, setIsFallback] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const requestIdRef = useRef(0);

  async function loadState(silent = false) {
    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;

    if (!silent) {
      setLoading(true);
    }

    try {
      const [messagesResponse, negotiateResponse, timelineResponse] = await Promise.all([
        fetch(`/api/messages?listingId=${encodeURIComponent(listingId)}`, { cache: "no-store" }),
        fetch(`/api/negotiate?listingId=${encodeURIComponent(listingId)}`, { cache: "no-store" }),
        fetch(`/api/timeline?listingId=${encodeURIComponent(listingId)}`, { cache: "no-store" })
      ]);

      const [messagesPayload, negotiatePayload, timelinePayload] = await Promise.all([
        readJson<{ messages?: Message[]; error?: string }>(messagesResponse),
        readJson<{ listing?: Listing | null; negotiation?: Negotiation | null; error?: string }>(negotiateResponse),
        readJson<{ events?: NegotiationEvent[]; error?: string }>(timelineResponse)
      ]);

      const responseError =
        (!messagesResponse.ok
          ? messagesPayload.error ?? "Unable to load messages."
          : undefined) ??
        (!negotiateResponse.ok
          ? negotiatePayload.error ?? "Unable to load negotiation state."
          : undefined) ??
        (!timelineResponse.ok
          ? timelinePayload.error ?? "Unable to load negotiation timeline."
          : undefined);

      if (responseError || !negotiatePayload.listing || !negotiatePayload.negotiation) {
        throw new Error(responseError ?? "Negotiation data is not available yet.");
      }

      if (requestId !== requestIdRef.current) {
        return;
      }

      setListing(negotiatePayload.listing);
      setNegotiation(negotiatePayload.negotiation);
      setMessages(messagesPayload.messages ?? []);
      setEvents(timelinePayload.events ?? []);
      setIsFallback(false);
      setError(null);
    } catch (loadError) {
      if (requestId !== requestIdRef.current) {
        return;
      }

      setListing(DEMO_LISTING);
      setNegotiation(DEMO_NEGOTIATION);
      setMessages(materializeDemoMessages());
      setEvents(materializeDemoEvents());
      setIsFallback(true);
      setError(loadError instanceof Error ? loadError.message : "Unable to load negotiation data.");
    } finally {
      if (requestId === requestIdRef.current) {
        setLoading(false);
        setInitialized(true);
      }
    }
  }

  useEffect(() => {
    void loadState();

    const intervalId = window.setInterval(() => {
      void loadState(true);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
      requestIdRef.current += 1;
    };
  }, [listingId]);

  async function analyze() {
    const response = await fetch("/api/agent/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ listingId })
    });
    const payload = await readJson<{ error?: string }>(response);

    if (!response.ok) {
      const nextError = payload.error ?? "Unable to refresh the negotiation analysis.";
      setStatusMessage(nextError);
      setError(nextError);
      return;
    }

    setStatusMessage("Negotiation analysis refreshed from the shared conversation thread.");
    setIsFallback(false);
    setError(null);
    await loadState(true);
  }

  async function refresh() {
    await loadState();
    if (!error) {
      setStatusMessage("Negotiation data refreshed.");
    }
  }

  async function resetDemo() {
    const response = await fetch("/api/demo/reset", { method: "POST" });
    const payload = await readJson<{ error?: string; seededMessages?: number }>(response);

    if (!response.ok) {
      const nextError = payload.error ?? "Unable to reset the demo listing.";
      setStatusMessage(nextError);
      setError(nextError);
      return;
    }

    setStatusMessage(
      payload.seededMessages
        ? `Demo listing reset with ${payload.seededMessages} seeded messages.`
        : "Demo listing reset."
    );
    setIsFallback(false);
    setError(null);
    await loadState(true);
  }

  async function sendMessage(payload: {
    senderRole: AgentRole;
    content: string;
    messageType: MessageType;
  }) {
    const response = await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        listing_id: listingId,
        content: payload.content,
        sender_role: payload.senderRole,
        message_type: payload.messageType
      })
    });
    const body = await readJson<{ error?: string; analysis?: unknown }>(response);

    if (!response.ok) {
      const nextError = body.error ?? "Unable to send the update.";
      setStatusMessage(nextError);
      setError(nextError);
      return { ok: false, error: nextError };
    }

    setStatusMessage(
      payload.messageType === "email"
        ? "Email update captured and negotiation analysis refreshed."
        : payload.messageType === "call_transcript"
          ? "Call note captured and negotiation analysis refreshed."
          : "Thread updated and negotiation analysis refreshed."
    );
    setIsFallback(false);
    setError(null);
    await loadState(true);
    return { ok: true };
  }

  async function transcribeAudio(payload: {
    audioBase64: string;
    audioMimeType: string;
  }) {
    const response = await fetch("/api/messages/transcribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const body = await readJson<{ transcript?: string; error?: string }>(response);

    if (!response.ok || !body.transcript) {
      return { error: body.error ?? "Unable to transcribe audio." };
    }

    return { transcript: body.transcript };
  }
  return {
    listing,
    negotiation,
    messages,
    events,
    loading,
    initialized,
    isFallback,
    error,
    statusMessage,
    analyze,
    refresh,
    resetDemo,
    sendMessage,
    transcribeAudio
  };
}

export function MessagesWorkspace({
  profile,
  feature,
  onOpenProfileSwitch
}: {
  profile: NegotiationShellProfile;
  feature: NegotiationFeatureController;
  onOpenProfileSwitch: () => void;
}) {
  const chatProfile = getChatProfile(profile);
  const [draft, setDraft] = useState("");
  const [composerError, setComposerError] = useState<string | null>(null);
  const [voiceStatus, setVoiceStatus] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const activeProfile = getProfileOption(profile);
  const currentOfferGap =
    typeof feature.listing.asking_price === "number" && typeof feature.negotiation.current_offer_price === "number"
      ? feature.listing.asking_price - feature.negotiation.current_offer_price
      : null;

  const messagesByType = useMemo(
    () => ({
      chat: feature.messages.filter((message) => message.message_type === "chat").length,
      email: feature.messages.filter((message) => message.message_type === "email").length,
      call: feature.messages.filter((message) => message.message_type === "call_transcript").length
    }),
    [feature.messages]
  );

  useEffect(() => {
    return () => {
      if (recorderRef.current && recorderRef.current.state !== "inactive") {
        recorderRef.current.stop();
      }
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  function stopStream() {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }

  async function blobToDataUrl(blob: Blob) {
    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Unable to read recorded audio."));
      reader.onloadend = () => resolve(String(reader.result));
      reader.readAsDataURL(blob);
    });
  }

  async function transcribeAudio(audioBlob: Blob, audioMimeType: string) {
    setIsTranscribing(true);
    setComposerError(null);
    setVoiceStatus("Transcribing with ElevenLabs...");

    try {
      const audioBase64 = await blobToDataUrl(audioBlob);
      const payload = await feature.transcribeAudio({
        audioBase64,
        audioMimeType
      });

      if (!payload.transcript) {
        setComposerError(payload.error ?? "Unable to transcribe audio.");
        setVoiceStatus(null);
        return;
      }

      setDraft((previous) => {
        const prior = previous.trim();
        return prior ? `${prior}\n${payload.transcript}` : payload.transcript!;
      });
      setVoiceStatus("Transcript ready.");
    } catch (transcriptionError) {
      setComposerError(
        transcriptionError instanceof Error ? transcriptionError.message : "Unable to transcribe audio."
      );
      setVoiceStatus(null);
    } finally {
      setIsTranscribing(false);
    }
  }

  async function startRecording() {
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      setComposerError("Voice recording is unavailable in this browser.");
      return;
    }

    try {
      setComposerError(null);
      setVoiceStatus("Listening... click the stop icon to finish.");

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];

      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const mimeType = recorder.mimeType || "audio/webm";
        const audioBlob = new Blob(chunksRef.current, { type: mimeType });
        recorderRef.current = null;
        stopStream();
        setIsRecording(false);
        void transcribeAudio(audioBlob, mimeType);
      };

      recorder.start();
      setIsRecording(true);
    } catch (recordingError) {
      stopStream();
      setIsRecording(false);
      setComposerError(recordingError instanceof Error ? recordingError.message : "Unable to start recording.");
      setVoiceStatus(null);
    }
  }

  function stopRecording() {
    if (!recorderRef.current || recorderRef.current.state === "inactive") {
      return;
    }

    setVoiceStatus("Finishing recording...");
    recorderRef.current.stop();
  }

  async function handleSendMessage() {
    if (!chatProfile || !draft.trim() || feature.loading || feature.isFallback || isSending) {
      return;
    }

    setIsSending(true);
    setComposerError(null);

    const result = await feature.sendMessage({
      senderRole: chatProfile.role,
      content: draft,
      messageType: "chat"
    });

    if (!result.ok) {
      setComposerError(result.error ?? "Unable to send the update.");
      setIsSending(false);
      return;
    }

    setDraft("");
    setVoiceStatus(null);
    setIsSending(false);
  }

  if (!chatProfile) {
    return (
      <div className="lofty-shell-section">
        <section className="builder-header glass-panel">
          <div>
            <span className="section-label">Messages</span>
            <h1>Agent-only conversation desk</h1>
            <p>
              The live message thread is available from the agent profiles. Switch to Ryan or Alex to continue the
              negotiation conversation.
            </p>
          </div>
        </section>

        <section className="soft-panel negotiation-empty-panel">
          <ShieldAlert size={22} />
          <div>
            <strong>{activeProfile.label} is currently in a read-only mode.</strong>
            <p>Negotiation status and timeline are still available from the Negotiation button in the right rail.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
      <div className="lofty-shell-section lofty-shell-section--messages">
        <section className="soft-panel messages-page-banner">
          <span className="messages-page-banner__title">Messages</span>
        </section>

      <section className="overview-strip negotiation-overview-strip">
        <div className="overview-card overview-card--offer">
          <span>Current Offer</span>
          <strong>{formatCurrency(feature.negotiation.current_offer_price)}</strong>
          <p>{currentOfferGap !== null ? `${formatCurrency(currentOfferGap)} below ask` : "Offer not detected yet"}</p>
        </div>
        <div className="overview-card overview-card--summary">
          <span>Listing</span>
          <strong>{feature.listing.address}</strong>
          <p>
            {feature.listing.bedrooms}BR / {feature.listing.bathrooms}BA at {formatCurrency(feature.listing.asking_price)}
          </p>
        </div>
      </section>

      <section className="chat-app-layout">
        <aside className="soft-panel chat-sidebar">
          <div className="chat-sidebar-header">
            <span className="section-label">Active User</span>
            <h1>{chatProfile.agentName}</h1>
            <p>{chatProfile.agentLabel}</p>
          </div>

          <div className="chat-contact-list">
            {chatProfile.contacts.map((contact) => (
              <div
                key={contact.name}
                className={contact.active ? "chat-contact-card chat-contact-card--active" : "chat-contact-card"}
              >
                <div className="chat-contact-avatar">{contact.initials}</div>
                <div className="chat-contact-copy">
                  <strong>{contact.name}</strong>
                  <span>{contact.detail}</span>
                  <p>{contact.preview}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-sidebar-footer">
            <div className="negotiation-sidebar-stats">
              <div className="metric-card">
                <span className="metric-card-label">Chat</span>
                <strong className="metric-card-value">{messagesByType.chat}</strong>
              </div>
              <div className="metric-card">
                <span className="metric-card-label">Email</span>
                <strong className="metric-card-value">{messagesByType.email}</strong>
              </div>
              <div className="metric-card">
                <span className="metric-card-label">Call</span>
                <strong className="metric-card-value">{messagesByType.call}</strong>
              </div>
            </div>

            <div className="status-box">
              <p className="metric-card-label">{feature.isFallback ? "Demo Fallback" : "Live Sync"}</p>
              <p className="helper-text">
                {feature.isFallback
                  ? feature.error ?? "Live services are unavailable, so this view is showing the seeded demo data."
                  : "Messages and inbound email updates are reloaded automatically and fed back into the negotiation analysis."}
              </p>
            </div>
            <div className="negotiation-action-stack">
              <button className="primary-button" onClick={() => void feature.analyze()} type="button">
                <RefreshCcw size={16} />
                Analyze now
              </button>
              <button className="secondary-button" onClick={() => void feature.refresh()} type="button">
                <RefreshCcw size={16} />
                Refresh feed
              </button>
              <button className="secondary-button" onClick={() => void feature.resetDemo()} type="button">
                <RotateCcw size={16} />
                Reset demo listing
              </button>
            </div>

            {feature.statusMessage ? (
              <div className="status-box">
                <p className="helper-text">{feature.statusMessage}</p>
              </div>
            ) : null}
          </div>
        </aside>

        <section className="soft-panel chat-main-shell">
          <section className="message-feed">
            <div className="message-feed-header">
              <div className="message-thread-summary">
                <div className="chat-contact-avatar">{chatProfile.activeContact.initials}</div>
                <div className="message-thread-copy">
                  <strong>{chatProfile.activeContact.name}</strong>
                  <span>{chatProfile.activeContact.detail}</span>
                  <p>{chatProfile.activeContact.status}</p>
                </div>
              </div>
              <div className="message-thread-actions">
                <span className={getStatusClass(feature.negotiation.status)}>
                  <span className="status-dot" />
                  Negotiation {feature.negotiation.status}
                </span>
                <span className="message-badge">{feature.isFallback ? "Demo Data" : "Live Polling"}</span>
              </div>
            </div>

            <div className="message-feed-body">
              {!feature.initialized && feature.loading ? (
                <div className="info-band">
                  <p className="helper-text">Loading the negotiation thread...</p>
                </div>
              ) : feature.messages.length === 0 ? (
                <div className="info-band">
                  <p className="helper-text">
                    Start the conversation here. New chat, email, and call-note updates will appear in this shared
                    negotiation thread.
                  </p>
                </div>
              ) : (
                feature.messages.map((message) => {
                  const isCurrentUser = message.sender_role === chatProfile.role;

                  return (
                    <div
                      key={message.id}
                      className={isCurrentUser ? "message-row message-row--self" : "message-row message-row--other"}
                    >
                      <article
                        className={`message-bubble ${
                          message.message_type === "email"
                            ? "message-bubble--email"
                            : message.message_type === "call_transcript"
                              ? "message-bubble--call"
                              : isCurrentUser
                                ? "message-bubble--self"
                                : "message-bubble--other"
                        }`}
                      >
                        <div className="message-bubble-topline">
                          <p className="message-bubble-author">{message.sender_name}</p>
                          <span className={getMessageTypeBadgeClass(message.message_type)}>
                            {getMessageTypeLabel(message.message_type)}
                          </span>
                        </div>
                        <p className="message-bubble-copy">{message.content}</p>
                        <p className="message-meta">{formatTimestamp(message.created_at)}</p>
                      </article>
                    </div>
                  );
                })
              )}
            </div>
          </section>

          <section className="composer-area">
            <textarea
              value={draft}
              onChange={(event) => {
                setDraft(event.target.value);
                setComposerError(null);
              }}
              className="text-field text-field--composer"
              placeholder="Type a negotiation update, concern, or counter-offer..."
            />

            {voiceStatus ? <p className="helper-text">{voiceStatus}</p> : null}

            <div className="composer-toolbar">
              <p className="helper-text">
                New updates immediately feed the thread and refresh the negotiation timeline in the dashboard.
              </p>
              <div className="composer-actions">
                <button
                  aria-label={isRecording ? "Stop recording" : "Start recording"}
                  className={`icon-button composer-mic-button${isRecording ? " icon-button--recording" : ""}`}
                  disabled={feature.isFallback || isSending || isTranscribing}
                  onClick={() => {
                    if (isRecording) {
                      stopRecording();
                      return;
                    }

                    void startRecording();
                  }}
                  title={isRecording ? "Stop recording" : "Start recording"}
                  type="button"
                >
                  {isRecording ? <Square size={16} /> : <Mic size={16} />}
                </button>
                <button
                  aria-label={isSending ? "Sending update" : "Send update"}
                  className="icon-button primary-button composer-send-button"
                  disabled={feature.isFallback || isSending || isRecording || isTranscribing || !draft.trim()}
                  onClick={() => void handleSendMessage()}
                  title={isSending ? "Sending update" : "Send update"}
                  type="button"
                >
                  <ArrowUp size={18} />
                </button>
              </div>
            </div>

            {(composerError || feature.error) && (
              <p className="field-error">{composerError ?? feature.error}</p>
            )}
          </section>
        </section>
      </section>
    </div>
  );
}

export function NegotiationWorkspace({
  profile,
  feature,
  onOpenProfileSwitch
}: {
  profile: NegotiationShellProfile;
  feature: NegotiationFeatureController;
  onOpenProfileSwitch: () => void;
}) {
  const viewConfig = getNegotiationViewConfig(profile);
  const activeProfile = getProfileOption(profile);
  const difference =
    typeof feature.negotiation.asking_price === "number" &&
    typeof feature.negotiation.current_offer_price === "number"
      ? feature.negotiation.asking_price - feature.negotiation.current_offer_price
      : null;

  return (
    <div className="lofty-shell-section">
      <section className="builder-header glass-panel">
        <div>
          <span className="section-label">{viewConfig.canManage ? "Negotiation Desk" : "Read Only View"}</span>
          <h1>{viewConfig.title}</h1>
          <p>{viewConfig.description}</p>

          <div className="info-band negotiation-hero-info">
            <p className="metric-card-label">Active Listing</p>
            <strong className="negotiation-hero-address">{feature.listing.address}</strong>
            <p className="helper-text">
              {feature.listing.bedrooms}BR / {feature.listing.bathrooms}BA listed at{" "}
              {formatCurrency(feature.listing.asking_price)}
            </p>
            {feature.listing.description ? <p className="helper-text">{feature.listing.description}</p> : null}
          </div>
        </div>

        <div className="negotiation-hero-actions">
          <span className="mini-chip">{activeProfile.label}</span>
          <button className="secondary-button" onClick={onOpenProfileSwitch} type="button">
            <ArrowRightLeft size={16} />
            Switch user
          </button>
          {viewConfig.canManage ? (
            <>
              <button className="primary-button" onClick={() => void feature.analyze()} type="button">
                <RefreshCcw size={16} />
                Analyze now
              </button>
              <button className="secondary-button" onClick={() => void feature.resetDemo()} type="button">
                <RotateCcw size={16} />
                Reset demo listing
              </button>
            </>
          ) : null}
        </div>
      </section>

      <section className="overview-strip negotiation-overview-strip">
        <div className="overview-card overview-card--summary">
          <span>Listing</span>
          <strong>{feature.listing.address}</strong>
          <p>
            {feature.listing.bedrooms}BR / {feature.listing.bathrooms}BA listed at{" "}
            {formatCurrency(feature.listing.asking_price)}
          </p>
        </div>
        <div className="overview-card">
          <span>Current Offer</span>
          <strong>{formatCurrency(feature.negotiation.current_offer_price)}</strong>
          <p>Latest working price detected across chat, email, and call updates.</p>
        </div>
        <div className="overview-card">
          <span>Status</span>
          <strong>{feature.negotiation.status.charAt(0).toUpperCase() + feature.negotiation.status.slice(1)}</strong>
          <div className="negotiation-status-wrap">
            <span className={getStatusClass(feature.negotiation.status)}>
              <span className="status-dot" />
              Negotiation {feature.negotiation.status}
            </span>
          </div>
        </div>
      </section>

      <div className="stack-md">
        {!feature.initialized && feature.loading ? (
          <section className="soft-panel negotiation-summary-panel">
            <div className="info-band">
              <p className="helper-text">Loading the live negotiation state...</p>
            </div>
          </section>
        ) : null}

        {feature.error ? (
          <section className="soft-panel negotiation-summary-panel">
            <div className="status-box status-box--warning">
              <p className="metric-card-label">{feature.isFallback ? "Demo Fallback" : "Attention Needed"}</p>
              <p className="helper-text">{feature.error}</p>
            </div>
          </section>
        ) : null}

        <section className="soft-panel negotiation-summary-panel">
          <div className="panel-heading">
            <div>
              <span className="section-label">
                {viewConfig.role === "agent"
                  ? "Agent Command View"
                  : viewConfig.role === "buyer"
                    ? "Buyer Summary"
                    : "Seller Summary"}
              </span>
              <h2>Negotiation Snapshot</h2>
              <p>Track pricing movement, open objections, and the items both sides have already aligned on.</p>
            </div>
            <span className={getStatusClass(feature.negotiation.status)}>
              <span className="status-dot" />
              {feature.negotiation.status.charAt(0).toUpperCase() + feature.negotiation.status.slice(1)}
            </span>
          </div>

          <div className="stack-md">
            <div className="summary-grid">
              <MetricCard label="Asking Price" value={formatCurrency(feature.negotiation.asking_price)} />
              <MetricCard label="Current Offer" value={formatCurrency(feature.negotiation.current_offer_price)} />
              <MetricCard label="Gap" value={difference !== null ? formatCurrency(difference) : "Unknown"} />
            </div>

            <div className="negotiation-section-grid">
              <NegotiationListBlock
                title="Buyer Concerns"
                items={feature.negotiation.buyer_concerns}
                emptyLabel="No buyer concerns are flagged right now."
              />
              <NegotiationListBlock
                title="Seller Concerns"
                items={feature.negotiation.seller_concerns}
                emptyLabel="No seller concerns are flagged right now."
              />
              <NegotiationListBlock
                title="Agreed Terms"
                items={feature.negotiation.agreed_terms}
                emptyLabel="No terms have been confirmed yet."
              />
              <NegotiationListBlock
                title="Pending Items"
                items={feature.negotiation.pending_items}
                emptyLabel="Nothing currently pending."
              />
            </div>
          </div>
        </section>

        <section className="soft-panel">
          <div className="panel-heading">
            <div>
              <span className="section-label">AI Analyst</span>
              <h2>Negotiation Summary</h2>
              <p>Latest extracted state for the agent and client views, refreshed from the shared conversation thread.</p>
            </div>
            {viewConfig.canManage ? (
              <button className="secondary-button" onClick={() => void feature.analyze()} type="button">
                <RefreshCcw size={16} />
                Analyze now
              </button>
            ) : null}
          </div>

          <div className="info-band">
            <p className="helper-text negotiation-summary-copy">
              {feature.negotiation.agent_summary ?? "No summary is available yet."}
            </p>
            <p className="message-meta">Updated {formatRelativeTime(feature.negotiation.last_analyzed_at)}</p>
          </div>

          {feature.statusMessage ? (
            <div className="status-box negotiation-analysis-status">
              <p className="helper-text">{feature.statusMessage}</p>
            </div>
          ) : null}
        </section>

        <section className="soft-panel">
          <div className="panel-heading">
            <div>
              <span className="section-label">Negotiation Timeline</span>
              <h2>Event Feed</h2>
              <p>Significant moments detected across chat, call notes, and inbound emails.</p>
            </div>
          </div>

          <div className="timeline-list">
            {feature.events.length === 0 ? (
              <div className="info-band">
                <p className="helper-text">Timeline events will appear here as the negotiation evolves.</p>
              </div>
            ) : (
              feature.events.map((event, index) => (
                <div key={event.id} className="timeline-item">
                  <div className="timeline-rail" aria-hidden="true" />
                  <div
                    className={index === feature.events.length - 1 ? "timeline-marker timeline-marker--active" : "timeline-marker"}
                    aria-hidden="true"
                  />
                  <article className="timeline-card">
                    <div className="timeline-card-header">
                      <div>
                        <p className="metric-card-label">{getEventLabel(event.event_type)}</p>
                        <p className="timeline-card-copy">{event.summary}</p>
                      </div>
                      <span className={getTimelineSourceClass(event.source_type)}>{event.source_type}</span>
                    </div>
                    {event.price_at_event ? (
                      <p className="helper-text">Offer snapshot: {formatCurrency(event.price_at_event)}</p>
                    ) : null}
                    <p className="message-meta">{formatTimestamp(event.created_at)}</p>
                  </article>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export function ProfileSwitchModal({
  activeProfile,
  onClose,
  onSelectProfile
}: {
  activeProfile: NegotiationShellProfile;
  onClose: () => void;
  onSelectProfile: (profile: NegotiationShellProfile) => void;
}) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel profile-switch-modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>Switch active user</h3>
            <p>Choose which perspective the Messages and Negotiation views should open with.</p>
          </div>
          <button className="icon-button" onClick={onClose} type="button">
            <X size={16} />
          </button>
        </div>

        <div className="profile-switch-grid">
          {PROFILE_OPTIONS.map((option) => (
            <button
              key={option.id}
              className={option.id === activeProfile ? "profile-switch-card profile-switch-card--active" : "profile-switch-card"}
              onClick={() => onSelectProfile(option.id)}
              type="button"
            >
              <div className="profile-switch-card-top">
                <div className="profile-switch-avatar">
                  <UserRound size={18} />
                </div>
                <div>
                  <strong>{option.label}</strong>
                  <span>{option.name}</span>
                </div>
              </div>
              <p>{option.description}</p>
              <div className="profile-switch-card-footer">
                <span>{option.email}</span>
                <ChevronRight size={16} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric-card">
      <span className="metric-card-label">{label}</span>
      <strong className="metric-card-value">{value}</strong>
    </div>
  );
}

function NegotiationListBlock({
  title,
  items,
  emptyLabel
}: {
  title: string;
  items: string[];
  emptyLabel: string;
}) {
  return (
    <div className="stack-sm">
      <div>
        <p className="metric-card-label">{title}</p>
      </div>
      {items.length === 0 ? (
        <div className="info-band">
          <p className="helper-text">{emptyLabel}</p>
        </div>
      ) : (
        <ul className="list-block">
          {items.map((item) => (
            <li key={item}>
              <CircleDot size={14} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
