(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[355],{621:function(e,t,r){const n=r(9852);e.exports={MDXRenderer:n}},9852:function(e,t,r){var n=r(1132),o=r(9646),a=r(3693),c=r(1847);const i=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const u=r(6540),{mdx:f}=r(5680),{useMDXScope:p}=r(6842);e.exports=function(e){let{scope:t,children:r}=e,a=c(e,i);const l=p(t),d=u.useMemo((()=>{if(!r)return null;const e=s({React:u,mdx:f},l),t=Object.keys(e),a=t.map((t=>e[t]));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return u.createElement(d,s({},a))}},2869:function(e,t,r){"use strict";r.d(t,{A:function(){return i}});var n=r(8007),o=r(978),a=r(6540);function c(e){let{url:t="about:blank",children:r=[]}=e;return a.createElement(n.Link,{to:t,className:"mt-1 font-light text-xl lowercase mr-2"},r)}function i(){return a.createElement("header",{className:"flex flex-col md:flex-row m-6 items-center justify-between"},a.createElement("div",{className:"flex items-center cursor-pointer",onClick:()=>(0,n.navigate)("/"),onKeyDown:e=>{let{key:t}=e;return"Enter"===t?(0,n.navigate)("/"):null},role:"link",tabIndex:0},a.createElement(o.S,{src:"../../images/gcs.png",className:"h-14 w-14",alt:"",__imageData:r(8994)}),a.createElement("p",{className:"ml-3 font-medium text-2xl"},"George Parks")),a.createElement("div",{className:"ml-3 md:mt-0 mt-2"},a.createElement(c,{url:"/resume"},"Resume"),a.createElement(c,{url:"/portfolio"},"Portfolio"),a.createElement(c,{url:"/contact"},"Contact"),a.createElement(c,{url:"/blog"},"Blog")))}},4856:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return H}});var n,o=r(978),a=r(621),c=r(6540),i=r(8154),l=r(2869),s=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return s(t,e),t}(Error);function f(e,t){if(!e)throw new u(t)}function p(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(r)))}));return t.length>0?"?".concat(t.join("&")):""}var d=r(6942),m=r.n(d),h=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),y=function(){return y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},y.apply(this,arguments)},w=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function c(e){try{l(n.next(e))}catch(t){a(t)}}function i(e){try{l(n.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,i)}l((n=n.apply(e,t||[])).next())}))},b=function(e,t){var r,n,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,n=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(i){a=[6,i],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};var v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r,n,o=t.props,a=o.onShareWindowClose,c=o.windowHeight,i=void 0===c?400:c,l=o.windowPosition,s=void 0===l?"windowCenter":l,u=o.windowWidth,f=void 0===u?550:u;!function(e,t,r){var n=t.height,o=t.width,a=g(t,["height","width"]),c=y({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),i=window.open(e,"",Object.keys(c).map((function(e){return"".concat(e,"=").concat(c[e])})).join(", "));if(r)var l=window.setInterval((function(){try{(null===i||i.closed)&&(window.clearInterval(l),r(i))}catch(e){console.error(e)}}),1e3)}(e,y({height:i,width:f},"windowCenter"===s?(r=f,n=i,{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-r/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-n/2}):function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}}(f,i)),a)},t.handleClick=function(e){return w(t,void 0,void 0,(function(){var t,r,n,o,a,c,i,l,s,u;return b(this,(function(f){switch(f.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,a=t.onClick,c=t.url,i=t.openShareDialogOnClick,l=t.opts,s=o(c,l),n?[2]:(e.preventDefault(),r?(u=r(),!(p=u)||"object"!=typeof p&&"function"!=typeof p||"function"!=typeof p.then?[3,2]:[4,u]):[3,2]);case 1:f.sent(),f.label=2;case 2:return i&&this.openShareDialog(s),a&&a(e,s),[2]}var p}))}))},t}return h(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,o=e.disabledStyle,a=e.forwardedRef,i=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,g(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=m()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),p=y(y(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),n&&o);return c.createElement("button",y({},u,{"aria-label":u["aria-label"]||i,className:f,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(c.Component),x=v,O=function(){return O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},O.apply(this,arguments)};var E=function(e,t,r,n){function o(o,a){var i=r(o),l=O({},o);return Object.keys(i).forEach((function(e){delete l[e]})),c.createElement(x,O({},n,l,{forwardedRef:a,networkName:e,networkLink:t,opts:r(o)}))}return o.displayName="ShareButton-".concat(e),(0,c.forwardRef)(o)};var k=E("twitter",(function(e,t){var r=t.title,n=t.via,o=t.hashtags,a=void 0===o?[]:o,c=t.related,i=void 0===c?[]:c;return f(e,"twitter.url"),f(Array.isArray(a),"twitter.hashtags is not an array"),f(Array.isArray(i),"twitter.related is not an array"),"https://twitter.com/share"+p({url:e,text:r,via:n,hashtags:a.length>0?a.join(","):void 0,related:i.length>0?i.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),S=function(){return S=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},S.apply(this,arguments)},_=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function j(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,o=t.iconFillColor,a=t.round,i=t.size,l=_(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return c.createElement("svg",S({viewBox:"0 0 64 64",width:i,height:i},l),a?c.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):c.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),c.createElement("path",{d:e.path,fill:o}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var P=j({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var C=E("reddit",(function(e,t){var r=t.title;return f(e,"reddit.url"),"https://www.reddit.com/submit"+p({url:e,title:r})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),N=j({color:"#ff4500",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"});var M=E("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return f(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+p({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),z=j({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var D=E("email",(function(e,t){var r=t.subject,n=t.body,o=t.separator;return"mailto:"+p({subject:r,body:n?n+o+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),A=j({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"});function I(e){let{url:t="https://geoge.co"}=e;return c.createElement(c.Fragment,null,c.createElement(k,{url:t,className:"md:mr-1 mr-2"},c.createElement(P,{size:24})),c.createElement(C,{url:t,className:"md:mr-1 mr-2"},c.createElement(N,{size:24})),c.createElement(M,{url:t,className:"md:mr-1 mr-2"},c.createElement(z,{size:24})),c.createElement(D,{url:t,className:"md:mr-1 mr-2"},c.createElement(A,{size:24})))}const R={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,variableHeight:!0};var H=function(e){let{data:t}=e;return c.createElement(c.Fragment,null,c.createElement(l.A,null),c.createElement(i.m,null,c.createElement("title",null,t.mdx.frontmatter.title," | George Parks"),c.createElement("meta",{name:"description",content:t.mdx.excerpt}),c.createElement("meta",{property:"og:image",content:t.site.siteMetadata.siteUrl+t.mdx.frontmatter.image.childImageSharp.fixed.src}),c.createElement("meta",{property:"og:title",content:t.mdx.frontmatter.title}),c.createElement("meta",{property:"og:description",content:t.mdx.excerpt}),c.createElement("meta",{property:"og:type",content:"article"}),c.createElement("meta",{property:"og:url",content:t.site.siteMetadata.siteUrl+"/blog/"+t.mdx.slug}),c.createElement("meta",{property:"og:site_name",content:"George Parks"}),c.createElement("meta",{property:"article:author",content:"George Parks"}),c.createElement("meta",{property:"og:locale",content:"en_US"}),c.createElement("meta",{property:"article:section",content:t.mdx.frontmatter.category}),c.createElement("meta",{property:"article:tag",content:t.mdx.frontmatter.tags}),c.createElement("meta",{property:"article:published_time",content:t.mdx.frontmatter.date}),c.createElement("meta",{property:"article:modified_time",content:t.mdx.frontmatter.date}),c.createElement("meta",{property:"keywords",content:t.mdx.frontmatter.tags.join(", ")+", george, george parks, freelance, atlanta, atlanta ga, software engineering"})),c.createElement("main",{className:"responsive-body"},c.createElement(o.G,{image:t.mdx.frontmatter.image.childImageSharp.gatsbyImageData,className:"h-52 w-full mb-4 object-cover",alt:t.mdx.frontmatter.title}),c.createElement("p",{className:"font-medium text-4xl mb-1"},t.mdx.frontmatter.title),c.createElement("p",{className:"text-lg mb-2"},t.mdx.frontmatter.date),c.createElement("div",{className:"mb-3"},c.createElement(I,{url:"undefined"!=typeof window?window.location.toString():""})),c.createElement("div",{className:"markdown-body overflow-x-hidden"},c.createElement(a.MDXRenderer,{articleImages:t.mdx.frontmatter.articleImages,sliderSettings:R},t.mdx.body))))}},79:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},5901:function(e,t,r){var n=r(79);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9646:function(e,t,r){var n=r(7550),o=r(5636);e.exports=function(e,t,r){if(n())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var c=new(e.bind.apply(e,a));return r&&o(c,r.prototype),c},e.exports.__esModule=!0,e.exports.default=e.exports},3693:function(e,t,r){var n=r(7736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7550:function(e){function t(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(r){}return(e.exports=t=function(){return!!r},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9291:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},1869:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},1847:function(e,t,r){var n=r(4893);e.exports=function(e,t){if(null==e)return{};var r,o,a=n(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},4893:function(e){e.exports=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r},e.exports.__esModule=!0,e.exports.default=e.exports},1132:function(e,t,r){var n=r(5901),o=r(9291),a=r(7122),c=r(1869);e.exports=function(e){return n(e)||o(e)||a(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},9045:function(e,t,r){var n=r(3738).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7736:function(e,t,r){var n=r(3738).default,o=r(9045);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},3738:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7122:function(e,t,r){var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},8994:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/c6f4a772a589f10002ffe481c1ce28e7/45b13/gcs.png","srcSet":"/static/c6f4a772a589f10002ffe481c1ce28e7/83fe9/gcs.png 35w,\\n/static/c6f4a772a589f10002ffe481c1ce28e7/fd188/gcs.png 69w,\\n/static/c6f4a772a589f10002ffe481c1ce28e7/45b13/gcs.png 138w","sizes":"(min-width: 138px) 138px, 100vw"},"sources":[{"srcSet":"/static/c6f4a772a589f10002ffe481c1ce28e7/dbb7e/gcs.webp 35w,\\n/static/c6f4a772a589f10002ffe481c1ce28e7/d2c86/gcs.webp 69w,\\n/static/c6f4a772a589f10002ffe481c1ce28e7/8fcdc/gcs.webp 138w","type":"image/webp","sizes":"(min-width: 138px) 138px, 100vw"}]},"width":138,"height":138}')}}]);
//# sourceMappingURL=component---src-templates-blog-entry-js-8e87b9c4514a48123dbb.js.map