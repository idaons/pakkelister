(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{714:function(e,t,n){"use strict";n.d(t,{$O:function(){return a}});var r=n(5893),i=n(1385),o=(n(7294),n(4565)),c=n(5230);function a(e){return e.lengde>=7}t.ZP=function(e){return(0,r.jsx)(o.Z,{name:"Lengde",children:(0,i.Z)(new Array(8)).map((function(t,n){return 0===n?null:(0,r.jsx)(c.Z,{label:n+(n>1?" dager":" dag"),value:n,checked:e.lengde===n,onChange:function(t){return e.setLengde(n)}},n)}))})}},4565:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(4642));t.Z=function(e){return(0,r.jsxs)(i.Valggruppe,{children:[(0,r.jsx)("h2",{children:e.name}),(0,r.jsx)(i.InputGruppe,{children:e.children})]})}},1269:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var r=n(8027),i=n(9925),o=new Date,c={sesong:o.getMonth()>=10||o.getMonth()<=3?r.N.Vinter:r.N.FjellSommer,overnatting:[],"kj\xf8nn":i.oA.VilIkkeOppgi,lengde:3,aktiviteter:[],spesielleBehov:!1}},3399:function(e,t,n){"use strict";n.d(t,{Nb:function(){return r},un:function(){return o},ou:function(){return c}});var r,i=n(5386);function o(){return(0,i.Y)(r)}function c(e){return[r.Randon\u00e9e,r.Fjellski,r.Langrenn,r.Sk\u00f8yteski,r.Fottur,r.Tinderangling,r.Klatring].some((function(t){return e.includes(t)}))}!function(e){e[e.Klatring=0]="Klatring",e[e.Fottur=1]="Fottur",e[e.Tinderangling=2]="Tinderangling",e[e.Jogging=3]="Jogging",e[e["Randon\xe9e"]=4]="Randon\xe9e",e[e.Isbre=5]="Isbre",e[e.Fjellski=6]="Fjellski",e[e.Langrenn=7]="Langrenn",e[e["Sk\xf8yteski"]=8]="Sk\xf8yteski",e[e.Bytur=9]="Bytur",e[e.Fotografi=10]="Fotografi",e[e.Kajakk=11]="Kajakk"}(r||(r={}))},9925:function(e,t,n){"use strict";n.d(t,{oA:function(){return r},_T:function(){return o},Fp:function(){return c}});var r,i=n(5386);function o(e){var t="";switch(e){case r.VilIkkeOppgi:t="Vil ikke oppgi";break;default:t=r[e]}return t}function c(){return(0,i.Y)(r)}!function(e){e[e.Mann=0]="Mann",e[e.Kvinne=1]="Kvinne",e[e.VilIkkeOppgi=2]="VilIkkeOppgi"}(r||(r={}))},5383:function(e,t,n){"use strict";n.d(t,{zn:function(){return r},ko:function(){return o},UC:function(){return c},NT:function(){return a},G$:function(){return u}});var r,i=n(5386);function o(e){var t="";switch(e){case r.DNThytte:t="DNT-hytte";break;case r.FamilieHytte:t="Familie-hytte";break;case r.HusHotell:t="Hus eller hotell";break;default:t=r[e]}return t}function c(){return(0,i.Y)(r)}function a(e){return[r.Hengek\u00f8ye,r.Telt].some((function(t){return e.overnatting.includes(t)}))}function u(e){return 1===e.overnatting.length&&e.overnatting.includes(r.HusHotell)}!function(e){e[e.DNThytte=0]="DNThytte",e[e.Telt=1]="Telt",e[e["Hengek\xf8ye"]=2]="Hengek\xf8ye",e[e.HusHotell=3]="HusHotell",e[e.FamilieHytte=4]="FamilieHytte"}(r||(r={}))},8027:function(e,t,n){"use strict";var r;function i(e){var t="";switch(e){case r.FjellSommer:t="Sommer p\xe5 fjellet";break;case r.BySommer:t="Sommer i byen";break;default:t=r[e]}return t}n.d(t,{N:function(){return r},Z:function(){return i}}),function(e){e[e.FjellSommer=0]="FjellSommer",e[e.BySommer=1]="BySommer",e[e.Vinter=2]="Vinter"}(r||(r={}))},4642:function(e,t,n){"use strict";n.r(t),n.d(t,{InputGruppe:function(){return E},Valggruppe:function(){return B},default:function(){return L}});var r=n(5893),i=n(6265),o=n(7294),c=n(4565),a=n(5230),u=n(8027);var s=function(e){return(0,r.jsxs)(c.Z,{name:"Sesong",children:[(0,r.jsx)(a.Z,{label:(0,u.Z)(u.N.FjellSommer),value:u.N.FjellSommer,checked:e.sesong===u.N.FjellSommer,onChange:function(t){return e.setSesong(u.N.FjellSommer)}}),(0,r.jsx)(a.Z,{label:(0,u.Z)(u.N.BySommer),value:u.N.BySommer,checked:e.sesong===u.N.BySommer,onChange:function(t){return e.setSesong(u.N.BySommer)}}),(0,r.jsx)(a.Z,{label:u.N[u.N.Vinter],value:u.N.Vinter,checked:e.sesong===u.N.Vinter,onChange:function(t){return e.setSesong(u.N.Vinter)}})]})},l=n(1385),f=n(9826),g=n(3399);function p(e){var t=function(t){var n=+t.target.value;t.target.checked?e.setAktiviteter([].concat((0,l.Z)(e.valgteAktiviteter),[n])):e.setAktiviteter(e.valgteAktiviteter.filter((function(e){return e!==n})))};return(0,r.jsx)(c.Z,{name:"Aktiviteter",children:(0,g.un)().map((function(n){return(0,r.jsx)(f.Z,{label:g.Nb[n],value:n,checked:e.valgteAktiviteter.includes(n),onChange:t},n)}))})}var d=o.memo(p),v=n(5383);var h=function(e){var t=function(t){var n=+t.target.value;t.target.checked?e.setOvernatting([].concat((0,l.Z)(e.overnatting),[n])):e.setOvernatting(e.overnatting.filter((function(e){return e!==n})))};return(0,r.jsx)(c.Z,{name:"Overnatting",children:(0,v.UC)().map((function(n){return(0,r.jsx)(f.Z,{label:(0,v.ko)(n),value:n,checked:e.overnatting.includes(n),onChange:t},n)}))})},m=n(9925);var j=function(e){return(0,r.jsx)(c.Z,{name:"Kj\xf8nn",children:(0,m.Fp)().map((function(t){return(0,r.jsx)(a.Z,{label:(0,m._T)(t),value:t,checked:e.kj\u00f8nn===t,onChange:function(t){return e.setKj\u00f8nn(+t.target.value)}},t)}))})};var b=function(e){return(0,r.jsx)(c.Z,{name:"Annet",children:(0,r.jsx)(f.Z,{label:"Spesielle behov",checked:e.spesielleBehov,onChange:function(t){return e.setSpesielleBehov(t.target.checked)}})})},y=n(714),k=n(6180),O=n(5709),w=n(8566),x=n(6619),N=n(4361),P=n(1269),S=n(9163),Z=n(3870);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=S.ZP.form.withConfig({displayName:"pages__StyledForm",componentId:"sc-141e2zw-0"})(["border:0.2em white solid;border-radius:1rem;overflow:hidden;min-height:100vh;background-color:#333;box-shadow:0 0.5rem 1rem #0004;> *:nth-child(even){background-color:darkslategray;}"]),_=S.ZP.h1.withConfig({displayName:"pages__StyledH1",componentId:"sc-141e2zw-1"})(["padding:2rem 2rem 0;font-size:2.5rem;margin:0 0 0.6em;"]),B=S.ZP.div.withConfig({displayName:"pages__Valggruppe",componentId:"sc-141e2zw-2"})(["padding:1rem 2rem;transition:background-color 0.5s;h2{margin:0 0 0.5rem;}button{margin-top:1rem;}"]),E=S.ZP.div.withConfig({displayName:"pages__InputGruppe",componentId:"sc-141e2zw-3"})(["display:flex;flex-wrap:wrap;> *{margin:0.4rem 2rem 0.4rem 0;}"]),I=S.ZP.div.withConfig({displayName:"pages__Opprett",componentId:"sc-141e2zw-4"})(["padding:2rem;"]);function T(e,t){return C(C({},e),t)}function L(){var e=(0,o.useReducer)(T,P.z),t=e[0],n=e[1],i=(0,o.useState)(""),c=i[0],u=i[1],l=(0,o.useState)(""),f=l[0],g=l[1],p=(0,o.useState)(!1),v=p[0],m=p[1],S=(0,w.J)();(0,o.useEffect)((function(){n(S.valg),u(S.listeNavn)}),[S.key]),(0,o.useEffect)((function(){if(v){var e=document.getElementById("knapp_"+c);e&&(e.click(),e.focus())}}),[]),(0,o.useEffect)((function(){v||g("")}),[v]);var D=function(e){m(!v),u(""),n(P.z)},C=function(e){var t;g(e.currentTarget.value);var r=null===(t=Z.Q.getList(e.currentTarget.value))||void 0===t?void 0:t.valg;r&&(u(e.currentTarget.value),n(r))};return(0,r.jsxs)(F,{onSubmit:function(e){return e.preventDefault()},children:[(0,r.jsx)(_,{children:"Tid for \xe5 pakke"}),(0,r.jsx)(B,{children:(0,r.jsxs)(E,{children:[(0,r.jsx)(a.Z,{label:"Lag ny liste",checked:!v,onChange:D,name:"nyEllerEksisterende",value:"ny"}),(0,r.jsx)(a.Z,{label:"Endre gammel liste",checked:v,onChange:D,name:"nyEllerEksisterende",value:"eksisterende"})]})}),v?(0,r.jsxs)(B,{children:[(0,r.jsx)("label",{children:"Velg liste"}),(0,r.jsx)(E,{children:Z.Q.getLists().map((function(e){return e.listeNavn&&(0,r.jsx)(N.Z,{id:"knapp_"+e.listeNavn,value:e.listeNavn,onClick:C,children:e.listeNavn},e.listeNavn)}))})]}):(0,r.jsx)(B,{children:(0,r.jsx)(x.Z,{label:"Navn p\xe5 liste",onChange:function(e){return u(e.target.value)},value:c})}),(!v||f)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{sesong:t.sesong,setSesong:function(e){return n({sesong:e})}}),(0,r.jsx)(h,{overnatting:t.overnatting,setOvernatting:function(e){return n({overnatting:e})}}),(0,r.jsx)(k.UnmountClosed,{isOpened:t.overnatting.length>0,children:(0,r.jsx)(y.ZP,{lengde:t.lengde,setLengde:function(e){return n({lengde:e})}})}),(0,r.jsx)(d,{valgteAktiviteter:t.aktiviteter,setAktiviteter:function(e){return n({aktiviteter:e})}}),(0,r.jsx)(j,{"kj\xf8nn":t.kj\u00f8nn,"setKj\xf8nn":function(e){return n({"kj\xf8nn":e})}}),(0,r.jsx)(b,{spesielleBehov:t.spesielleBehov,setSpesielleBehov:function(e){return n({spesielleBehov:e})}}),(0,r.jsx)(I,{children:(0,r.jsx)(O.Z,{href:"/pakk?".concat((0,w.l)(t,c)),children:"Pakk"})})]})]})}},4361:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});var r=n(6265),i=n(5893),o=(n(7294),n(9163));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var a=(0,o.iv)(["border:0.2rem white solid;background-color:transparent;color:white;padding:0.5rem;border-radius:0.3rem;transition:0.2s;cursor:pointer;&:hover{box-shadow:0 0 0 0.1rem #333,0 0 0 0.3rem white;}"]),u=o.ZP.button.withConfig({displayName:"Button__Style",componentId:"sc-168e52m-0"})(["",""],a);t.Z=function(e){return(0,i.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}},9826:function(e,t,n){"use strict";var r=n(6265),i=n(5893),o=(n(7294),n(1420));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.Z=function(e){return(0,i.jsx)(o.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({type:"checkbox"},e))}},1420:function(e,t,n){"use strict";var r=n(5893),i=n(6265),o=n(8347),c=n(7294),a=n(5629),u=n(9163);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=u.ZP.div.withConfig({displayName:"InputBase__Style",componentId:"sc-1dwbyer-0"})(["display:inline-block;label{padding-left:0.5rem;font-size:1.2rem;}input{position:relative;top:-0.15rem;transform:scale(1.2);}transition:transform 0.2s;&:hover{transform:scale(1.1);}"," ",""],(function(e){return e.strikeThrough&&(0,u.iv)(["input:checked + label{text-decoration:line-through;color:rgba(136,136,136,0.98);}"])}),(function(e){return e.header&&(0,u.iv)(["input{transform:scale(1.7);}label{padding-left:1em;}h2{display:inline-block;}"])}));t.Z=function(e){var t=(0,c.useRef)((0,a.M)()),n=e.label,i=e.strikeThrough,u=e.header,s=e.className,g=(0,o.Z)(e,["label","strikeThrough","header","className"]);return(0,r.jsxs)(f,{strikeThrough:i,header:u,className:s,children:[(0,r.jsx)("input",l({id:t.current},g)),(0,r.jsx)("label",{htmlFor:t.current,children:e.header?(0,r.jsx)("h2",{children:n}):n})]})}},5709:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(9163)),o=n(4361),c=n(1664),a=i.ZP.a.withConfig({displayName:"LinkButton__StyledLink",componentId:"sc-1kvqvh1-0"})(["margin:1rem 0;text-decoration:none;",";"],o.$);t.Z=function(e){var t=e.children,n=e.className,i=e.style,o=e.href;return(0,r.jsx)(c.default,{href:o,passHref:!0,children:(0,r.jsx)(a,{className:n,style:i,children:t})})}},5230:function(e,t,n){"use strict";var r=n(6265),i=n(5893),o=(n(7294),n(1420));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.Z=function(e){return(0,i.jsx)(o.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({type:"radio"},e))}},6619:function(e,t,n){"use strict";var r=n(5893),i=n(6265),o=n(8347),c=n(7294),a=n(5629);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=n(9163).ZP.div.withConfig({displayName:"TextInput__Style",componentId:"sc-134gvsx-0"})(["display:flex;flex-direction:column;input{line-height:1.3rem;max-width:30rem;background-color:inherit;color:inherit;border:currentColor solid;padding:0.5em 0.75em;border-radius:0.25em;}label{margin-bottom:0.5rem;}"]);t.Z=function(e){var t=(0,c.useRef)((0,a.M)()),n=e.label,i=e.className,u=(0,o.Z)(e,["label","className"]);return(0,r.jsxs)(l,{className:i,children:[(0,r.jsx)("label",{htmlFor:t.current,children:n}),(0,r.jsx)("input",s({type:"text",id:t.current},u))]})}},8566:function(e,t,n){"use strict";n.d(t,{l:function(){return o},J:function(){return c}});var r=n(1269),i=n(1163);function o(e,t){var n={valg:e,listeNavn:t};return"params=".concat(JSON.stringify(n))}function c(){var e=(0,i.useRouter)().query;try{var t,n,o,c,a,u,s=JSON.parse(e.params),l=s.listeNavn;return{valg:{aktiviteter:null!==(t=s.valg.aktiviteter)&&void 0!==t?t:r.z.aktiviteter,lengde:null!==(n=s.valg.lengde)&&void 0!==n?n:r.z.lengde,"kj\xf8nn":null!==(o=s.valg.kj\u00f8nn)&&void 0!==o?o:r.z["kj\xf8nn"],overnatting:null!==(c=s.valg.overnatting)&&void 0!==c?c:r.z.overnatting,sesong:null!==(a=s.valg.sesong)&&void 0!==a?a:r.z.sesong,spesielleBehov:null!==(u=s.valg.spesielleBehov)&&void 0!==u?u:r.z.spesielleBehov},listeNavn:l,key:JSON.stringify(s)}}catch(f){return{error:f,feilmelding:"Det skjedde en feil under parsing av params",valg:r.z,listeNavn:"",key:"error"}}}},5386:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var r=n(1385);function i(e){return(0,r.Z)(function(e){return t=Object.keys(e),t.filter((function(e){return isNaN(+e)}));var t}(e)).map((function(t){return e[t]}))}},5629:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});var r=n(4586).Z},3870:function(e,t,n){"use strict";n.d(t,{Q:function(){return a}});var r=n(1385),i=n(4047),o=n(2700),c="pakkelister",a=function(){function e(){(0,i.Z)(this,e)}return(0,o.Z)(e,null,[{key:"getLocalStorage",value:function(){return window.localStorage}},{key:"getLists",value:function(){var e,t=null===(e=this.getLocalStorage())||void 0===e?void 0:e.getItem(c);return t?JSON.parse(t):[]}},{key:"getList",value:function(e){return this.getLists().find((function(t){return t.listeNavn===e}))}},{key:"saveList",value:function(e){var t,n=this.getLists().filter((function(t){return t.listeNavn!==e.listeNavn})),i=[].concat((0,r.Z)(n),[e]);null===(t=this.getLocalStorage())||void 0===t||t.setItem(c,JSON.stringify(i))}}]),e}()}}]);
//# sourceMappingURL=565-f1f1d44589ae4eb2b8b6.js.map