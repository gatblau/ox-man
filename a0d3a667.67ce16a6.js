(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),a=(n(0),n(89)),i=n(91),c={id:"onix_usecases",title:"Use Cases"},s={unversionedId:"onix_usecases",id:"onix_usecases",isDocsHomePage:!1,title:"Use Cases",description:"The most common use cases for using Onix are shown if the figure below.",source:"@site/docs/onix_usecases.md",permalink:"/ox-man/docs/onix_usecases",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/onix_usecases.md",sidebar:"someSidebar",previous:{title:"Architecture",permalink:"/ox-man/docs/onix_arc"},next:{title:"Installation",permalink:"/ox-man/docs/started_install"}},u=[],l={rightToc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The most common use cases for using Onix are shown if the figure below."),Object(a.b)("img",{alt:"Use Cases",src:Object(i.a)("img/ox_use_cases.png")}),Object(a.b)("p",null,"There are three high level use cases:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Record any configuration change"),": this category is associated with compliance requirements where there is a need to\nkeep track of any change in IT system configuration.")),Object(a.b)("p",null,"Two examples are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Track IT Systems Availability Status for comprehensive SLA recording."),Object(a.b)("li",{parentName:"ul"},"Track changes to IT System configuration for audit, security, non-repudiation, troubleshooting, forensics, etc.")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Report on configuration information & changes")," for:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"SLA reporting"),Object(a.b)("li",{parentName:"ul"},"Identification and correlation of issues"),Object(a.b)("li",{parentName:"ul"},"Apportioning of resource usage")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Control systems by changing their configuration")," for example:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Becoming a central point of governance for Kubernetes resource allocation"),Object(a.b)("li",{parentName:"ul"},"Controlling the behaviour of cloud native applications centrally"),Object(a.b)("li",{parentName:"ul"},"Managing the lifecycle of cloud native application databases")))}b.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),f=r,m=b["".concat(i,".").concat(f)]||b[f]||p[f]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";var r=n(0),o=n(20);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(90),o=n(93);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return u?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},93:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);