(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{5806:function(e,t,n){"use strict";n.r(t),n.d(t,{KategoriListe:function(){return ee},default:function(){return te}});var r,i=n(2982),a=n(7294),s=n(8027),l=n(3399);function o(e){return e.overnatting.length>0}function u(e){return e.sesong===s.N.Vinter||[l.Nb["Randon\xe9e"],l.Nb.Fjellski].some((function(t){return e.aktiviteter.includes(t)}))}function c(e,t,n){return e.map((function(e){return{navn:e,antall:n||1,kategori:t}}))}function k(e,t){return Object.entries(e).map((function(e){return{navn:e[0],antall:e[1],kategori:t}}))}function d(e,t){return t.some((function(t){return e.includes(t)}))}!function(e){e[e["Kl\xe6r"]=0]="Kl\xe6r",e[e.Toalettsaker=1]="Toalettsaker",e[e.TekniskUtstyr=2]="TekniskUtstyr",e[e.Underholdning=3]="Underholdning",e[e.Div=4]="Div",e[e.Overnatting=5]="Overnatting",e[e.Ski=6]="Ski",e[e.Sykkel=7]="Sykkel",e[e.Kajakk=8]="Kajakk"}(r||(r={}));var g=n(9925),p=n(714);var h=n(4942),m=n(5383);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=[function(e){var t=["Solkrem"];return(0,l.ou)(e.aktiviteter)&&t.push("Sportsteip"),o(e)?(t.push("Tannb\xf8rste","Tannkrem","Tanntr\xe5d","Linsev\xe6ske","Linsebeholder","Briller","Piller","Deo"),e.kj\u00f8nn===g.oA.Kvinne&&t.push("Diverse jenteting"),e.kj\u00f8nn!==g.oA.Mann&&t.push("H\xe5rstrikk"),e.kj\u00f8nn!==g.oA.Kvinne&&(0,p.$O)(e)&&t.push("Barberh\xf8vel"),e.sesong===s.N.Sommer&&t.push("Myggmiddel"),e.idaBehov&&(e.sesong===s.N.Sommer?t.push("Sovekit"):t.push("Kuldekrem")),c(t,r.Toalettsaker)):c(t,r.Toalettsaker)},function(e){return e.aktiviteter.includes(l.Nb.Isbre)?k({"Is\xf8ks":1,Stegjern:1,Tau:1,Klatresele:1,Karabin:1,Skrukarabiner:2,Prusiker:2,"120-slynge":2},r.TekniskUtstyr):[]},function(e){var t,n,i={},a=e.overnatting.includes(m.zn.HusHotell)||e.overnatting.includes(m.zn.FamilieHytte);return i=v(v({},i),{},{Fleece:1,Vindjakke:1,Vindbukse:1,Dunjakke:1,Hansker:1,Hals:2}),e.sesong===s.N.Vinter&&(i=v(v({},i),{},{"Ulltr\xf8ye":2,Votter:1,Vindvotter:1,Brynje:1,Ullsokker:3,Lue:2,Stilongs:1}),e.kj\u00f8nn!==g.oA.Mann&&(i=v(v({},i),{},(0,h.Z)({"Dunskj\xf8rt":1},"Ull-BH",1)))),e.sesong===s.N.Sommer&&(i=v(v({},i),{},(t={"Ulltr\xf8ye":1,Shorts:1,Bukse:1,Sportssokker:2,Ullsokker:1},(0,h.Z)(t,"T-skjorte",2),(0,h.Z)(t,"Badet\xf8y",1),(0,h.Z)(t,"Caps",1),(0,h.Z)(t,"Lue",1),t)),e.kj\u00f8nn!==g.oA.Mann&&(i=v(v({},i),{},(n={},(0,h.Z)(n,"Sports-BH",1),(0,h.Z)(n,"Singlet",1),n)))),e.aktiviteter.includes(l.Nb.Bytur)&&(i=v(v({},i),{},(0,h.Z)({},"By-outfit",1))),e.aktiviteter.includes(l.Nb.Jogging)&&(i=v(v({},i),{},{"Treningst\xf8y":1,Joggesko:1})),e.aktiviteter.includes(l.Nb.Sykkel)&&(i=v(v({},i),{},{Sykkelshort:1})),o(e)&&(i=v(v({},i),{},{Truser:Math.ceil(e.lengde/1.5)})),e.idaBehov&&(a&&(i=v(v({},i),{},(0,h.Z)({Innesokker:Math.ceil(e.lengde/4),Innebukse:1},"T-skjorte for innebruk",Math.ceil(e.lengde/4))),e.kj\u00f8nn!==g.oA.Mann&&(i=v(v({},i),{},(0,h.Z)({},"BH",1)))),(0,l.ou)(e.aktiviteter)&&(i=v(v({},i),{},{"Gnags\xe5rsokk":1}),e.sesong===s.N.Vinter&&(i=v(v({},i),{},{Pulsvarmer:1,Dampsperresokk:1})))),k(i,r["Kl\xe6r"])},function(e){var t=["Solbriller","Lommebok","Antibac","Mat","Fyrstikker","Dopapir","Flaske","F\xf8rstehjelp","Hodelykt"];return(0,l.ou)(e.aktiviteter)&&t.push("Sekk","Kart"),o(e)&&(t.push("Ladekabler","Bok","H\xe5ndkle"),(0,m.G$)(e)||t.push("Powerbank"),e.overnatting.includes(m.zn.FamilieHytte)&&t.push("Hytten\xf8kkel"),e.overnatting.includes(m.zn.DNThytte)&&t.push("DNT-n\xf8kkel")),e.aktiviteter.includes(l.Nb.Bytur)&&(t.push("Paraply"),e.kj\u00f8nn!==g.oA.Mann&&t.push("H\xe5ndveske")),(e.aktiviteter.includes(l.Nb["Sk\xf8yteski"])||e.aktiviteter.includes(l.Nb.Langrenn)||e.aktiviteter.includes(l.Nb.Jogging)||e.aktiviteter.includes(l.Nb.Sykkel))&&t.push("Treningssekk"),(0,p.$O)(e)&&t.push("Biotex"),e.aktiviteter.includes(l.Nb.Bortekontor)&&(t.push("PC og ladekabel"),t.push("Mus og usb-dings"),t.push("Hodetelefoner")),c(t,r.Div)},function(e){var t=[];return u(e)&&t.push("Vindsekk"),(u(e)||(0,m.NT)(e))&&t.push("Liggeunderlag","Sovepose"),(0,m.NT)(e)&&t.push("Primus","Kokesaker","S\xf8ppelpose"),e.overnatting.includes(m.zn.Telt)&&t.push("Telt"),e.overnatting.includes(m.zn["Hengek\xf8ye"])&&t.push("Hengek\xf8ye","Hengek\xf8yeoppheng","Tarp","Myggnetting"),e.overnatting.includes(m.zn.DNThytte)&&t.push("Lakenpose","S\xf8ppelpose"),[m.zn.DNThytte,m.zn.Telt].some((function(t){return e.overnatting.includes(t)}))&&t.push("T\xf8fler/Innesko"),c(t,r.Overnatting)},function(e){return[l.Nb["Randon\xe9e"],l.Nb.Fjellski].some((function(t){return e.aktiviteter.includes(t)}))?c(["Skreds\xf8ker","S\xf8kestang","Spade"],r.TekniskUtstyr):[]},function(e){var t=[],n=e.aktiviteter.includes(l.Nb.Langrenn),i=e.aktiviteter.includes(l.Nb.Fjellski),a=e.aktiviteter.includes(l.Nb["Randon\xe9e"]),s=e.aktiviteter.includes(l.Nb["Sk\xf8yteski"]);return(n||i||a||s)&&(t.push("Ski","Skistaver","Skisko"),e.idaBehov&&t.push("Varme s\xe5ler")),(n||i)&&t.push("Sm\xf8ring"),i&&(t.push("Kortfeller"),t.push("Langfeller")),a&&(t.push("Feller"),t.push("Skarejern","Skibriller","Hjelm")),c(t,r.Ski)},function(e){var t=[];return d(e.aktiviteter,[l.Nb.Sportsklatring,l.Nb.Tradklatring,l.Nb.ViaFerrata])&&t.push("Klatresele","Hjelm"),d(e.aktiviteter,[l.Nb.Sportsklatring,l.Nb.Tradklatring])&&t.push("Tau","Taubrems","Kalkpose","Klatresko"),d(e.aktiviteter,[l.Nb.Sportsklatring])&&t.push("Quickdraws","Sikringsbriller"),d(e.aktiviteter,[l.Nb.Tradklatring])&&t.push("Kiler, kamkiler","Kortslynger","Diverse slynger","Bailetau","Diverse karabiner","N\xf8ttepirker","Prusiker"),d(e.aktiviteter,[l.Nb.ViaFerrata])&&t.push("Via ferrata kit"),c(t,r.TekniskUtstyr)},function(e){var t=[];return[l.Nb.Fottur,l.Nb.Tinderangling].some((function(t){return e.aktiviteter.includes(t)}))?(t.push("Fjellsko"),t.push("Regntrekk til sekk"),t.push("Staver"),e.idaBehov&&t.push("Gamasjer"),c(t,r.TekniskUtstyr)):[]},function(e){var t=[];return(0,l.$4)(e.aktiviteter)&&t.push("Hoftegnags\xe5rbeskytter"),(0,m.ul)(e.overnatting)&&e.sesong===s.N.Vinter&&t.push("Termos"),(0,l.ou)(e.aktiviteter)&&(e.sesong===s.N.Vinter?t.push("Varmeposer"):e.sesong===s.N.Sommer&&t.push("Sitteunderlag")),e.aktiviteter.includes(l.Nb.Jogging)&&t.push("L\xf8pebelte"),e.overnatting.includes(m.zn.FamilieHytte)&&t.push("Hodetelefoner"),c(t,r.Div)},function(e){return e.aktiviteter.includes(l.Nb.Kajakk)?c(["V\xe5tdrakt","V\xe5tsko","T\xf8rt skift","Pakkposer","Padle\xe5re","Kajakk","Redningsvest","Spruttrekk"],r.Kajakk):[]},function(e){return e.aktiviteter.includes(l.Nb.Sykkel)?c(["Sykkelhjelm","Sykkelveske","Lappesaker","Sykkelsko"],r.Sykkel):[]}],b=function(e,t){return e.navn>t.navn?1:-1};var j=n(8566),x=n(5709),w=n(9163),S=n(5893),N=w.ZP.div.withConfig({displayName:"Valg__Style",componentId:"sc-1t31psu-0"})(["grid-area:valg;ul{list-style:circle;margin:0.5rem 1.5rem;padding:0;}display:flex;flex-wrap:wrap;font-weight:600;@media (max-width:768px){margin-top:1rem;padding:0;ul{margin:0.5rem 1rem;}}"]);var T=function(e){return(0,S.jsxs)(N,{children:[(0,S.jsxs)("ul",{children:[(0,S.jsx)("li",{children:s.N[e.valg.sesong]}),(0,S.jsx)("li",{children:(0,g._T)(e.valg.kj\u00f8nn)}),o(e.valg)&&(0,S.jsxs)("li",{children:[e.valg.lengde," dager"]}),e.valg.idaBehov&&(0,S.jsx)("li",{children:"Ida sine s\xe6re ting"})]}),(0,S.jsx)("ul",{children:e.valg.aktiviteter.map((function(e){return(0,S.jsx)("li",{children:l.Nb[e]},e)}))}),(0,S.jsx)("ul",{children:e.valg.overnatting.map((function(e){return(0,S.jsx)("li",{children:(0,m.ko)(e)},e)}))})]})},I=n(3870),P=w.ZP.div.withConfig({displayName:"Progress__Style",componentId:"sc-w1kimw-0"})(["--progress:",";grid-area:koffert;position:relative;font-size:clamp(0.5rem,2.5vw,1.25rem);height:7em;width:9em;justify-self:end;"],(function(e){return e.progress+"%"})),C="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 87.512 66.141'%3E%3Cpath d='M2.086 65.406C-.04 64.211.09 66.018.166 38.626.233 14.755.245 14.27.763 13.56c.98-1.34 2.355-1.79 5.474-1.79h2.792l.138-1.222c.095-.842.353-1.437.833-1.918.662-.663.85-.7 3.888-.785 4.412-.123 5.256.27 5.52 2.566l.14 1.227 5.359.038 5.357.037V7.438c0-4.908.235-5.691 2.012-6.71C33.295.144 33.432.137 43.718.133 55.227.128 55.337.143 56.53 1.815c.546.766.596 1.166.673 5.396l.083 4.57 5.34-.072 5.342-.071.14-1.227c.265-2.297 1.109-2.689 5.52-2.566 3.04.084 3.226.122 3.888.785.48.48.739 1.076.834 1.918l.138 1.222h2.834c2.439 0 2.993.084 3.973.602.672.355 1.34.978 1.632 1.521.474.882.491 1.927.425 25.261l-.07 24.342-.59.827c-1.294 1.814 1.948 1.687-42.974 1.682l-40.573-.004zM6.187 38.89V14.15H5.016c-2.174 0-2.004-2.12-2.004 24.877 0 27.057-.206 24.576 2.05 24.592l1.125.008zm72.496 0V14.15H8.833V63.628h69.85zm5.31 24.465c.5-.268.511-.818.511-24.323 0-27.001.17-24.88-2.003-24.88h-1.172v49.476h1.076c.591 0 1.306-.123 1.587-.273zM16.77 10.976v-.793H12.009V11.77H16.77zm37.592-1.918c.04-5.07-.021-5.864-.483-6.218-.56-.427-19.402-.48-20.193-.056-.475.253-.512.594-.512 4.63v4.356h21.167zm21.145 1.918v-.793h-4.762V11.77h4.762z' stroke='%23000' stroke-width='.265'/%3E%3C/svg%3E\")",Z=w.ZP.i.withConfig({displayName:"Progress__StyledIcon",componentId:"sc-w1kimw-1"})(["background:linear-gradient( to top,#137113 0%,#137113 var(--progress),#30ff0d var(--progress),#30ff0d 100% ) no-repeat;display:inline-block;width:100%;height:100%;mask:"," no-repeat 50% 50%;-webkit-mask:"," no-repeat 50% 50%;-webkit-mask-size:cover;mask-size:cover;"],C,C),O=w.ZP.span.withConfig({displayName:"Progress__Prosent",componentId:"sc-w1kimw-2"})(["left:51%;top:58%;transform:translate(-50%,-50%);position:absolute;font-size:1.8em;"]);var _=function(e){return(0,S.jsxs)(P,{progress:e.progress,children:[(0,S.jsx)(Z,{}),(0,S.jsxs)(O,{children:[e.progress,"%"]})]})},V="400px",E=n(4361),H=w.ZP.div.withConfig({displayName:"Bunnknapper__Style",componentId:"sc-nd58tx-0"})(["grid-area:knapper;> *{margin-right:0.5rem;}"]);var z=function(e){return(0,S.jsxs)(H,{children:[(0,S.jsx)("p",{children:e.lagrer?"Lagrer...":"".concat(e.navn?"'".concat(e.navn,"'"):"Pakklisten"," er lagret p\xe5 enheten din \ud83c\udfd4\ud83c\udf24\ufe0f")}),(0,S.jsx)(E.Z,{onClick:function(){return confirm("Vil du nullstille lista?")&&e.clearPakkestatus()},children:"Nullstill"})]})},B=n(9826);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){return(0,S.jsxs)("svg",D(D({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,S.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.016 3h-7V.5a.5.5 0 00-.5-.5h-8a.5.5 0 00-.5.5V3h-6a.5.5 0 000 1h2v19.5a.5.5 0 00.5.5h16a.5.5 0 00.5-.5V4h3a.5.5 0 000-1zm-15-2h7v2h-7V1zm-4 22h15V4h-15v19z",stroke:"#fff"}),(0,S.jsx)("path",{d:"M7.516 6.5a.5.5 0 00-.5.5v12a.5.5 0 001 0V7a.5.5 0 00-.5-.5zM11.516 6.5a.5.5 0 00-.5.5v12a.5.5 0 001 0V7a.5.5 0 00-.5-.5zM15.016 7v12a.5.5 0 001 0V7a.5.5 0 00-1 0z",stroke:"#fff"})]}))},M=w.ZP.ul.withConfig({displayName:"KategoriMarkup__TingListe",componentId:"sc-bcjwqx-0"})(["> li{margin-bottom:0.3em;}list-style-type:none;padding-left:0;"]);var F=function(e){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(B.Z,{checked:e.kategori.items.every((function(t){return e.checkedItems.includes(t.navn)})),header:!0,strikeThrough:!0,label:e.kategori.category,onChange:function(){var t=e.kategori.items.every((function(t){return e.checkedItems.includes(t.navn)})),n=e.checkedItems.filter((function(t){var n;return!(null!==(n=e.kategori.items)&&void 0!==n&&n.some((function(e){return e.navn===t})))}));t?e.setCheckedItems(n):e.setCheckedItems([].concat((0,i.Z)(n),(0,i.Z)(e.kategori.items.map((function(e){return e.navn})))))}}),(0,S.jsx)(M,{children:e.kategori.items.map((function(t){return(0,S.jsx)("li",{children:(0,S.jsx)(B.Z,{value:t.navn,label:(t.antall>1?t.antall+" ":"")+t.navn,checked:e.checkedItems.includes(t.navn),strikeThrough:!0,onChange:e.updateCheckedItems})},t.navn)}))})]})},U=n(6619),A=w.ZP.div.withConfig({displayName:"ExtraItems__EkstravalgWrapper",componentId:"sc-8etkoc-0"})(["margin-bottom:1rem;display:flex;align-items:flex-end;@media (max-width:","){flex-direction:column;align-items:flex-start;}input{max-width:10rem;}button{margin-left:0.5rem;@media (max-width:","){margin-left:0;margin-top:0.5rem;width:fit-content;}}"],V,V),J=w.ZP.button.withConfig({displayName:"ExtraItems__SlettKnapp",componentId:"sc-8etkoc-1"})(["margin-left:0.4rem;border:none;background-color:transparent;&:hover,&:focus{transform:scale(1.4);}"]);var R=function(e){var t=(0,a.useState)(""),n=t[0],r=t[1],s=(0,a.useState)(!1),l=s[0],o=s[1];return(0,a.useEffect)((function(){if(e.ekstraTing.length>0){var t=e.ekstraTing.every((function(t){return e.checkedItems.includes(t)}));o(t)}}),[e.ekstraTing,e.checkedItems]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(B.Z,{header:!0,strikeThrough:!0,label:"Ekstra",checked:l,onChange:function(t){o(t.target.checked);var n=e.checkedItems.filter((function(t){var n;return!(null!==(n=e.ekstraTing)&&void 0!==n&&n.includes(t))}));t.target.checked?e.setCheckedItems([].concat((0,i.Z)(n),(0,i.Z)(e.ekstraTing))):e.setCheckedItems(n)}}),(0,S.jsxs)(M,{children:[(0,S.jsxs)(A,{children:[(0,S.jsx)(U.Z,{label:"Ekstra ting",value:n,onChange:function(e){return r(e.target.value)}}),(0,S.jsx)(E.Z,{onClick:function(){""!==n&&(e.setEkstraTing([].concat((0,i.Z)(e.ekstraTing),[n])),r(""))},children:"+ Legg til"})]}),e.ekstraTing.map((function(t){return(0,S.jsxs)("li",{children:[(0,S.jsx)(B.Z,{value:t,label:t,checked:e.checkedItems.includes(t),strikeThrough:!0,onChange:e.updateCheckedItems}),(0,S.jsx)(J,{"aria-label":"Slett",onClick:function(){return function(t){var n=e.ekstraTing.filter((function(e){return e!==t})),r=e.checkedItems.filter((function(e){return e!==t}));e.setEkstraTing(n),e.setCheckedItems(r)}(t)},children:(0,S.jsx)(L,{width:"1rem"})})]},t)}))]})]})};var $=n(181);function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(o){l=!0,i=o}finally{try{s||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||(0,$.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=w.ZP.div.withConfig({displayName:"UgyldigLocalStorage__Style",componentId:"sc-eqbmcf-0"})(["color:#e8e862;grid-area:warning;strong{font-size:1.2rem;letter-spacing:1px;}"]),Q=(0,w.ZP)(E.Z).withConfig({displayName:"UgyldigLocalStorage__StyledButton",componentId:"sc-eqbmcf-1"})(["display:block;margin-top:1rem;"]);var X=function(e){var t,n,r=e.alleElementer.map((function(e){return e.navn})).concat(e.ekstraItems),a=(t=e.checked.concat(),n=function(e){return r.includes(e)},t.reduce((function(e,t){var r=q(e,2),a=r[0],s=r[1];return n(t)?[[].concat((0,i.Z)(a),[t]),s]:[a,[].concat((0,i.Z)(s),[t])]}),[[],[]])),s=q(a,2),l=s[0],o=s[1];return 0===o.length?null:(0,S.jsxs)(G,{children:[(0,S.jsx)("strong",{children:"NB!"}),(0,S.jsx)("span",{children:"Fant noen ting som er markert som pakket, men de finnes ikke lenger i n\xe5v\xe6rende pakkeliste:"}),(0,S.jsx)("ul",{children:o.map((function(e){return(0,S.jsx)("li",{children:e})}))}),(0,S.jsx)("span",{children:"Hvis du ikke fjerner de vil du f\xe5 over 100% pakket n\xe5r du har pakket alt. Vil du fjerne de fra local storage s\xe5 det blir riktig?"}),(0,S.jsx)(Q,{onClick:function(){e.setChecked(l)},children:"JA, FJERN! \ud83e\udd73"})]})},W=w.ZP.div.withConfig({displayName:"pakk__Style",componentId:"sc-285gd2-0"})(['min-height:100vh;padding:2em;border:0.2em white solid;border-radius:1rem;background-color:#333;display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr auto;align-items:start;grid-gap:4rem;grid-template-areas:"header valg koffert" "liste liste liste" "warning warning warning" "knapper knapper knapper";@media (max-width:','){grid-template-columns:auto 1fr;grid-template-rows:auto 1fr;grid-gap:3rem 1rem;grid-template-areas:"header koffert" "valg valg " "liste liste" "warning warning" "knapper knapper";}'],"1000px"),Y=w.ZP.h1.withConfig({displayName:"pakk__StyledH1",componentId:"sc-285gd2-1"})(["margin-top:0;margin-bottom:1.5rem;"]),ee=w.ZP.ul.withConfig({displayName:"pakk__KategoriListe",componentId:"sc-285gd2-2"})(["margin:0;> li{margin-right:3em;@media (max-width:","){margin-right:1em;}}grid-area:liste;display:flex;flex-flow:row wrap;list-style-type:none;padding-left:0;"],V);var te=function(){var e=(0,j.Jr)(),t=e.valg,n=e.listeNavn,s=e.feilmelding,l=(0,a.useState)([]),o=l[0],u=l[1],c=(0,a.useState)(!1),k=c[0],d=c[1],g=(0,a.useState)([]),p=g[0],h=g[1],m=(0,j.Jr)(),f=function(e){return function(e){var t=[];return e.forEach((function(e){var n=t.find((function(t){return t.navn===e.navn&&t.kategori===e.kategori}));n?n.antall=n.antall>e.antall?n.antall:e.antall:t.push(e)})),t}(y.flatMap((function(t){return t(e)})).sort(b))}(t),v=I.Q.getList(n);(0,a.useEffect)((function(){v&&(u(v.checked),h(v.ekstraItems))}),[m.key]),(0,a.useEffect)((function(){d(!0),I.Q.saveList({listeNavn:n,checked:o,ekstraItems:p,valg:t});var e=setTimeout((function(){var e;null===(e=document.getElementById("lagreknapp"))||void 0===e||e.blur(),d(!1)}),1e3);return function(){clearTimeout(e)}}),[o,p]);var w=(0,S.jsx)(x.Z,{href:"/?"+(0,j.lJ)(t,n),children:"Tilbake"});if(s)return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("p",{children:s}),w]});var N,P=function(e){var t=e.target.value;e.target.checked?u([].concat((0,i.Z)(o),[t])):u(o.filter((function(e){return e!==t})))},C=(N=function(e){return r[e.kategori]},f.reduce((function(e,t){var n=N(t),r=e.findIndex((function(e){return e.category===n}));return r>=0?e[r].items.push(t):e.push({category:n,items:[t]}),e}),[])),Z=Math.floor(100*o.length/(f.length+p.length));return(0,S.jsxs)(W,{children:[(0,S.jsxs)("div",{style:{gridArea:"header"},children:[(0,S.jsxs)(Y,{children:["Pakker ",n&&"'".concat(n,"'")]}),w]}),(0,S.jsx)(T,{valg:t}),(0,S.jsx)(_,{progress:Z}),(0,S.jsxs)(ee,{children:[C.map((function(e){return(0,S.jsx)("li",{children:(0,S.jsx)(F,{kategori:e,updateCheckedItems:P,setCheckedItems:u,checkedItems:o})},e.category)})),(0,S.jsx)("li",{children:(0,S.jsx)(R,{checkedItems:o,ekstraTing:p,setCheckedItems:u,setEkstraTing:h,updateCheckedItems:P})})]}),(0,S.jsx)(X,{ekstraItems:p,checked:o,alleElementer:f,setChecked:u}),(0,S.jsx)(z,{lagrer:k,navn:n,clearPakkestatus:function(){return u([])}})]})}},3665:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pakk",function(){return n(5806)}])}},function(e){e.O(0,[738,565,774,888,179],(function(){return t=3665,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=pakk-e2c6bfce169d86703dd8.js.map