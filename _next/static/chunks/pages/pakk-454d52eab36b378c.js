(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[979],{5310:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/pakk",function(){return n(8941)}])},8941:(e,t,n)=>{"use strict";n.r(t),n.d(t,{KategoriListe:()=>R,default:()=>J});var r=n(4848),i=n(3540);let a="400px";var s=n(827),l=n(6540);let o=i.Ay.div.withConfig({componentId:"sc-7f6af0a6-0"})(["grid-area:knapper;> *{margin-right:0.5rem;}"]),k=function(e){return(0,r.jsxs)(o,{children:[(0,r.jsx)("p",{children:"".concat(e.navn?"'".concat(e.navn,"'"):"Pakklisten"," er lagret p\xe5 enheten din \uD83C\uDFD4\uD83C\uDF24️")}),(0,r.jsx)(s.A,{onClick:()=>confirm("Vil du nullstille lista?")&&e.clearPakkestatus(),children:"Nullstill"})]})};var u=n(7516);let d=e=>(0,r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.016 3h-7V.5a.5.5 0 00-.5-.5h-8a.5.5 0 00-.5.5V3h-6a.5.5 0 000 1h2v19.5a.5.5 0 00.5.5h16a.5.5 0 00.5-.5V4h3a.5.5 0 000-1zm-15-2h7v2h-7V1zm-4 22h15V4h-15v19z",stroke:"#fff"}),(0,r.jsx)("path",{d:"M7.516 6.5a.5.5 0 00-.5.5v12a.5.5 0 001 0V7a.5.5 0 00-.5-.5zM11.516 6.5a.5.5 0 00-.5.5v12a.5.5 0 001 0V7a.5.5 0 00-.5-.5zM15.016 7v12a.5.5 0 001 0V7a.5.5 0 00-1 0z",stroke:"#fff"})]}),g=i.Ay.ul.withConfig({componentId:"sc-9c6aa1c5-0"})(["> li{margin-bottom:0.3em;}list-style-type:none;padding-left:0;"]),c=function(e){let t=e.kategori.items.every(t=>e.checkedItems.includes(t.navn));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.A,{checked:t,header:!0,strikeThrough:!0,label:e.kategori.category,onChange:()=>{let n=e.kategori.items.map(e=>e.navn);t?e.removeItems(n):e.setItems(n)}}),(0,r.jsx)(g,{children:e.kategori.items.map(t=>(0,r.jsx)("li",{children:(0,r.jsx)(u.A,{value:t.navn,label:(t.antall>1?t.antall+" ":"")+t.navn,checked:e.checkedItems.includes(t.navn),strikeThrough:!0,onChange:()=>e.toggleItem(t.navn)})},t.navn))})]})};var h=n(3824);let m=i.Ay.div.withConfig({componentId:"sc-50a986df-0"})(["margin-bottom:1rem;display:flex;align-items:flex-end;@media (max-width:","){flex-direction:column;align-items:flex-start;}input{max-width:10rem;}button{margin-left:0.5rem;@media (max-width:","){margin-left:0;margin-top:0.5rem;width:fit-content;}}"],a,a),p=i.Ay.button.withConfig({componentId:"sc-50a986df-1"})(["margin-left:0.4rem;border:none;background-color:transparent;&:hover,&:focus{transform:scale(1.4);}"]),v=function(e){let[t,n]=(0,l.useState)(""),i=t=>{e.checkedItems.includes(t)&&e.toggleExtraItem(t),e.ekstraTing.includes(t)&&e.toggleExtraItem(t)},a=e.ekstraTing.every(t=>e.checkedItems.includes(t));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.A,{header:!0,strikeThrough:!0,label:"Ekstra",checked:a,onChange:()=>{let t=e.ekstraTing.map(e=>e);a?e.removeItems(t):e.setItems(t)}}),(0,r.jsxs)(g,{children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(h.A,{label:"Ekstra ting",value:t,onChange:e=>n(e.target.value)}),(0,r.jsx)(s.A,{onClick:()=>{e.ekstraTing.includes(t)||(e.toggleExtraItem(t),n(""))},children:"+ Legg til"})]}),e.ekstraTing.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(u.A,{value:t,label:t,checked:e.checkedItems.includes(t),strikeThrough:!0,onChange:()=>e.toggleItem(t)}),(0,r.jsx)(p,{"aria-label":"Slett",onClick:()=>i(t),children:(0,r.jsx)(d,{width:"1rem"})})]},t))]})]})};var f=n(1105);function j(e){return e.overnatting.length>0}function x(e){let t=!1;return e.sesong===f.wr.Vinter&&[f.uG.Tradklatring,f.uG.ViaFerrata,f.uG.Fottur,f.uG.Tinderangling].some(t=>e.aktiviteter.includes(t))&&(t=!0),[f.uG.Randonée,f.uG.Fjellski,f.uG.Isbre,f.uG.Langrenn,f.uG.Skøyteski].some(t=>e.aktiviteter.includes(t))&&(t=!0),t}function y(e,t,n){return e.map(e=>({navn:e,antall:n||1,kategori:t}))}function w(e,t){return Object.entries(e).map(e=>({navn:e[0],antall:e[1],kategori:t}))}function b(e,t){return t.some(t=>e.includes(t))}var I=n(1269),S=n(2899),T=n(9051);let G=[function(e){let t=["Solkrem"];return(0,I.eW)(e.aktiviteter)&&t.push("Sportsteip"),j(e)&&(t.push("Tannb\xf8rste","Tannkrem","Tanntr\xe5d","Linsev\xe6ske","Linsebeholder","Briller","Piller","Deo"),e.kjønn===f.$3.Kvinne&&t.push("Diverse jenteting"),e.kjønn!==f.$3.Mann&&t.push("H\xe5rstrikk"),e.kjønn!==f.$3.Kvinne&&(0,S.nV)(e)&&t.push("Barberh\xf8vel"),e.sesong===f.wr.Sommer&&t.push("Myggmiddel"),e.idaBehov&&(e.sesong===f.wr.Sommer?t.push("Sovekit"):t.push("Kuldekrem"))),y(t,f.$P.Toalettsaker)},function(e){return e.aktiviteter.includes(f.uG.Isbre)?w({Isøks:1,Stegjern:1,Tau:1,Klatresele:1,Karabin:1,Skrukarabiner:2,Prusiker:2,"120-slynge":2},f.$P.TekniskUtstyr):[]},function(e){let t={},n=e.overnatting.includes(f.gu.HusHotell)||e.overnatting.includes(f.gu.FamilieHytte);return t={...t,Fleece:1,Vindjakke:1,Vindbukse:1,Dunjakke:1,Hansker:1,Hals:2},e.sesong===f.wr.Vinter&&(t={...t,Ulltrøye:2,Votter:1,Vindvotter:1,Brynje:1,Ullsokker:3,Lue:2,Stilongs:1},e.kjønn!==f.$3.Mann&&(t={...t,Dunskjørt:1,"Ull-BH":1})),e.sesong===f.wr.Sommer&&(t={...t,Ulltrøye:1,Shorts:1,Bukse:1,Sportssokker:2,Ullsokker:1,"T-skjorte":2,Badetøy:1,Caps:1,Lue:1},e.kjønn!==f.$3.Mann&&(t={...t,"Sports-BH":1,Singlet:1})),e.aktiviteter.includes(f.uG.Bytur)&&(t={...t,"By-outfit":1}),e.aktiviteter.includes(f.uG.Jogging)&&(t={...t,Treningstøy:1,Joggesko:1}),e.aktiviteter.includes(f.uG.Sykkel)&&(t={...t,Sykkelshort:1}),j(e)&&(t={...t,Truser:Math.ceil(e.lengde/1.5)}),e.idaBehov&&(n&&(t={...t,Innesokker:Math.ceil(e.lengde/4),Innebukse:1,"T-skjorte for innebruk":Math.ceil(e.lengde/4)},e.kjønn!==f.$3.Mann&&(t={...t,BH:1})),(0,I.eW)(e.aktiviteter)&&(t={...t,Gnagsårsokk:1},e.sesong===f.wr.Vinter&&(t={...t,Pulsvarmer:1,Dampsperresokk:1}))),w(t,f.$P.Klær)},function(e){let t=["Solbriller","Lommebok","Antibac","Mat","Flaske","F\xf8rstehjelp","Hodelykt","Hodetelefoner"];return(0,T.kt)(e.overnatting)&&t.push("Termos","Dopapir","Fyrstikker"),(0,I.eW)(e.aktiviteter)&&(t.push("Sekk","Kart"),e.sesong===f.wr.Sommer&&t.push("Sitteunderlag")),j(e)&&(t.push("Ladekabler","Bok","H\xe5ndkle"),(0,T.Kj)(e)||t.push("Powerbank"),e.overnatting.includes(f.gu.FamilieHytte)&&t.push("Hytten\xf8kkel"),e.overnatting.includes(f.gu.DNThytte)&&t.push("DNT-n\xf8kkel"),e.overnatting.includes(f.gu.HusHotell)&&t.push("Br\xf8dristerpose")),e.aktiviteter.includes(f.uG.Bytur)&&(t.push("Paraply"),e.kjønn!==f.$3.Mann&&t.push("H\xe5ndveske")),(e.aktiviteter.includes(f.uG.Skøyteski)||e.aktiviteter.includes(f.uG.Langrenn)||e.aktiviteter.includes(f.uG.Jogging)||e.aktiviteter.includes(f.uG.Sykkel))&&t.push("Treningssekk"),(0,S.nV)(e)&&t.push("Biotex"),e.aktiviteter.includes(f.uG.Bortekontor)&&(t.push("PC og ladekabel"),t.push("Mus og usb-dings")),y(t,f.$P.Div)},function(e){let t=[];return x(e)&&t.push("Vindsekk"),(x(e)||(0,T.ij)(e))&&t.push("Liggeunderlag","Sovepose"),(0,T.ij)(e)&&t.push("Primus","Kokesaker","S\xf8ppelpose"),e.overnatting.includes(f.gu.Telt)&&t.push("Telt","V\xe5tservietter"),e.overnatting.includes(f.gu.Hengekøye)&&t.push("Hengek\xf8ye","Hengek\xf8yeoppheng","Tarp","Myggnetting","V\xe5tservietter"),e.overnatting.includes(f.gu.DNThytte)&&t.push("Lakenpose","S\xf8ppelpose"),(0,T.kt)(e.overnatting)&&t.push("T\xf8fler/Innesko"),y(t,f.$P.Overnatting)},function(e){return[f.uG.Randonée,f.uG.Fjellski].some(t=>e.aktiviteter.includes(t))?y(["Skreds\xf8ker","S\xf8kestang","Spade"],f.$P.TekniskUtstyr):[]},function(e){let t=[],n=e.aktiviteter.includes(f.uG.Langrenn),r=e.aktiviteter.includes(f.uG.Fjellski),i=e.aktiviteter.includes(f.uG.Randonée),a=e.aktiviteter.includes(f.uG.Skøyteski);return(n||r||i||a)&&(t.push("Ski","Skistaver","Skisko"),e.idaBehov&&t.push("Varme s\xe5ler")),(n||r)&&t.push("Sm\xf8ring"),r&&(t.push("Kortfeller"),t.push("Langfeller")),i&&(t.push("Feller"),t.push("Skarejern","Skibriller","Hjelm")),y(t,f.$P.Ski)},function(e){let t=[];return b(e.aktiviteter,[f.uG.Sportsklatring,f.uG.Tradklatring,f.uG.ViaFerrata])&&t.push("Klatresele","Hjelm"),b(e.aktiviteter,[f.uG.Sportsklatring,f.uG.Tradklatring])&&t.push("Tau","Taubrems","Kalkpose","Klatresko","Walkie-talkie"),b(e.aktiviteter,[f.uG.Sportsklatring])&&t.push("Kortslynger","Sikringsbriller"),b(e.aktiviteter,[f.uG.Tradklatring])&&t.push("Kiler, kamkiler","Kortslynger","Diverse slynger","Bailetau","Diverse karabiner","N\xf8ttepirker","Prusiker"),b(e.aktiviteter,[f.uG.ViaFerrata])&&t.push("Via ferrata kit"),y(t,f.$P.TekniskUtstyr)},function(e){let t=[];return[f.uG.Fottur,f.uG.Tinderangling].some(t=>e.aktiviteter.includes(t))?(t.push("Fjellsko"),t.push("Regntrekk til sekk"),t.push("Staver"),e.idaBehov&&t.push("Gamasjer"),y(t,f.$P.TekniskUtstyr)):[]},function(e){let t=[];return e.idaBehov&&((0,I.pg)(e.aktiviteter)&&t.push("Hoftegnags\xe5rbeskytter"),(0,T.kt)(e.overnatting)&&e.sesong===f.wr.Vinter&&t.push("Termos"),(0,I.eW)(e.aktiviteter)&&e.sesong===f.wr.Vinter&&t.push("Varmeposer"),e.aktiviteter.includes(f.uG.Jogging)&&t.push("L\xf8pebelte")),y(t,f.$P.Div)},function(e){return e.aktiviteter.includes(f.uG.Kajakk)?y(["V\xe5tdrakt","V\xe5tsko","T\xf8rt skift","Pakkposer","Padle\xe5re","Kajakk","Redningsvest","Spruttrekk"],f.$P.Kajakk):[]},function(e){return e.aktiviteter.includes(f.uG.Sykkel)?y(["Sykkelhjelm","Sykkelveske","Lappesaker","Sykkelsko"],f.$P.Sykkel):[]}],V=(e,t)=>e.navn>t.navn?1:-1,C=i.Ay.div.withConfig({componentId:"sc-c6adb618-0"})(["--progress:",";grid-area:koffert;position:relative;font-size:clamp(0.5rem,2.5vw,1.25rem);height:7em;width:9em;justify-self:end;"],e=>e.$progress+"%"),P="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 87.512 66.141'%3E%3Cpath d='M2.086 65.406C-.04 64.211.09 66.018.166 38.626.233 14.755.245 14.27.763 13.56c.98-1.34 2.355-1.79 5.474-1.79h2.792l.138-1.222c.095-.842.353-1.437.833-1.918.662-.663.85-.7 3.888-.785 4.412-.123 5.256.27 5.52 2.566l.14 1.227 5.359.038 5.357.037V7.438c0-4.908.235-5.691 2.012-6.71C33.295.144 33.432.137 43.718.133 55.227.128 55.337.143 56.53 1.815c.546.766.596 1.166.673 5.396l.083 4.57 5.34-.072 5.342-.071.14-1.227c.265-2.297 1.109-2.689 5.52-2.566 3.04.084 3.226.122 3.888.785.48.48.739 1.076.834 1.918l.138 1.222h2.834c2.439 0 2.993.084 3.973.602.672.355 1.34.978 1.632 1.521.474.882.491 1.927.425 25.261l-.07 24.342-.59.827c-1.294 1.814 1.948 1.687-42.974 1.682l-40.573-.004zM6.187 38.89V14.15H5.016c-2.174 0-2.004-2.12-2.004 24.877 0 27.057-.206 24.576 2.05 24.592l1.125.008zm72.496 0V14.15H8.833V63.628h69.85zm5.31 24.465c.5-.268.511-.818.511-24.323 0-27.001.17-24.88-2.003-24.88h-1.172v49.476h1.076c.591 0 1.306-.123 1.587-.273zM16.77 10.976v-.793H12.009V11.77H16.77zm37.592-1.918c.04-5.07-.021-5.864-.483-6.218-.56-.427-19.402-.48-20.193-.056-.475.253-.512.594-.512 4.63v4.356h21.167zm21.145 1.918v-.793h-4.762V11.77h4.762z' stroke='%23000' stroke-width='.265'/%3E%3C/svg%3E\")",H=i.Ay.i.withConfig({componentId:"sc-c6adb618-1"})(["background:linear-gradient( to top,#137113 0%,#137113 var(--progress),#30ff0d var(--progress),#30ff0d 100% ) no-repeat;display:inline-block;width:100%;height:100%;mask:"," no-repeat 50% 50%;-webkit-mask:"," no-repeat 50% 50%;-webkit-mask-size:cover;mask-size:cover;"],P,P),A=i.Ay.span.withConfig({componentId:"sc-c6adb618-2"})(["left:51%;top:58%;transform:translate(-50%,-50%);position:absolute;font-size:1.8em;"]),B=function(e){return(0,r.jsxs)(C,{$progress:e.progress,children:[(0,r.jsx)(H,{}),(0,r.jsxs)(A,{children:[e.progress,"%"]})]})},F=i.Ay.div.withConfig({componentId:"sc-41def00a-0"})(["color:#e8e862;grid-area:warning;strong{font-size:1.2rem;letter-spacing:1px;}"]),$=(0,i.Ay)(s.A).withConfig({componentId:"sc-41def00a-1"})(["display:block;margin-top:1rem;"]),D=e=>{let t=e.alleElementer.map(e=>e.navn).concat(e.ekstraItems),n=e.checked.filter(e=>!t.includes(e));return 0===n.length?null:(0,r.jsxs)(F,{children:[(0,r.jsx)("strong",{children:"NB!"}),(0,r.jsx)("span",{children:"Fant noen ting som er markert som pakket, men de finnes ikke lenger i n\xe5v\xe6rende pakkeliste:"}),(0,r.jsx)("ul",{children:n.map(e=>(0,r.jsx)("li",{children:e}))}),(0,r.jsx)("span",{children:"Hvis du ikke fjerner de vil du f\xe5 over 100% pakket n\xe5r du har pakket alt. Vil du fjerne de fra local storage s\xe5 det blir riktig?"}),(0,r.jsx)($,{onClick:()=>{e.removeItems(n)},children:"JA, FJERN! \uD83E\uDD73"})]})};var K=n(4420);let M=i.Ay.div.withConfig({componentId:"sc-33ebe39a-0"})(["grid-area:valg;ul{list-style:circle;margin:0.5rem 1.5rem;padding:0;}display:flex;flex-wrap:wrap;font-weight:600;@media (max-width:768px){margin-top:1rem;padding:0;ul{margin:0.5rem 1rem;}}"]),E=function(e){return(0,r.jsxs)(M,{children:[(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:f.wr[e.valg.sesong]}),(0,r.jsx)("li",{children:(0,K.Y)(e.valg.kjønn)}),j(e.valg)&&(0,r.jsxs)("li",{children:[e.valg.lengde," dager"]}),e.valg.idaBehov&&(0,r.jsx)("li",{children:"Ida sine s\xe6re ting"})]}),(0,r.jsx)("ul",{children:e.valg.aktiviteter.map(e=>(0,r.jsx)("li",{children:f.uG[e]},e))}),(0,r.jsx)("ul",{children:e.valg.overnatting.map(e=>(0,r.jsx)("li",{children:(0,T.o2)(e)},e))})]})};var z=n(3739),L=n(3146),N=n(5489);let _=i.Ay.div.withConfig({componentId:"sc-4f8a981f-0"})(['min-height:100vh;padding:2em;border:0.2em white solid;border-radius:1rem;background-color:#333;display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr auto;align-items:start;grid-gap:4rem;grid-template-areas:"header valg koffert" "warning warning warning" "liste liste liste" "knapper knapper knapper";@media (max-width:','){grid-template-columns:auto 1fr;grid-template-rows:auto 1fr;grid-gap:3rem 1rem;grid-template-areas:"header koffert" "warning warning" "valg valg " "liste liste" "knapper knapper";}'],"1000px"),U=i.Ay.h1.withConfig({componentId:"sc-4f8a981f-1"})(["margin-top:0;margin-bottom:1.5rem;"]),R=i.Ay.ul.withConfig({componentId:"sc-4f8a981f-2"})(["margin:0;> li{margin-right:3em;@media (max-width:","){margin-right:1em;}}grid-area:liste;display:flex;flex-flow:row wrap;list-style-type:none;padding-left:0;"],a),J=function(){var e,t,n,i;let a;let{valg:s,listeNavn:l,feilmelding:o}=(0,L.K)(),{list:u,updateList:d}=(0,N.U)(l,s),g=(n=G.flatMap(e=>e(s)).sort(V),a=[],n.forEach(e=>{let t=a.find(t=>t.navn===e.navn&&t.kategori===e.kategori);t?t.antall=t.antall>e.antall?t.antall:e.antall:a.push(e)}),a),h=(0,r.jsx)(z.A,{href:"/?"+(0,L.T)(s,l),children:"Tilbake"});if(o)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:o}),h]});let m=(i=e=>f.$P[e.kategori],g.reduce((e,t)=>{let n=i(t),r=e.findIndex(e=>e.category===n);return r>=0?e[r].items.push(t):e.push({category:n,items:[t]}),e},[])),p=u?Math.floor(100*u.checked.length/(g.length+u.ekstraItems.length)):0,j=e=>{var t;let n=null!==(t=u.checked)&&void 0!==t?t:[];d({checked:n.includes(e)?n.filter(t=>t!==e):[...n,e]})},x=e=>d({checked:[...u.checked,...e]}),y=e=>d({checked:u.checked.filter(t=>!e.includes(t))});return(0,r.jsxs)(_,{children:[(0,r.jsxs)("div",{style:{gridArea:"header"},children:[(0,r.jsxs)(U,{children:["Pakker ",l&&"'".concat(l,"'")]}),h]}),(0,r.jsx)(E,{valg:s}),(0,r.jsx)(B,{progress:p}),(0,r.jsx)(D,{ekstraItems:u.ekstraItems,checked:u.checked,alleElementer:g,removeItems:y}),(0,r.jsxs)(R,{children:[m.map(e=>{var t;return(0,r.jsx)("li",{children:(0,r.jsx)(c,{kategori:e,checkedItems:null!==(t=null==u?void 0:u.checked)&&void 0!==t?t:[],toggleItem:j,setItems:x,removeItems:y})},e.category)}),(0,r.jsx)("li",{children:(0,r.jsx)(v,{checkedItems:null!==(e=null==u?void 0:u.checked)&&void 0!==e?e:[],ekstraTing:null!==(t=null==u?void 0:u.ekstraItems)&&void 0!==t?t:[],toggleItem:j,setItems:x,removeItems:y,toggleExtraItem:e=>{var t;let n=null!==(t=null==u?void 0:u.ekstraItems)&&void 0!==t?t:[];d({ekstraItems:n.includes(e)?n.filter(t=>t!==e):[...n,e]})}})})]}),(0,r.jsx)(k,{navn:l,clearPakkestatus:()=>d({checked:[]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[106,95,636,593,792],()=>t(5310)),_N_E=e.O()}]);
//# sourceMappingURL=pakk-454d52eab36b378c.js.map