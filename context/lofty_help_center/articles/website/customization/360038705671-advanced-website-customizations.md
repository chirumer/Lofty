# Advanced Website Customizations

- Article ID: `360038705671`
- Category: `Website`
- Section: `Customization`
- Updated: `2025-11-11T09:29:25Z`
- Source: https://help.lofty.com/hc/en-us/articles/360038705671-Advanced-Website-Customizations

## Body

## Introduction

If you have front-end development experience and knowledge and want to get more in-depth with your website customizations, this article will provide you with the basic information you need to get started when using the Lofty CSM to do this.

There are three levels at which you can perform advanced customizations on your Lofty-built website--all of which are explained in detail in the sections below. Depending on what you want to accomplish (integrating a third-party widget, modifying a page's style, etc.), you will want to understand what is available at each level.

Notice: The Starter package does not come with this feature. If you are on a Starter package and interested in using this feature to its full effect, please contact Support to get upgrade options.

## Summary

1. Global Customizations
2. Website Currency
3. Page Customizations
4. Block Customizations

## Global Customizations

To establish global customizations on your Lofty-built website, navigate to the CMS > Settings > Tools . You should be able to click here to get there as well (assuming you are signed in).

This type of customization is divided into two different areas: (a) styles and (b) scripts--both of which are explained in more detail in their corresponding section below.

### (a) Global Styles

Styles influence a page's layout, structure, color, shape, etc. Scripts can greatly enhance the visual aspects of static web pages.

- Add document.head to the link tag embedded.
- Write style directly. For example, use h1{color:red;} rather than <style>h1{color:red;}<style> .

### (b) Global Scripts

An example of when you might use scripts is if you need to embed a piece of code to track your site's conversion.

Run the new Function('siteAppVm', customcode.script)(siteAppVm) each time you enter the page. This can be used as an immediate function.

- The script content is the function body
- The properties defined in the function body are not globally accessible
- The function parameter is siteAppVm (explained in the global object)

For example, to globally define a method foo() that fires when a button is clicked, you would do the following.

Custom Style & Script / Script:

window.foo(){

console.log('hello, world')

}
Button to trigger:

<a href="javascript:foo();">WELCOME!</a>
### Global Object

#### (1) siteAppVm

SiteAppVm is a Vue instance mounted on the document.querySelector('main.page-content') element.

moduleData

ModuleData is an array [{name: module 1,data:{}},{name: module 2,data:{}}] . Objects are modules on the page in the array. Modules are displayed from top to bottom on the page. Depending on the dynamic binding technology, you can modify the moduleData in the moduleData to modify the content display of the module.

// Suppose siteAppvm. moduleData[0] is a header module

// Change the size of the logo to 300

siteAppVm.moduleData[0].data.size = 300
#### (2) Util

(a) addStyle(css, async=true)

Function : Add link tag in document.head

Usage : Util.addStyle(css:String, async:Boolean)

Parameters :

CSS:

If the CSS string contains '.css', then regard it as a link. For example:

Util.addStyle("//static.chimeroi.com/servicetool-temp/example.css", true)
Or the CSS string refers to the content of the style like this:

Util.addStyle(".red{color:red;}", true)
Async:

- True: This means that the return of the Util.addStyle() the function is Promise, which means the CSS code has been completely loaded on this page.

- False: This means that the return of the Util.addStyle() function is a link element that loads the CSS code in the document.

(a) Example : How to introduce a Google font link: https://fonts.googleapis.com/css?family=Sofia

Because this is a link without '.css', then a '&name=sofia.css' suffix needs to be used to let Util.addStyle() function by regarding it as a link.

Util.addStyle("https://fonts.googleapis.com/css?family=Sofia&name=sofia.css")
(b) addScript(url, async = true)

Function : Add script code in document.body

Usage : Util.addScript(url: String, async: Boolean)

Parameters :

URL:

A link to the script page

Async:

- True: This means that the return of the Util.addScript() function is Promise, which means the JavaScript has been completely loaded. If the script was cached, then it will use cache.

- False: This means that it will insert the external link script in <head> instead of using cache.

(b) Example : Run certain functions after some JavaScript has been loaded completely.

Util.addScript('//www.example.com/1.js').then(_=>foo())
It is necessary to run the script again each time a new page is reached instead of using the cache. Suppose the content of this link https://www.example.com/1.js is as follows:

console.log('welcom to visit', location.pathname)
The control center needs to publish the path of the current page each time it is reached.

Util.addScript('//www.example.com/1.js', false)
(c) toast(text, delay = 1000)

Usage : Util.toast(text:String, delay: Number)

Example : Util.toast('hello', delay: 2000) . With this function, a hint of 'hello' will show on the current page and disappear two seconds later.

(d) isMobileSize(size = 600)

Usage : Util.isMobileSize(Number) Example : Util.isMobileSize(700) . Used to determine whether the screen width is less than 700px.

(e) Util.login(options)

Function : Pop up a login box

Attributes in options :

Attributes | Type | Function
allowClose | Boolean | Whether a close button is permitted
showFacebook | Boolean | Whether to allow the site visitor to log in with a Facebook account or not
showGoogle | Boolean | Whether to allow the site visitor to log in with a Google account or not

Example : Pop up the login box with a close button.

Util.login({allowClose: true})
(f) Util.register(options)

Function : Pop up a registration box Attributes in options :

Attributes | Type | Function
allowClose | Boolean | Whether a close button is permitted
showFacebook | Boolean | Whether to allow the site visitor to register with  a Facebook account or not
showGoogle | Boolean | Whether to allow the site visitor to register with a Google account or not

Example : Pop up the forced registration box without a close button and using a Google account to register is not allowed.

Util.login({allowClose: false, showGoogle: false})
#### (3) siteAxios

The siteAxios points to the module [axios](https://github.com/axios/axios).

Using the axios module to intercept a request and modify the request parameters:

// Add a request interceptor

window.siteAxios.interceptors.request.use(

function (config) {

// Do something before request is sent

return config;

},

function (error) {

// Do something with request error

return Promise.reject(error);

}

);
Using the axios module to intercept a response and modify the response data:

// Add a response interceptor

window.siteAxios.interceptors.response.use(

function (response) {

// Any status code that lie within the range of 2xx cause this function to trigger

// Do something with response data

// For example:

var config = response.__config__;

var addHouse = /api-site\/sell\add-house/;

var register = /api-site\/leadRegister;

if (config && (register.test(configurl) || addHouse.test(config.url))) {

debugger

}

return response;

},

function (error) {

// Any status codes that falls outside the range of 2xx cause this function to trigger

// Do something with response error

return Promise.reject(error);

}

);
## Website Currency

This setting allows Lofty users to change the default currencies on their Lofty websites. Visitors to these websites can also change the currency displayed.

To access this setting, navigate to CMS -> Tools -> Language/Currency . There is an option to sync currencies to agent subdomains, but subdomains cannot set their own currencies.

We currently support the following currencies:

- US Dollar
- Canadian Dollar
- Euro
- Pound Sterling
- Chinese Yuan
- Japanese Yen

Visitors to the website can easily change the currency:

The currency will change in the following sections:

- Listing/Sold prices
- Home Valuation values
- Mortgage Calculator

## Page Customizations

To establish global customizations on your Lofty-built website, first navigate to the CMS > Page Editor > Pages :

Once you have clicked on Pages , select the setting wheel for the page you would like to add customize to. The screenshot below shows the Home Page being selected, but you can choose the page that you want to apply the customization to.

Then, scroll down and select the drop-down menu for Page Style & Script :

This type of customization is also divided into two different areas: (a) styles and (b) scripts. Both are explained below.

### (a) Page Styles

Page styles influence the current page's layout, structure, color, shape, etc.

The page style will only apply to the current page. You can add it to the page by using Util.addStyle(pageStyle, false) .

Write style directly. For example, use h1{color:red;} rather than <style>h1{color:red;}<style> .

### (b) Page Scripts

Page scripts can significantly enhance the current static page. You may consider using page scripts when you need to embed a script to track certain conversion data on the current page.

Page scripts will only run on the current page. Similar to what is outlined above for Global Scripts , the page scripts also run by using new Function(pageScript).call(siteAppVm) . But the 'this' pointer points to siteAppVm.

## Block Customizations

There are two block types available in the Lofty CMS that can be utilized to embed custom code. Please reference the two articles below to learn more:

- Content Block
- Code Block

## Questions?

If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM. Related term: custom style, custom script

## Plain Text

Introduction
If you have front-end development experience and knowledge and want to get more in-depth with your website customizations, this article will provide you with the basic information you need to get started when using the Lofty CSM to do this.
There are three levels at which you can perform advanced customizations on your Lofty-built website--all of which are explained in detail in the sections below. Depending on what you want to accomplish (integrating a third-party widget, modifying a page's style, etc.), you will want to understand what is available at each level.
Notice:
The Starter package does not come with this feature. If you are on a Starter package and interested in using this feature to its full effect, please contact
Support (https://help.lofty.com/hc/en-us/articles/115001982346)
to get upgrade options.
Summary
Global Customizations (#h_01FGSY7KBXT85X8H3MGNYNJ9N5)
Website Currency (#h_01GDY0221ZBFCFKR2D61NZXVV5)
Page Customizations (#h_01FGSY8Y3VAZK2CHCCD7CX4PGG)
Block Customizations (#h_01FGSY91JJY0NSTMJSSG1D9T05)
Global Customizations
To establish global customizations on your Lofty-built website, navigate to the
CMS
>
Settings
>
Tools
. You should be able to
click here (https://cms.lofty.com/cmsnew/setting?sp=customCode)
to get there as well (assuming you are signed in).
This type of customization is divided into two different areas: (a) styles and (b) scripts--both of which are explained in more detail in their corresponding section below.
(a) Global Styles
Styles influence a page's layout, structure, color, shape, etc. Scripts can greatly enhance the visual aspects of static web pages.
Add
document.head
to the link tag embedded.
Write style directly. For example, use
h1{color:red;}
rather than
<style>h1{color:red;}<style>
.
(b) Global Scripts
An example of when you might use scripts is if you need to embed a piece of code to track your site's conversion.
Run the
new Function('siteAppVm', customcode.script)(siteAppVm)
each time you enter the page. This can be used as an immediate function.
The script content is the function body
The properties defined in the function body are not globally accessible
The function parameter is siteAppVm (explained in the global object)
For example, to globally define a method
foo()
that fires when a button is clicked, you would do the following.
Custom Style & Script / Script:
window.foo(){
console.log('hello, world')
}
Button to trigger:
<a href="javascript:foo();">WELCOME!</a>
Global Object
(1) siteAppVm
SiteAppVm is a Vue instance mounted on the
document.querySelector('main.page-content')
element.
moduleData
ModuleData is an array
[{name: module 1,data:{}},{name: module 2,data:{}}]
. Objects are modules on the page in the array. Modules are displayed from top to bottom on the page. Depending on the dynamic binding technology, you can modify the moduleData in the moduleData to modify the content display of the module.
// Suppose siteAppvm. moduleData[0] is a header module
// Change the size of the logo to 300
siteAppVm.moduleData[0].data.size = 300
(2) Util
(a) addStyle(css, async=true)
Function
: Add link tag in
document.head
Usage
:
Util.addStyle(css:String, async:Boolean)
Parameters
:
CSS:
If the CSS string contains '.css', then regard it as a link. For example:
Util.addStyle("//static.chimeroi.com/servicetool-temp/example.css", true)
Or the CSS string refers to the content of the style like this:
Util.addStyle(".red{color:red;}", true)
Async:
- True: This means that the return of the
Util.addStyle()
the function is Promise, which means the CSS code has been completely loaded on this page.
- False: This means that the return of the
Util.addStyle()
function is a link element that loads the CSS code in the document.
(a) Example
: How to introduce a Google font link: https://fonts.googleapis.com/css?family=Sofia
Because this is a link without '.css', then a '&name=sofia.css' suffix needs to be used to let Util.addStyle() function by regarding it as a link.
Util.addStyle("https://fonts.googleapis.com/css?family=Sofia&name=sofia.css")
(b) addScript(url, async = true)
Function
: Add script code in
document.body
Usage
:
Util.addScript(url: String, async: Boolean)
Parameters
:
URL:
A link to the script page
Async:
- True: This means that the return of the
Util.addScript()
function is Promise, which means the JavaScript has been completely loaded. If the script was cached, then it will use cache.
- False: This means that it will insert the external link script in <head> instead of using cache.
(b) Example
: Run certain functions after some JavaScript has been loaded completely.
Util.addScript('//www.example.com/1.js').then(_=>foo())
It is necessary to run the script again each time a new page is reached instead of using the cache. Suppose the content of this link https://www.example.com/1.js is as follows:
console.log('welcom to visit', location.pathname)
The control center needs to publish the path of the current page each time it is reached.
Util.addScript('//www.example.com/1.js', false)
(c) toast(text, delay = 1000)
Usage
:
Util.toast(text:String, delay: Number)
Example
:
Util.toast('hello', delay: 2000)
. With this function, a hint of 'hello' will show on the current page and disappear two seconds later.
(d) isMobileSize(size = 600)
Usage
:
Util.isMobileSize(Number)
Example
:
Util.isMobileSize(700)
. Used to determine whether the screen width is less than 700px.
(e) Util.login(options)
Function
: Pop up a login box
Attributes in options
:
Attributes
Type
Function
allowClose
Boolean
Whether a close button is permitted
showFacebook
Boolean
Whether to allow the site visitor to log in with a Facebook account or not
showGoogle
Boolean
Whether to allow the site visitor to log in with a Google account or not
Example
: Pop up the login box
with
a close button.
Util.login({allowClose: true})
(f) Util.register(options)
Function
: Pop up a registration box
Attributes in options
:
Attributes
Type
Function
allowClose
Boolean
Whether a close button is permitted
showFacebook
Boolean
Whether to allow the site visitor to register with  a Facebook account or not
showGoogle
Boolean
Whether to allow the site visitor to register with a Google account or not
Example
: Pop up the forced registration box
without
a close button and using a Google account to register is
not
allowed.
Util.login({allowClose: false, showGoogle: false})
(3) siteAxios
The siteAxios points to the module [axios](https://github.com/axios/axios).
Using the axios module to intercept a request and modify the request parameters:
// Add a request interceptor
window.siteAxios.interceptors.request.use(
function (config) {
// Do something before request is sent
return config;
},
function (error) {
// Do something with request error
return Promise.reject(error);
}
);
Using the axios module to intercept a response and modify the response data:
// Add a response interceptor
window.siteAxios.interceptors.response.use(
function (response) {
// Any status code that lie within the range of 2xx cause this function to trigger
// Do something with response data
// For example:
var config = response.__config__;
var addHouse = /api-site\/sell\add-house/;
var register = /api-site\/leadRegister;
if (config && (register.test(configurl) || addHouse.test(config.url))) {
debugger
}
return response;
},
function (error) {
// Any status codes that falls outside the range of 2xx cause this function to trigger
// Do something with response error
return Promise.reject(error);
}
);
Website Currency
This setting allows Lofty users to change the default currencies on their Lofty websites. Visitors to these websites can also change the currency displayed.
To access this setting, navigate to
CMS -> Tools -> Language/Currency
. There is an option to sync currencies to agent subdomains, but subdomains
cannot
set their own currencies.
We currently support the following currencies:
US Dollar
Canadian Dollar
Euro
Pound Sterling
Chinese Yuan
Japanese Yen
Visitors to the website can easily change the currency:
The currency will change in the following sections:
Listing/Sold prices
Home Valuation
values
Mortgage Calculator
Page Customizations
To establish global customizations on your Lofty-built website, first navigate to the
CMS
>
Page Editor
>
Pages
:
Once you have clicked on
Pages
, select the setting wheel for the page you would like to add customize to. The screenshot below shows the
Home Page
being selected, but you can choose the page that you want to apply the customization to.
Then, scroll down and select the drop-down menu for
Page Style & Script
:
This type of customization is also divided into two different areas: (a) styles and (b) scripts. Both are explained below.
(a) Page Styles
Page styles influence the current page's layout, structure, color, shape, etc.
The page style will only apply to the current page. You can add it to the page by using
Util.addStyle(pageStyle, false)
.
Write style directly. For example, use
h1{color:red;}
rather than
<style>h1{color:red;}<style>
.
(b) Page Scripts
Page scripts can significantly enhance the current static page. You may consider using page scripts when you need to embed a script to track certain conversion data on the current page.
Page scripts will only run on the current page. Similar to what is outlined above for
Global Scripts (#h_01FGSZR2TA9N0B596QVXSAJKEN)
, the page scripts also run by using
new Function(pageScript).call(siteAppVm)
. But the 'this' pointer points to siteAppVm.
Block Customizations
There are two block types available in the Lofty CMS that can be utilized to embed custom code. Please reference the two articles below to learn more:
Content Block (https://help.lofty.com/hc/en-us/articles/360038611351)
Code Block (https://help.lofty.com/hc/en-us/articles/4407612265499)
Questions?
If you have any questions regarding this topic or any others, please reach out to our Support Team via email at <support@lofty.com>, by phone at 1 (855) 981-7557, or by chat with us through your Lofty CRM.
Related term: custom style, custom script
