(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{714:function(e,n,t){"use strict";t.d(n,{$O:function(){return c}});var r=t(5893),i=t(1385),o=(t(7294),t(4565)),a=t(5230);function c(e){return e.lengde>=7}n.ZP=function(e){return(0,r.jsx)(o.Z,{name:"Lengde",children:(0,i.Z)(new Array(8)).map((function(n,t){return 0===t?null:(0,r.jsx)(a.Z,{label:t+(t>1?" dager":" dag"),value:t,checked:e.lengde===t,onChange:function(n){return e.setLengde(t)}},t)}))})}},4565:function(e,n,t){"use strict";var r=t(5893),i=(t(7294),t(4642));n.Z=function(e){return(0,r.jsxs)(i.Valggruppe,{children:[(0,r.jsx)("h2",{children:e.name}),(0,r.jsx)(i.InputGruppe,{children:e.children})]})}},1269:function(e,n,t){"use strict";t.d(n,{z:function(){return a}});var r=t(8027),i=t(9925),o=new Date,a={sesong:o.getMonth()>=10||o.getMonth()<=3?r.N.Vinter:r.N.FjellSommer,overnatting:[],"kj\xf8nn":i.oA.VilIkkeOppgi,lengde:3,aktiviteter:[],spesielleBehov:!1}},3399:function(e,n,t){"use strict";t.d(n,{Nb:function(){return r},un:function(){return o},ou:function(){return a}});var r,i=t(5386);function o(){return(0,i.Y)(r)}function a(e){return[r.Randon\u00e9e,r.Fjellski,r.Langrenn,r.Sk\u00f8yteski,r.Fottur,r.Tinderangling,r.Klatring].some((function(n){return e.includes(n)}))}!function(e){e[e.Klatring=0]="Klatring",e[e.Fottur=1]="Fottur",e[e.Tinderangling=2]="Tinderangling",e[e.Jogging=3]="Jogging",e[e["Randon\xe9e"]=4]="Randon\xe9e",e[e.Isbre=5]="Isbre",e[e.Fjellski=6]="Fjellski",e[e.Langrenn=7]="Langrenn",e[e["Sk\xf8yteski"]=8]="Sk\xf8yteski",e[e.Bytur=9]="Bytur",e[e.Fotografi=10]="Fotografi",e[e.Kajakk=11]="Kajakk"}(r||(r={}))},9925:function(e,n,t){"use strict";t.d(n,{oA:function(){return r},_T:function(){return o},Fp:function(){return a}});var r,i=t(5386);function o(e){var n="";switch(e){case r.VilIkkeOppgi:n="Vil ikke oppgi";break;default:n=r[e]}return n}function a(){return(0,i.Y)(r)}!function(e){e[e.Mann=0]="Mann",e[e.Kvinne=1]="Kvinne",e[e.VilIkkeOppgi=2]="VilIkkeOppgi"}(r||(r={}))},5383:function(e,n,t){"use strict";t.d(n,{zn:function(){return r},ko:function(){return o},UC:function(){return a},NT:function(){return c},G$:function(){return u}});var r,i=t(5386);function o(e){var n="";switch(e){case r.DNThytte:n="DNT-hytte";break;case r.FamilieHytte:n="Familie-hytte";break;case r.HusHotell:n="Hus eller hotell";break;default:n=r[e]}return n}function a(){return(0,i.Y)(r)}function c(e){return[r.Hengek\u00f8ye,r.Telt].some((function(n){return e.overnatting.includes(n)}))}function u(e){return 1===e.overnatting.length&&e.overnatting.includes(r.HusHotell)}!function(e){e[e.DNThytte=0]="DNThytte",e[e.Telt=1]="Telt",e[e["Hengek\xf8ye"]=2]="Hengek\xf8ye",e[e.HusHotell=3]="HusHotell",e[e.FamilieHytte=4]="FamilieHytte"}(r||(r={}))},8027:function(e,n,t){"use strict";var r;function i(e){var n="";switch(e){case r.FjellSommer:n="Sommer p\xe5 fjellet";break;case r.BySommer:n="Sommer i byen";break;default:n=r[e]}return n}t.d(n,{N:function(){return r},Z:function(){return i}}),function(e){e[e.FjellSommer=0]="FjellSommer",e[e.BySommer=1]="BySommer",e[e.Vinter=2]="Vinter"}(r||(r={}))},4642:function(e,n,t){"use strict";t.r(n),t.d(n,{InputGruppe:function(){return B},Valggruppe:function(){return D},default:function(){return I}});var r=t(5893),i=t(7294),o=t(4565),a=t(5230),c=t(8027);var u=function(e){return(0,r.jsxs)(o.Z,{name:"Sesong",children:[(0,r.jsx)(a.Z,{label:(0,c.Z)(c.N.FjellSommer),value:c.N.FjellSommer,checked:e.sesong===c.N.FjellSommer,onChange:function(n){return e.setSesong(c.N.FjellSommer)}}),(0,r.jsx)(a.Z,{label:(0,c.Z)(c.N.BySommer),value:c.N.BySommer,checked:e.sesong===c.N.BySommer,onChange:function(n){return e.setSesong(c.N.BySommer)}}),(0,r.jsx)(a.Z,{label:c.N[c.N.Vinter],value:c.N.Vinter,checked:e.sesong===c.N.Vinter,onChange:function(n){return e.setSesong(c.N.Vinter)}})]})},s=t(1385),l=t(9826),f=t(3399);function g(e){var n=function(n){var t=+n.target.value;n.target.checked?e.setAktiviteter([].concat((0,s.Z)(e.valgteAktiviteter),[t])):e.setAktiviteter(e.valgteAktiviteter.filter((function(e){return e!==t})))};return(0,r.jsx)(o.Z,{name:"Aktiviteter",children:(0,f.un)().map((function(t){return(0,r.jsx)(l.Z,{label:f.Nb[t],value:t,checked:e.valgteAktiviteter.includes(t),onChange:n},t)}))})}var d=i.memo(g),p=t(5383);var v=function(e){var n=function(n){var t=+n.target.value;n.target.checked?e.setOvernatting([].concat((0,s.Z)(e.overnatting),[t])):e.setOvernatting(e.overnatting.filter((function(e){return e!==t})))};return(0,r.jsx)(o.Z,{name:"Overnatting",children:(0,p.UC)().map((function(t){return(0,r.jsx)(l.Z,{label:(0,p.ko)(t),value:t,checked:e.overnatting.includes(t),onChange:n},t)}))})},h=t(9925);var m=function(e){return(0,r.jsx)(o.Z,{name:"Kj\xf8nn",children:(0,h.Fp)().map((function(n){return(0,r.jsx)(a.Z,{label:(0,h._T)(n),value:n,checked:e.kj\u00f8nn===n,onChange:function(n){return e.setKj\u00f8nn(+n.target.value)}},n)}))})};var j=function(e){return(0,r.jsx)(o.Z,{name:"Annet",children:(0,r.jsx)(l.Z,{label:"Spesielle behov",checked:e.spesielleBehov,onChange:function(n){return e.setSpesielleBehov(n.target.checked)}})})},b=t(714),k=t(6180),y=t(5709),O=t(8566),w=t(6619),x=t(4361),S=t(3870),N=t(1269),Z=t(9163),P=Z.ZP.form.withConfig({displayName:"pages__StyledForm",componentId:"sc-141e2zw-0"})(["border:0.2em white solid;border-radius:1rem;overflow:hidden;min-height:100vh;background-color:#333;box-shadow:0 0.5rem 1rem #0004;> *:nth-child(even){background-color:darkslategray;}"]),_=Z.ZP.h1.withConfig({displayName:"pages__StyledH1",componentId:"sc-141e2zw-1"})(["padding:2rem 2rem 0;font-size:2.5rem;margin:0 0 0.6em;"]),D=Z.ZP.div.withConfig({displayName:"pages__Valggruppe",componentId:"sc-141e2zw-2"})(["padding:1rem 2rem;transition:background-color 0.5s;h2{margin:0 0 0.5rem;}button{margin-top:1rem;}"]),B=Z.ZP.div.withConfig({displayName:"pages__InputGruppe",componentId:"sc-141e2zw-3"})(["display:flex;flex-wrap:wrap;> *{margin:0.4rem 2rem 0.4rem 0;}"]),C=Z.ZP.div.withConfig({displayName:"pages__Opprett",componentId:"sc-141e2zw-4"})(["padding:2rem;"]);function I(){var e=(0,i.useState)(N.z.sesong),n=e[0],t=e[1],o=(0,i.useState)(N.z.aktiviteter),c=o[0],s=o[1],l=(0,i.useState)(N.z.overnatting),f=l[0],g=l[1],p=(0,i.useState)(N.z["kj\xf8nn"]),h=p[0],Z=p[1],I=(0,i.useState)(N.z.lengde),z=I[0],F=I[1],T=(0,i.useState)(N.z.spesielleBehov),E=T[0],H=T[1],V=(0,i.useState)(""),A=V[0],K=V[1],L=(0,i.useState)(""),J=L[0],M=L[1],R=(0,i.useState)(!1),Y=R[0],G=R[1],$=(0,O.J)();(0,i.useEffect)((function(){t($.valg.sesong),s($.valg.aktiviteter),g($.valg.overnatting),Z($.valg.kj\u00f8nn),F($.valg.lengde),H($.valg.spesielleBehov),K($.listeNavn)}),[$.key]),(0,i.useEffect)((function(){if(Y){var e=document.getElementById("knapp_"+A);e&&(e.click(),e.focus())}}),[]),(0,i.useEffect)((function(){Y||M("")}),[Y]);var U=function(e){G(!Y);var n=N.z;K(""),t(n.sesong),s(n.aktiviteter),g(n.overnatting),Z(n.kj\u00f8nn),F(n.lengde),H(n.spesielleBehov)},q=function(e){M(e.currentTarget.value);var n=(0,S.tZ)(e.currentTarget.value);n&&(K(e.currentTarget.value),t(n.sesong),s(n.aktiviteter),g(n.overnatting),Z(n.kj\u00f8nn),F(n.lengde),H(n.spesielleBehov))};return(0,r.jsxs)(P,{onSubmit:function(e){return e.preventDefault()},children:[(0,r.jsx)(_,{children:"Tid for \xe5 pakke"}),(0,r.jsx)(D,{children:(0,r.jsxs)(B,{children:[(0,r.jsx)(a.Z,{label:"Lag liste",checked:!Y,onChange:U,name:"nyEllerEksisterende",value:"ny"}),(0,r.jsx)(a.Z,{label:"Endre eksisterende",checked:Y,onChange:U,name:"nyEllerEksisterende",value:"eksisterende"})]})}),Y?(0,r.jsxs)(D,{children:[(0,r.jsx)("label",{children:"Velg liste"}),(0,r.jsx)(B,{children:(0,S.jD)().map((function(e){return(0,r.jsx)(x.Z,{id:"knapp_"+e,value:e,onClick:q,children:e},e)}))})]}):(0,r.jsx)(D,{children:(0,r.jsx)(w.Z,{label:"Navn p\xe5 liste",onChange:function(e){return K(e.target.value)},value:A})}),(!Y||J)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{sesong:n,setSesong:t}),(0,r.jsx)(v,{overnatting:f,setOvernatting:g}),(0,r.jsx)(k.UnmountClosed,{isOpened:f.length>0,children:(0,r.jsx)(b.ZP,{lengde:z,setLengde:F})}),(0,r.jsx)(d,{valgteAktiviteter:c,setAktiviteter:s}),(0,r.jsx)(m,{"kj\xf8nn":h,"setKj\xf8nn":Z}),(0,r.jsx)(j,{spesielleBehov:E,setSpesielleBehov:H}),(0,r.jsx)(C,{children:(0,r.jsx)(y.Z,{href:"/pakk?".concat((0,O.l)({sesong:n,aktiviteter:c,overnatting:f,"kj\xf8nn":h,lengde:z,spesielleBehov:E},A)),children:"Pakk"})})]})]})}},4361:function(e,n,t){"use strict";t.d(n,{$:function(){return c}});var r=t(6265),i=t(5893),o=(t(7294),t(9163));function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var c=(0,o.iv)(["border:0.2rem white solid;background-color:transparent;color:white;padding:0.5rem;border-radius:0.3rem;transition:0.2s;cursor:pointer;&:hover{box-shadow:0 0 0 0.1rem #333,0 0 0 0.3rem white;}"]),u=o.ZP.button.withConfig({displayName:"Button__Style",componentId:"sc-168e52m-0"})(["",""],c);n.Z=function(e){return(0,i.jsx)(u,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e))}},9826:function(e,n,t){"use strict";var r=t(6265),i=t(5893),o=(t(7294),t(1420));function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.Z=function(e){return(0,i.jsx)(o.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({type:"checkbox"},e))}},1420:function(e,n,t){"use strict";var r=t(5893),i=t(6265),o=t(8347),a=t(7294),c=t(5629),u=t(9163);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=u.ZP.div.withConfig({displayName:"InputBase__Style",componentId:"sc-1dwbyer-0"})(["display:inline-block;label{padding-left:0.5rem;font-size:1.2rem;}input{position:relative;top:-0.15rem;transform:scale(1.2);}transition:transform 0.2s;&:hover{transform:scale(1.1);}"," ",""],(function(e){return e.strikeThrough&&(0,u.iv)(["input:checked + label{text-decoration:line-through;color:rgba(136,136,136,0.98);}"])}),(function(e){return e.header&&(0,u.iv)(["input{transform:scale(1.7);}label{padding-left:1em;}h2{display:inline-block;}"])}));n.Z=function(e){var n=(0,a.useRef)((0,c.M)()),t=e.label,i=e.strikeThrough,u=e.header,s=e.className,g=(0,o.Z)(e,["label","strikeThrough","header","className"]);return(0,r.jsxs)(f,{strikeThrough:i,header:u,className:s,children:[(0,r.jsx)("input",l({id:n.current},g)),(0,r.jsx)("label",{htmlFor:n.current,children:e.header?(0,r.jsx)("h2",{children:t}):t})]})}},5709:function(e,n,t){"use strict";var r=t(5893),i=(t(7294),t(9163)),o=t(4361),a=t(1664),c=i.ZP.a.withConfig({displayName:"LinkButton__StyledLink",componentId:"sc-1kvqvh1-0"})(["margin:1rem 0;text-decoration:none;",";"],o.$);n.Z=function(e){var n=e.children,t=e.className,i=e.style,o=e.href;return(0,r.jsx)(a.default,{href:o,passHref:!0,children:(0,r.jsx)(c,{className:t,style:i,children:n})})}},5230:function(e,n,t){"use strict";var r=t(6265),i=t(5893),o=(t(7294),t(1420));function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.Z=function(e){return(0,i.jsx)(o.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({type:"radio"},e))}},6619:function(e,n,t){"use strict";var r=t(5893),i=t(6265),o=t(8347),a=t(7294),c=t(5629);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=t(9163).ZP.div.withConfig({displayName:"TextInput__Style",componentId:"sc-134gvsx-0"})(["display:flex;flex-direction:column;input{line-height:1.3rem;max-width:30rem;background-color:inherit;color:inherit;border:currentColor solid;padding:0.5em 0.75em;border-radius:0.25em;}label{margin-bottom:0.5rem;}"]);n.Z=function(e){var n=(0,a.useRef)((0,c.M)()),t=e.label,i=e.className,u=(0,o.Z)(e,["label","className"]);return(0,r.jsxs)(l,{className:i,children:[(0,r.jsx)("label",{htmlFor:n.current,children:t}),(0,r.jsx)("input",s({type:"text",id:n.current},u))]})}},8566:function(e,n,t){"use strict";t.d(n,{l:function(){return s},J:function(){return l}});var r=t(3399),i=t(9925),o=t(5383),a=t(8027),c=t(1269),u=t(1163);function s(e,n){var t={aktiviteter:e.aktiviteter.map((function(e){return"".concat(r.Nb[e])})).join(","),lengde:e.lengde,"kj\xf8nn":i.oA[e.kj\u00f8nn],overnatting:e.overnatting.map((function(e){return"".concat(o.zn[e])})).join(","),sesong:a.N[e.sesong],spesiell:e.spesielleBehov,listeNavn:n||""};return Object.entries(t).map((function(e){return"".concat(e[0],"=").concat(e[1])})).join("&")}function l(){var e=(0,u.useRouter)().query;try{var n,t,s,l,f,g,d,p,v={aktiviteter:(null===(n=e.aktiviteter)||void 0===n?void 0:n.split(",").map((function(e){return r.Nb[e]})).filter((function(e){return void 0!==e})))||[],lengde:void 0!==e.lengde?parseInt(e.lengde):c.z.lengde,"kj\xf8nn":i.oA[e.kj\u00f8nn],overnatting:(null===(t=e.overnatting)||void 0===t?void 0:t.split(",").map((function(e){return o.zn[e]})).filter((function(e){return void 0!==e})))||[],sesong:a.N[e.sesong],spesielleBehov:"true"===e.spesiell},h=Object.keys(v).filter((function(e){return void 0===v[e]})),m=h.length>0?"Manglende parametere: ".concat(h):void 0,j=e.listeNavn;return{feilmelding:m,valg:{aktiviteter:null!==(s=v.aktiviteter)&&void 0!==s?s:c.z.aktiviteter,lengde:null!==(l=v.lengde)&&void 0!==l?l:c.z.lengde,"kj\xf8nn":null!==(f=v.kj\u00f8nn)&&void 0!==f?f:c.z["kj\xf8nn"],overnatting:null!==(g=v.overnatting)&&void 0!==g?g:c.z.overnatting,sesong:null!==(d=v.sesong)&&void 0!==d?d:c.z.sesong,spesielleBehov:null!==(p=v.spesielleBehov)&&void 0!==p?p:c.z.spesielleBehov},listeNavn:j,key:JSON.stringify(e)}}catch(b){return{error:b,feilmelding:"Det skjedde en feil under parsing av params",valg:c.z,listeNavn:"",key:"error"}}}},5386:function(e,n,t){"use strict";t.d(n,{Y:function(){return i}});var r=t(1385);function i(e){return(0,r.Z)(function(e){return n=Object.keys(e),n.filter((function(e){return isNaN(+e)}));var n}(e)).map((function(n){return e[n]}))}},5629:function(e,n,t){"use strict";t.d(n,{M:function(){return r}});var r=t(4586).Z},3870:function(e,n,t){"use strict";function r(e){var n=e+"_checkedItems",t=window.localStorage.getItem(n);return t?JSON.parse(t):[]}function i(e){var n=e+"_valg",t=window.localStorage.getItem(n);if(t)return JSON.parse(t)}function o(e){var n=e+"_ekstraItems",t=window.localStorage.getItem(n);return t?JSON.parse(t):[]}function a(){for(var e=window.localStorage,n=[],t=0;t<e.length;t++){var r;if(null!==(r=e.key(t))&&void 0!==r&&r.includes("_")){var i,o=null===(i=e.key(t))||void 0===i?void 0:i.split("_")[0];o&&n.push(o)}}return n.filter((function(e,t){return n.indexOf(e)===t}))}t.d(n,{Y9:function(){return r},tZ:function(){return i},gy:function(){return o},jD:function(){return a}})}}]);
//# sourceMappingURL=565-e8c5f01a43f659dadf1c.js.map