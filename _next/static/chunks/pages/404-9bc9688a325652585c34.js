(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2167:function(e,r,t){"use strict";var n=t(3848),o=t(9448);r.default=void 0;var c=o(t(7294)),i=t(9414),a=t(4651),s=t(7426),u={};function l(e,r,t,n){if(e&&(0,i.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,o=(0,a.useRouter)(),f=c.default.useMemo((function(){var r=(0,i.resolveHref)(o,e.href,!0),t=n(r,2),c=t[0],a=t[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=(r=c.Children.only(v))&&"object"===typeof r&&r.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),O=n(w,2),_=O[0],j=O[1],E=c.default.useCallback((function(e){_(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,_]);(0,c.useEffect)((function(){var e=j&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof m?m:o&&o.locale,n=u[d+"%"+p+(r?"%"+r:"")];e&&!n&&l(o,d,p,{locale:r})}),[p,d,j,m,t,o]);var k={ref:E,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,c,a,s){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),r[o?"replace":"push"](t,n,{shallow:c,locale:s,scroll:a}))}(e,o,d,p,h,y,b,m)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var L="undefined"!==typeof m?m:o&&o.locale,P=o&&o.isLocaleDomain&&(0,i.getDomainLocale)(p,L,o&&o.locales,o&&o.domainLocales);k.href=P||(0,i.addBasePath)((0,i.addLocale)(p,L,o&&o.defaultLocale))}return c.default.cloneElement(r,k)};r.default=f},7426:function(e,r,t){"use strict";var n=t(3848);r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=n(u,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=a.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return a.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,c=n.observer,i=n.elements;return i.set(e,r),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t(7294),c=t(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},9164:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return i}});var n=t(5893),o=t(5709),c=t(9163).ZP.div.withConfig({displayName:"sc-404__Style",componentId:"sc-vffrer-0"})(["padding:2rem;display:flex;flex-direction:column;align-items:flex-start;row-gap:1rem;"]);function i(){return(0,n.jsxs)(c,{children:[(0,n.jsx)("h1",{children:"Ingenting her... \ud83e\udd37\u200d\u2640"}),(0,n.jsx)(o.Z,{href:"/",children:"G\xe5 til forsiden"}),"\ufe0f"]})}},4361:function(e,r,t){"use strict";t.d(r,{$:function(){return a}});var n=t(6265),o=t(5893),c=(t(7294),t(9163));function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var a=(0,c.iv)(["border:0.2rem white solid;background-color:transparent;color:white;padding:0.5rem;border-radius:0.3rem;transition:0.2s;cursor:pointer;&:hover{box-shadow:0 0 0 0.1rem #333,0 0 0 0.3rem white;}"]),s=c.ZP.button.withConfig({displayName:"Button__Style",componentId:"sc-168e52m-0"})(["",""],a);r.Z=function(e){return(0,o.jsx)(s,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e))}},5709:function(e,r,t){"use strict";var n=t(5893),o=(t(7294),t(9163)),c=t(4361),i=t(1664),a=o.ZP.a.withConfig({displayName:"LinkButton__StyledLink",componentId:"sc-1kvqvh1-0"})(["margin:1rem 0;text-decoration:none;",";"],c.$);r.Z=function(e){var r=e.children,t=e.className,o=e.style,c=e.href;return(0,n.jsx)(i.default,{href:c,passHref:!0,children:(0,n.jsx)(a,{className:t,style:o,children:r})})}},9014:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(9164)}])},1664:function(e,r,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return r=9014,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
//# sourceMappingURL=404-9bc9688a325652585c34.js.map