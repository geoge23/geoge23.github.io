(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[89],{621:function(e,t,r){const n=r(9852);e.exports={MDXRenderer:n}},9852:function(e,t,r){var n=r(1132),o=r(9646),c=r(3693),s=r(1847);const a=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const i=r(6540),{mdx:f}=r(5680),{useMDXScope:p}=r(6842);e.exports=function(e){let{scope:t,children:r}=e,c=s(e,a);const l=p(t),m=i.useMemo((()=>{if(!r)return null;const e=u({React:i,mdx:f},l),t=Object.keys(e),c=t.map((t=>e[t]));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(c)))}),[r,t]);return i.createElement(m,u({},c))}},2869:function(e,t,r){"use strict";r.d(t,{A:function(){return a}});var n=r(8007),o=r(978),c=r(6540);function s(e){let{url:t="about:blank",children:r=[]}=e;return c.createElement(n.Link,{to:t,className:"mt-1 font-light text-xl lowercase mr-2"},r)}function a(){return c.createElement("header",{className:"flex flex-col md:flex-row m-6 items-center justify-between"},c.createElement("div",{className:"flex items-center cursor-pointer",onClick:()=>(0,n.navigate)("/"),onKeyDown:e=>{let{key:t}=e;return"Enter"===t?(0,n.navigate)("/"):null},role:"link",tabIndex:0},c.createElement(o.S,{src:"../../images/gcs.png",className:"h-14 w-14",alt:"",__imageData:r(8994)}),c.createElement("p",{className:"ml-3 font-medium text-2xl"},"George Parks")),c.createElement("div",{className:"ml-3 md:mt-0 mt-2"},c.createElement(s,{url:"/resume"},"Resume"),c.createElement(s,{url:"/portfolio"},"Portfolio"),c.createElement(s,{url:"/contact"},"Contact"),c.createElement(s,{url:"/blog"},"Blog")))}},3397:function(e,t,r){"use strict";r.r(t);var n=r(621),o=r(6540),c=r(8154),s=r(2869);t.default=function(e){let{data:t}=e;return o.createElement(o.Fragment,null,o.createElement(s.A,null),o.createElement(c.m,null,o.createElement("title",null,"George Parks | ",t.mdx.frontmatter.title)),o.createElement("main",{className:"responsive-body"},o.createElement("div",{className:"markdown-body w-full"},o.createElement(n.MDXRenderer,null,t.mdx.body))))}},79:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},5901:function(e,t,r){var n=r(79);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9646:function(e,t,r){var n=r(7550),o=r(5636);e.exports=function(e,t,r){if(n())return Reflect.construct.apply(null,arguments);var c=[null];c.push.apply(c,t);var s=new(e.bind.apply(e,c));return r&&o(s,r.prototype),s},e.exports.__esModule=!0,e.exports.default=e.exports},3693:function(e,t,r){var n=r(7736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7550:function(e){function t(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(r){}return(e.exports=t=function(){return!!r},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9291:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},1869:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},1847:function(e,t,r){var n=r(4893);e.exports=function(e,t){if(null==e)return{};var r,o,c=n(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c},e.exports.__esModule=!0,e.exports.default=e.exports},4893:function(e){e.exports=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r},e.exports.__esModule=!0,e.exports.default=e.exports},1132:function(e,t,r){var n=r(5901),o=r(9291),c=r(7122),s=r(1869);e.exports=function(e){return n(e)||o(e)||c(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},9045:function(e,t,r){var n=r(3738).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7736:function(e,t,r){var n=r(3738).default,o=r(9045);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},3738:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7122:function(e,t,r){var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},8994:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c6f4a772a589f10002ffe481c1ce28e7/45b13/gcs.png","srcSet":"/static/c6f4a772a589f10002ffe481c1ce28e7/83fe9/gcs.png 35w,\\n/static/c6f4a772a589f10002ffe481c1ce28e7/fd188/gcs.png 69w,\\n/static/c6f4a772a589f10002ffe481c1ce28e7/45b13/gcs.png 138w","sizes":"(min-width: 138px) 138px, 100vw"},"sources":[{"srcSet":"/static/c6f4a772a589f10002ffe481c1ce28e7/dbb7e/gcs.webp 35w,\\n/static/c6f4a772a589f10002ffe481c1ce28e7/d2c86/gcs.webp 69w,\\n/static/c6f4a772a589f10002ffe481c1ce28e7/8fcdc/gcs.webp 138w","type":"image/webp","sizes":"(min-width: 138px) 138px, 100vw"}]},"width":138,"height":138}')}}]);
//# sourceMappingURL=component---src-templates-page-js-6de0a90bfa4c3e02cc51.js.map