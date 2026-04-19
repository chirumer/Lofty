"use client";

import { useEffect, useMemo, useRef } from "react";
import { LoaderCircle, RotateCcw, SendHorizontal, WandSparkles } from "lucide-react";

import {
  COPILOT_MODEL_OPTIONS,
  getCopilotModelOption,
  type CopilotChatMessage,
  type CopilotModelId
} from "@/lib/ai-copilots";
import type { LaunchedShellView } from "@/src/types";

type AICopilotsPanelProps = {
  activeView: LaunchedShellView;
  draft: string;
  error: string | null;
  isSending: boolean;
  messages: CopilotChatMessage[];
  selectedModelId: CopilotModelId;
  enabledListingCount: number;
  onDraftChange: (value: string) => void;
  onModelChange: (modelId: CopilotModelId) => void;
  onClearChat: () => void;
  onMessageAction: (actionKind: NonNullable<CopilotChatMessage["action"]>["kind"]) => void;
  onSend: () => void;
  onStartBuilding: () => void;
};

export default function AICopilotsPanel({
  activeView,
  draft,
  error,
  isSending,
  messages,
  selectedModelId,
  enabledListingCount,
  onDraftChange,
  onModelChange,
  onClearChat,
  onMessageAction,
  onSend,
  onStartBuilding
}: AICopilotsPanelProps) {
  const transcriptRef = useRef<HTMLDivElement | null>(null);
  const selectedModel = useMemo(() => getCopilotModelOption(selectedModelId), [selectedModelId]);
  const isIdxBuilder = activeView === "idx-builder";
  const hasActiveChat = messages.length > 0 || isSending;

  useEffect(() => {
    const container = transcriptRef.current;
    if (!container) {
      return;
    }

    container.scrollTop = container.scrollHeight;
  }, [isSending, messages]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft.trim()) {
      return;
    }
    onSend();
  }

  function handleComposerKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!draft.trim()) {
        return;
      }
      onSend();
    }
  }

  return (
    <div className="ai-copilots-panel">
      {!hasActiveChat ? (
        <>
          <div className="ai-copilots-panel__intro">
            <div>
              <span className="section-kicker">{isIdxBuilder ? "IDX Builder" : "AI Copilots"}</span>
              <h3>{isIdxBuilder ? "AI Copilots are standing by" : "Chat with Lofty AI"}</h3>
              <p>
                {isIdxBuilder
                  ? `Use Gemini to draft your first website direction with ${enabledListingCount} connected listing${enabledListingCount === 1 ? "" : "s"} in context.`
                  : "Ask for copy, workflow help, quick research, or launch guidance from anywhere in the launched workspace."}
              </p>
            </div>

            {isIdxBuilder ? (
              <button
                className="primary-button ai-copilots-panel__starter"
                type="button"
                onClick={onStartBuilding}
                disabled={isSending}
              >
                <WandSparkles size={16} />
                Start building
              </button>
            ) : null}
          </div>

          <div className="ai-copilots-panel__toolbar">
            <label className="ai-copilots-panel__field">
              <span>Model</span>
              <select value={selectedModelId} onChange={(event) => onModelChange(event.target.value as CopilotModelId)} disabled={isSending}>
                {COPILOT_MODEL_OPTIONS.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.label}
                  </option>
                ))}
              </select>
            </label>
            <div className="ai-copilots-panel__model-note">Replies are currently powered by {selectedModel.label}.</div>
          </div>
        </>
      ) : null}

      {hasActiveChat ? (
        <div className="ai-copilots-panel__session-actions">
          <button className="secondary-button ai-copilots-panel__clear" type="button" onClick={onClearChat}>
            <RotateCcw size={15} />
            Clear chat
          </button>
        </div>
      ) : null}

      <div ref={transcriptRef} className="ai-copilots-panel__transcript" aria-live="polite">
        {messages.length === 0 ? (
          <div className="ai-copilots-panel__empty">
            <strong>Start the first conversation</strong>
            <p>
              {isIdxBuilder
                ? "Generate a website draft, ask for homepage copy, or refine the positioning for your connected listings."
                : "Ask AI Copilots to summarize next steps, draft copy, or help you move faster in this view."}
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <article
              key={message.id}
              className={`ai-copilots-message ai-copilots-message--${message.role === "assistant" ? "assistant" : "user"}`}
            >
              <div className="ai-copilots-message__meta">
                <strong>{message.role === "assistant" ? "AI Copilot" : "You"}</strong>
                <span>{formatMessageTime(message.createdAt)}</span>
              </div>
              <p>{message.content}</p>
              {message.role === "assistant" && message.action ? (
                <div className="ai-copilots-message__actions">
                  <button
                    className="secondary-button ai-copilots-message__action"
                    type="button"
                    onClick={() => onMessageAction(message.action!.kind)}
                  >
                    {message.action.label}
                  </button>
                </div>
              ) : null}
            </article>
          ))
        )}

        {isSending ? (
          <div className="ai-copilots-panel__loading">
            <LoaderCircle size={16} className="ai-copilots-panel__spinner" />
            <span>Thinking with Gemini…</span>
          </div>
        ) : null}
      </div>

      {error ? <div className="ai-copilots-panel__error">{error}</div> : null}

      <form className="ai-copilots-panel__composer" onSubmit={handleSubmit}>
        <textarea
          value={draft}
          onChange={(event) => onDraftChange(event.target.value)}
          onKeyDown={handleComposerKeyDown}
          placeholder={
            isIdxBuilder
              ? "Ask for homepage copy, section ideas, lead-capture strategy, or listing positioning…"
              : "Ask AI Copilots for help in this workspace…"
          }
          rows={4}
        />
        <div className="ai-copilots-panel__composer-actions">
          <span>Shift + Enter for a new line</span>
          <button className="primary-button" type="submit" disabled={isSending || !draft.trim()}>
            <SendHorizontal size={16} />
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

function formatMessageTime(value: string) {
  const timestamp = new Date(value);

  if (Number.isNaN(timestamp.getTime())) {
    return "Just now";
  }

  return timestamp.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}
