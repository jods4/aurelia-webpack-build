webpackJsonp([0],{46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"PageHelloViewModel",function(){return o});var o=function(){function e(){this.name=""}return e}()},47:function(e,t,n){"use strict";function o(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l}t.a=o;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}},"customElements/hello-tag":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(47),r=n("aurelia-framework");n.d(t,"HelloTagCustomElement",function(){return a});var a=function(){function e(){}return e}();o.a([r.b],a.prototype,"name",void 0)},"customElements/hello-tag.html":function(e,t){e.exports="<template> <div class=tag-header> HELLO<br> MY NAME IS </div> <div class=tag-body>${name}</div> </template>"},"page-hello.html":function(e,t,n){e.exports='<template> <require from=customElements/hello-tag></require> <h3>Hello page</h3> <div> What\'s your name? <br> <input value.bind=name /> </div> <hello-tag name.bind="name | upper" if.bind=name></hello-tag> </template>'}});