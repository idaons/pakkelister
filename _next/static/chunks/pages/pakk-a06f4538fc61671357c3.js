(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{3705:function(e,t,n){"use strict";n.r(t),n.d(t,{KategoriListe:function(){return ee},default:function(){return te}});var r=n(5893),i=n(9999);var a=n(355);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(o){i=!0,a=o}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}}(e,t)||(0,a.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l,o=n(7294),u=n(8027),c=n(3399);function k(e){return e.overnatting.length>0}function g(e){return e.sesong===u.N.Vinter||[c.Nb["Randon\xe9e"],c.Nb.Fjellski].some((function(t){return e.aktiviteter.includes(t)}))}function d(e,t,n){return e.map((function(e){return{navn:e,antall:n||1,kategori:t}}))}function p(e,t){return Object.entries(e).map((function(e){return{navn:e[0],antall:e[1],kategori:t}}))}function h(e,t){return t.some((function(t){return e.includes(t)}))}!function(e){e[e["Kl\xe6r"]=0]="Kl\xe6r",e[e.Toalettsaker=1]="Toalettsaker",e[e.TekniskUtstyr=2]="TekniskUtstyr",e[e.Underholdning=3]="Underholdning",e[e.Div=4]="Div",e[e.Overnatting=5]="Overnatting",e[e.Ski=6]="Ski",e[e.Sykkel=7]="Sykkel",e[e.Kajakk=8]="Kajakk"}(l||(l={}));var m=n(9925),f=n(714);var v=n(6265),y=n(5383);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=[function(e){var t=["Solkrem"];return(0,c.ou)(e.aktiviteter)&&t.push("Sportsteip"),k(e)?(t.push("Tannb\xf8rste","Tannkrem","Tanntr\xe5d","Linsev\xe6ske","Linsebeholder","Briller","Piller","Deo"),e.kj\u00f8nn===m.oA.Kvinne&&t.push("Diverse jenteting"),e.kj\u00f8nn!==m.oA.Mann&&t.push("H\xe5rstrikk"),e.kj\u00f8nn!==m.oA.Kvinne&&(0,f.$O)(e)&&t.push("Barberh\xf8vel"),e.sesong===u.N.Sommer&&t.push("Myggmiddel"),e.spesielleBehov&&(e.sesong===u.N.Sommer?t.push("Sovekit"):t.push("Kuldekrem")),d(t,l.Toalettsaker)):d(t,l.Toalettsaker)},function(e){return e.aktiviteter.includes(c.Nb.Isbre)?p({"Is\xf8ks":1,Stegjern:1,Tau:1,Klatresele:1,Karabin:1,Skrukarabiner:2,Prussiker:2,"120-slynge":2},l.TekniskUtstyr):[]},function(e){var t={},n=e.overnatting.includes(y.zn.HusHotell)||e.overnatting.includes(y.zn.FamilieHytte);if(e.sesong===u.N.Vinter&&(t=j(j({},t),{},{Vindjakke:1,Vindbukse:1,"Ulltr\xf8ye":2,Stilong:1,Fleece:1,Ullsokker:3,Dunjakke:1,Lue:2,Hansker:1,Votter:1,Vindvotter:1,Hals:2,Brynje:1}),e.kj\u00f8nn!==m.oA.Mann&&(t=j(j({},t),{},(0,v.Z)({"Dunskj\xf8rt":1},"Ull-BH",1)))),e.sesong!==u.N.Vinter){var r,i;if(t=j(j({},t),{},(r={Shorts:1,Bukse:1},(0,v.Z)(r,"T-skjorte",2),(0,v.Z)(r,"Badet\xf8y",1),(0,v.Z)(r,"Caps",1),r)),e.kj\u00f8nn!==m.oA.Mann)t=j(j({},t),{},(i={},(0,v.Z)(i,"Sports-BH",1),(0,v.Z)(i,"singlet",1),i));e.sesong===u.N.Sommer&&(t=j(j({},t),{},{Fleece:1,"Ulltr\xf8ye":1,Vindjakke:1,Vindbukse:1,Ullsokker:3,Dunjakke:1,Lue:2,Hansker:1,Hals:2,Stilongs:1}))}return e.aktiviteter.includes(c.Nb.Bytur)&&(t=j(j({},t),{},(0,v.Z)({},"By-outfit",1))),e.aktiviteter.includes(c.Nb.Jogging)&&(t=j(j({},t),{},{"Treningst\xf8y":1,Joggesko:1})),e.aktiviteter.includes(c.Nb.Sykkel)&&(t=j(j({},t),{},{Sykkelshort:1})),k(e)&&(t=j(j({},t),{},{Truser:Math.ceil(e.lengde/1.5)})),e.spesielleBehov&&(n&&(t=j(j({},t),{},(0,v.Z)({Innesokker:Math.ceil(e.lengde/4),Innebukse:1},"T-skjorte for innebruk",Math.ceil(e.lengde/4))),e.kj\u00f8nn!==m.oA.Mann&&(t=j(j({},t),{},(0,v.Z)({},"BH",1)))),(0,c.ou)(e.aktiviteter)&&(t=j(j({},t),{},{"Gnags\xe5rsokk":1}),e.sesong===u.N.Vinter&&(t=j(j({},t),{},{Pulsvarmer:1,Dampsperresokk:1})))),p(t,l["Kl\xe6r"])},function(e){var t=["Solbriller","Lommebok"];return(0,c.ou)(e.aktiviteter)&&t.push("Flaske","Sekk","F\xf8rstehjelp","Kart","Mat","Antibac","Fyrstikker","Dopapir","H\xe5ndkle"),k(e)&&(t.push("Ladekabler","Bok"),(0,y.G$)(e)||t.push("Hodelykt","Powerbank"),e.overnatting.includes(y.zn.FamilieHytte)&&t.push("Hytten\xf8kkel"),e.overnatting.includes(y.zn.DNThytte)&&t.push("DNT-n\xf8kkel")),e.aktiviteter.includes(c.Nb.Bytur)&&(t.push("Paraply"),e.kj\u00f8nn!==m.oA.Mann&&t.push("H\xe5ndveske")),(e.aktiviteter.includes(c.Nb["Sk\xf8yteski"])||e.aktiviteter.includes(c.Nb.Langrenn)||e.aktiviteter.includes(c.Nb.Jogging)||e.aktiviteter.includes(c.Nb.Sykkel))&&t.push("Treningssekk"),(0,f.$O)(e)&&t.push("Biotex"),e.aktiviteter.includes(c.Nb.Bortekontor)&&(t.push("PC og ladekabel"),t.push("Mus og usb-dings"),t.push("Hodetelefoner")),d(t,l.Div)},function(e){var t=[];return g(e)&&t.push("Vindsekk"),(g(e)||(0,y.NT)(e))&&t.push("Liggeunderlag","Sovepose"),(0,y.NT)(e)&&t.push("Primus","Kokesaker","S\xf8ppelpose"),e.overnatting.includes(y.zn.Telt)&&t.push("Telt"),e.overnatting.includes(y.zn["Hengek\xf8ye"])&&t.push("Hengek\xf8ye","Hengek\xf8yeoppheng","Tarp","Myggnetting"),e.overnatting.includes(y.zn.DNThytte)&&t.push("Lakenpose","S\xf8ppelpose"),[y.zn.DNThytte,y.zn.Telt].some((function(t){return e.overnatting.includes(t)}))&&t.push("T\xf8fler/Innesko"),d(t,l.Overnatting)},function(e){return[c.Nb["Randon\xe9e"],c.Nb.Fjellski].some((function(t){return e.aktiviteter.includes(t)}))?d(["Skreds\xf8ker","S\xf8kestang","Spade"],l.TekniskUtstyr):[]},function(e){var t=[],n=e.aktiviteter.includes(c.Nb.Langrenn),r=e.aktiviteter.includes(c.Nb.Fjellski),i=e.aktiviteter.includes(c.Nb["Randon\xe9e"]),a=e.aktiviteter.includes(c.Nb["Sk\xf8yteski"]);return(n||r||i||a)&&(t.push("Ski","Skistaver","Skisko"),e.spesielleBehov&&t.push("Varme s\xe5ler")),(n||r)&&t.push("Sm\xf8ring"),r&&(t.push("Kortfeller"),t.push("Langfeller")),i&&(t.push("Feller"),t.push("Skarejern","Skibriller","Hjelm")),d(t,l.Ski)},function(e){var t=[];return h(e.aktiviteter,[c.Nb.Sportsklatring,c.Nb.Tradklatring,c.Nb.ViaFerrata])&&t.push("Klatresele","Hjelm"),h(e.aktiviteter,[c.Nb.Sportsklatring,c.Nb.Tradklatring])&&t.push("Tau","Taubrems","Kalkpose","Klatresko"),h(e.aktiviteter,[c.Nb.Sportsklatring])&&t.push("Quickdraws","Sikringsbriller"),h(e.aktiviteter,[c.Nb.Tradklatring])&&t.push("Kiler, Kamkiler","Annet sikringsutstyr","Kortslynger","Diverse slynger","Bailetau","Skrukarabiner"),h(e.aktiviteter,[c.Nb.ViaFerrata])&&t.push("Via ferrata kit"),d(t,l.TekniskUtstyr)},function(e){var t=[];return[c.Nb.Fottur,c.Nb.Tinderangling].some((function(t){return e.aktiviteter.includes(t)}))?(t.push("Fjellsko"),t.push("Regntrekk til sekk"),t.push("Staver"),e.spesielleBehov&&t.push("Gamasjer"),d(t,l.TekniskUtstyr)):[]},function(e){var t=[];return(0,c.$4)(e.aktiviteter)&&t.push("Hoftegnags\xe5rbeskytter"),(0,y.ul)(e.overnatting)&&e.sesong===u.N.Vinter&&t.push("Termos"),(0,c.ou)(e.aktiviteter)&&(e.sesong===u.N.Vinter?t.push("Varmeposer"):e.sesong===u.N.Sommer&&t.push("Sitteunderlag")),e.aktiviteter.includes(c.Nb.Jogging)&&t.push("L\xf8pebelte"),e.overnatting.includes(y.zn.FamilieHytte)&&t.push("Hodetelefoner"),d(t,l.Div)},function(e){return e.aktiviteter.includes(c.Nb.Kajakk)?d(["V\xe5tdrakt","V\xe5tsko","T\xf8rt skift","Pakkposer","Padle\xe5re","Kajakk","Redningsvest","Spruttrekk"],l.Kajakk):[]},function(e){return e.aktiviteter.includes(c.Nb.Sykkel)?d(["Sykkelhjelm","Sykkelveske","Lappesaker","Sykkelsko"],l.Sykkel):[]}],w=function(e,t){return e.navn>t.navn?1:-1};var S=n(8566),N=n(5709),T=n(9163),I=T.ZP.div.withConfig({displayName:"Valg__Style",componentId:"sc-1t31psu-0"})(["grid-area:valg;ul{list-style:circle;margin:0.5rem 1.5rem;padding:0;}display:flex;flex-wrap:wrap;font-weight:600;@media (max-width:768px){margin-top:1rem;padding:0;ul{margin:0.5rem 1rem;}}"]);var P=function(e){return(0,r.jsxs)(I,{children:[(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:u.N[e.valg.sesong]}),(0,r.jsx)("li",{children:(0,m._T)(e.valg.kj\u00f8nn)}),k(e.valg)&&(0,r.jsxs)("li",{children:[e.valg.lengde," dager"]})]}),(0,r.jsx)("ul",{children:e.valg.aktiviteter.map((function(e){return(0,r.jsx)("li",{children:c.Nb[e]},e)}))}),(0,r.jsx)("ul",{children:e.valg.overnatting.map((function(e){return(0,r.jsx)("li",{children:(0,y.ko)(e)},e)}))})]})},C=n(3870),O=T.ZP.div.withConfig({displayName:"Progress__Style",componentId:"sc-w1kimw-0"})(["--progress:",";grid-area:koffert;position:relative;font-size:clamp(0.5rem,2.5vw,1.25rem);height:7em;width:9em;justify-self:end;"],(function(e){return e.progress+"%"})),Z="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 87.512 66.141'%3E%3Cpath d='M2.086 65.406C-.04 64.211.09 66.018.166 38.626.233 14.755.245 14.27.763 13.56c.98-1.34 2.355-1.79 5.474-1.79h2.792l.138-1.222c.095-.842.353-1.437.833-1.918.662-.663.85-.7 3.888-.785 4.412-.123 5.256.27 5.52 2.566l.14 1.227 5.359.038 5.357.037V7.438c0-4.908.235-5.691 2.012-6.71C33.295.144 33.432.137 43.718.133 55.227.128 55.337.143 56.53 1.815c.546.766.596 1.166.673 5.396l.083 4.57 5.34-.072 5.342-.071.14-1.227c.265-2.297 1.109-2.689 5.52-2.566 3.04.084 3.226.122 3.888.785.48.48.739 1.076.834 1.918l.138 1.222h2.834c2.439 0 2.993.084 3.973.602.672.355 1.34.978 1.632 1.521.474.882.491 1.927.425 25.261l-.07 24.342-.59.827c-1.294 1.814 1.948 1.687-42.974 1.682l-40.573-.004zM6.187 38.89V14.15H5.016c-2.174 0-2.004-2.12-2.004 24.877 0 27.057-.206 24.576 2.05 24.592l1.125.008zm72.496 0V14.15H8.833V63.628h69.85zm5.31 24.465c.5-.268.511-.818.511-24.323 0-27.001.17-24.88-2.003-24.88h-1.172v49.476h1.076c.591 0 1.306-.123 1.587-.273zM16.77 10.976v-.793H12.009V11.77H16.77zm37.592-1.918c.04-5.07-.021-5.864-.483-6.218-.56-.427-19.402-.48-20.193-.056-.475.253-.512.594-.512 4.63v4.356h21.167zm21.145 1.918v-.793h-4.762V11.77h4.762z' stroke='%23000' stroke-width='.265'/%3E%3C/svg%3E\")",_=T.ZP.i.withConfig({displayName:"Progress__StyledIcon",componentId:"sc-w1kimw-1"})(["background:linear-gradient( to top,#137113 0%,#137113 var(--progress),#30ff0d var(--progress),#30ff0d 100% ) no-repeat;display:inline-block;width:100%;height:100%;mask:"," no-repeat 50% 50%;-webkit-mask:"," no-repeat 50% 50%;-webkit-mask-size:cover;mask-size:cover;"],Z,Z),E=T.ZP.span.withConfig({displayName:"Progress__Prosent",componentId:"sc-w1kimw-2"})(["left:51%;top:58%;transform:translate(-50%,-50%);position:absolute;font-size:1.8em;"]);var V=function(e){return(0,r.jsxs)(O,{progress:e.progress,children:[(0,r.jsx)(_,{}),(0,r.jsxs)(E,{children:[e.progress,"%"]})]})},H="400px",z=n(4361),K=T.ZP.div.withConfig({displayName:"Bunnknapper__Style",componentId:"sc-nd58tx-0"})(["grid-area:knapper;> *{margin-right:0.5rem;}"]);var L=function(e){return(0,r.jsxs)(K,{children:[(0,r.jsx)("p",{children:e.lagrer?"Lagrer...":"".concat(e.navn?"'".concat(e.navn,"'"):"Pakklisten"," er lagret p\xe5 enheten din \ud83c\udfd4\ud83c\udf24\ufe0f")}),(0,r.jsx)(z.Z,{onClick:function(){return confirm("Vil du nullstille lista?")&&e.clearPakkestatus()},children:"Nullstill"})]})},B=n(9826);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){return(0,r.jsxs)("svg",M(M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.016 3h-7V.5a.5.5 0 00-.5-.5h-8a.5.5 0 00-.5.5V3h-6a.5.5 0 000 1h2v19.5a.5.5 0 00.5.5h16a.5.5 0 00.5-.5V4h3a.5.5 0 000-1zm-15-2h7v2h-7V1zm-4 22h15V4h-15v19z",stroke:"#fff"}),(0,r.jsx)("path",{d:"M7.516 6.5a.5.5 0 00-.5.5v12a.5.5 0 001 0V7a.5.5 0 00-.5-.5zM11.516 6.5a.5.5 0 00-.5.5v12a.5.5 0 001 0V7a.5.5 0 00-.5-.5zM15.016 7v12a.5.5 0 001 0V7a.5.5 0 00-1 0z",stroke:"#fff"})]}))},U=T.ZP.ul.withConfig({displayName:"KategoriMarkup__TingListe",componentId:"sc-bcjwqx-0"})(["> li{margin-bottom:0.3em;}list-style-type:none;padding-left:0;"]);var A=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(B.Z,{checked:e.kategori.items.every((function(t){return e.checkedItems.includes(t.navn)})),header:!0,strikeThrough:!0,label:e.kategori.category,onChange:function(){var t=e.kategori.items.every((function(t){return e.checkedItems.includes(t.navn)})),n=e.checkedItems.filter((function(t){var n;return!(null!==(n=e.kategori.items)&&void 0!==n&&n.some((function(e){return e.navn===t})))}));t?e.setCheckedItems(n):e.setCheckedItems([].concat((0,i.Z)(n),(0,i.Z)(e.kategori.items.map((function(e){return e.navn})))))}}),(0,r.jsx)(U,{children:e.kategori.items.map((function(t){return(0,r.jsx)("li",{children:(0,r.jsx)(B.Z,{value:t.navn,label:(t.antall>1?t.antall+" ":"")+t.navn,checked:e.checkedItems.includes(t.navn),strikeThrough:!0,onChange:e.updateCheckedItems})},t.navn)}))})]})},J=n(6619),R=T.ZP.div.withConfig({displayName:"ExtraItems__EkstravalgWrapper",componentId:"sc-8etkoc-0"})(["margin-bottom:1rem;display:flex;align-items:flex-end;@media (max-width:","){flex-direction:column;}input{max-width:10rem;}button{margin-left:0.5rem;@media (max-width:","){margin-left:0;margin-top:0.5rem;width:fit-content;}}"],H,H),G=T.ZP.button.withConfig({displayName:"ExtraItems__SlettKnapp",componentId:"sc-8etkoc-1"})(["margin-left:0.4rem;border:none;background-color:transparent;&:hover,&:focus{transform:scale(1.4);}"]);var $=function(e){var t=(0,o.useState)(""),n=t[0],a=t[1],s=(0,o.useState)(!1),l=s[0],u=s[1];return(0,o.useEffect)((function(){if(e.ekstraTing.length>0){var t=e.ekstraTing.every((function(t){return e.checkedItems.includes(t)}));u(t)}}),[e.ekstraTing,e.checkedItems]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(B.Z,{header:!0,strikeThrough:!0,label:"Ekstra",checked:l,onChange:function(t){u(t.target.checked);var n=e.checkedItems.filter((function(t){var n;return!(null!==(n=e.ekstraTing)&&void 0!==n&&n.includes(t))}));t.target.checked?e.setCheckedItems([].concat((0,i.Z)(n),(0,i.Z)(e.ekstraTing))):e.setCheckedItems(n)}}),(0,r.jsxs)(U,{children:[(0,r.jsxs)(R,{children:[(0,r.jsx)(J.Z,{label:"Ekstra ting",value:n,onChange:function(e){return a(e.target.value)}}),(0,r.jsx)(z.Z,{onClick:function(){""!==n&&(e.setEkstraTing([].concat((0,i.Z)(e.ekstraTing),[n])),a(""))},children:"+ Legg til"})]}),e.ekstraTing.map((function(t){return(0,r.jsxs)("li",{children:[(0,r.jsx)(B.Z,{value:t,label:t,checked:e.checkedItems.includes(t),strikeThrough:!0,onChange:e.updateCheckedItems}),(0,r.jsx)(G,{"aria-label":"Slett",onClick:function(){return function(t){var n=e.ekstraTing.filter((function(e){return e!==t})),r=e.checkedItems.filter((function(e){return e!==t}));e.setEkstraTing(n),e.setCheckedItems(r)}(t)},children:(0,r.jsx)(F,{width:"1rem"})})]},t)}))]})]})},q=T.ZP.div.withConfig({displayName:"UgyldigLocalStorage__Style",componentId:"sc-eqbmcf-0"})(["color:#e8e862;grid-area:warning;strong{font-size:1.2rem;letter-spacing:1px;}"]),Q=T.ZP.div.withConfig({displayName:"UgyldigLocalStorage__KnappeGruppe",componentId:"sc-eqbmcf-1"})(["display:flex;margin-top:1rem;column-gap:1rem;"]),X=function(e){return(0,r.jsxs)(q,{children:[(0,r.jsx)("strong",{children:"NB!"})," F\xf8lgende elementer er markert som pakket i  local storage, men de finnes \n      ikke i n\xe5v\xe6rende pakkeliste: ".concat(e.ugyldigeElementer.join(", "),"\n       . Vil du fjerne de fra local storage?"),(0,r.jsxs)(Q,{children:[(0,r.jsx)(z.Z,{onClick:function(){return e.handleUgyldigLocalStorage(!0)},children:"JA! \ud83e\udd73"}),(0,r.jsx)(z.Z,{onClick:function(){return e.handleUgyldigLocalStorage(!1)},children:"N\xe6sj \ud83d\udc4e\ufe0f"})]})]})},W=T.ZP.div.withConfig({displayName:"pakk__Style",componentId:"sc-285gd2-0"})(['min-height:100vh;padding:2em;border:0.2em white solid;border-radius:1rem;background-color:#333;display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr auto;align-items:start;grid-gap:4rem;grid-template-areas:"header valg koffert" "warning warning warning" "liste liste liste" "knapper knapper knapper";@media (max-width:','){grid-template-columns:auto 1fr;grid-template-rows:auto 1fr;grid-gap:3rem 1rem;grid-template-areas:"header koffert" "warning warning" "valg valg " "liste liste" "knapper knapper";}'],"1000px"),Y=T.ZP.h1.withConfig({displayName:"pakk__StyledH1",componentId:"sc-285gd2-1"})(["margin-top:0;margin-bottom:1.5rem;"]),ee=T.ZP.ul.withConfig({displayName:"pakk__KategoriListe",componentId:"sc-285gd2-2"})(["margin:0;> li{margin-right:3em;@media (max-width:","){margin-right:1em;}}grid-area:liste;display:flex;flex-flow:row wrap;list-style-type:none;padding-left:0;"],H);var te=function(){var e=(0,S.J)(),t=e.valg,n=e.listeNavn,a=e.feilmelding,u=(0,o.useState)([]),c=u[0],k=u[1],g=(0,o.useState)(!1),d=g[0],p=g[1],h=(0,o.useState)([]),m=h[0],f=h[1],v=(0,S.J)(),y=function(e){return function(e){var t=[];return e.forEach((function(e){var n=t.find((function(t){return t.navn===e.navn&&t.kategori===e.kategori}));n?n.antall=n.antall>e.antall?n.antall:e.antall:t.push(e)})),t}(x.flatMap((function(t){return t(e)})).sort(w))}(t),b=C.Q.getList(n),j=(0,o.useState)({gyldigeElementer:[],ugyldigeElementer:[]}),T=j[0],I=j[1];(0,o.useEffect)((function(){if(b){var e,t,n=y.map((function(e){return e.navn})).concat(b.ekstraItems),r=(e=b.checked.concat(),t=function(e){return n.includes(e)},e.reduce((function(e,n){var r=s(e,2),a=r[0],l=r[1];return t(n)?[[].concat((0,i.Z)(a),[n]),l]:[a,[].concat((0,i.Z)(l),[n])]}),[[],[]])),a=s(r,2),l=a[0],o=a[1];o.length>0&&I({gyldigeElementer:l,ugyldigeElementer:o}),k(b.checked),f(b.ekstraItems)}}),[v.key]),(0,o.useEffect)((function(){p(!0),C.Q.saveList({listeNavn:n,checked:c,ekstraItems:m,valg:t});var e=setTimeout((function(){var e;null===(e=document.getElementById("lagreknapp"))||void 0===e||e.blur(),p(!1)}),1e3);return function(){clearTimeout(e)}}),[c,m]);var O=(0,r.jsx)(N.Z,{href:"/?"+(0,S.l)(t,n),children:"Tilbake"});if(a)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:a}),O]});var Z,_=function(e){var t=e.target.value;e.target.checked?k([].concat((0,i.Z)(c),[t])):k(c.filter((function(e){return e!==t})))},E=(Z=function(e){return l[e.kategori]},y.reduce((function(e,t){var n=Z(t),r=e.findIndex((function(e){return e.category===n}));return r>=0?e[r].items.push(t):e.push({category:n,items:[t]}),e}),[])),H=Math.floor(100*c.length/(y.length+m.length));return(0,r.jsxs)(W,{children:[(0,r.jsxs)("div",{style:{gridArea:"header"},children:[(0,r.jsxs)(Y,{children:["Pakker ",n&&"'".concat(n,"'")]}),O]}),(0,r.jsx)(P,{valg:t}),(0,r.jsx)(V,{progress:H}),T.ugyldigeElementer.length>0&&(0,r.jsx)(X,{ugyldigeElementer:T.ugyldigeElementer,handleUgyldigLocalStorage:function(e){e&&T.gyldigeElementer&&k(T.gyldigeElementer),I({gyldigeElementer:[],ugyldigeElementer:[]})}}),(0,r.jsxs)(ee,{children:[E.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(A,{kategori:e,updateCheckedItems:_,setCheckedItems:k,checkedItems:c})},e.category)})),(0,r.jsx)("li",{children:(0,r.jsx)($,{checkedItems:c,ekstraTing:m,setCheckedItems:k,setEkstraTing:f,updateCheckedItems:_})})]}),(0,r.jsx)(L,{lagrer:d,navn:n,clearPakkestatus:function(){return k([])}})]})}},3665:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pakk",function(){return n(3705)}])}},function(e){e.O(0,[505,565,774,888,179],(function(){return t=3665,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=pakk-a06f4538fc61671357c3.js.map