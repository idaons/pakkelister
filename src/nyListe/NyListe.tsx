import * as React from 'react';
import  { useState } from 'react';
import classes from './NyListe.less';

const aktivitetsListeSommer=["Klatring", "Fottur", "Tinderangling", "Jogging"];
const aktivitetsListeVinter=["Randonée", "Fjellski", "Langrenn klassisk", "Skøyteski"];
const aktivitetsListeAnnet=["Fest", "Bytur"];
const kjønnListe=["Mann", "Kvinne", "Begge", "Vil ikke oppgi"]
const overnattingsListe=["DNT-hytte", "Telt", "Hus/hotell"];

export default function NyListe(){
    const [sesong, setSesong] = useState<string>();
    const [aktiviteter, setAktiviteter] = useState<string[]>([]);
    const [overnatting, setOvernatting] = useState<string>();
    const [kjønn, setKjønn] = useState<string>();


    const onAktivitetCheckbox = (e: any) => {
        if(e.target.checked){
            setAktiviteter([
                ...aktiviteter,
                e.target.value
            ]);
        } else {
            setAktiviteter(aktiviteter.filter((a) => a !== e.target.value))
        }
    };

   return (
       <>
           <h1>Ny Liste</h1>
           <h2>Sesong</h2>
           <div className={classes.valgGruppe}>
               <label>
                   <input
                       type="radio"
                       value="sommer"
                       checked={sesong === 'sommer'}
                       onChange={(e) => setSesong(e.target.value)}
                   />
                   Sommer
               </label>
               <label>
                   <input
                       type="radio"
                       value="vinter"
                       checked={sesong === 'vinter'}
                       onChange={(e) => setSesong(e.target.value)}
                   />
                   Vinter
               </label>
           </div>
           <h2>Aktiviteter</h2>
           <div className={classes.valgGruppe}>

           {aktivitetsListeSommer.concat(aktivitetsListeVinter).concat(aktivitetsListeAnnet).map((a) => {
               return (
                   <label key={a}>
                       <input
                           type="checkbox"
                           value={a}
                           checked={aktiviteter.includes(a)}
                           onChange={onAktivitetCheckbox}
                       />
                           {a}
                   </label>
               );
           })  }
           </div>
           <h2>Overnatting</h2>
           <div className={classes.valgGruppe}>
           {overnattingsListe.map((o) => {
               return (
                   <label key={o}>
                       <input
                           type="radio"
                           value={o}
                           checked={overnatting === o}
                           onChange={(e) => setKjønn(e.target.value)}
                       />
                       {o}
                   </label>
               );
           })
           }
           </div>
           <h2>Kjønn</h2>
           <div className={classes.valgGruppe}>
           {kjønnListe.map((k) => {
               return (
                   <label key={k}>
                       <input
                           type="radio"
                           value={k}
                           checked={kjønn === k}
                           onChange={(e) => setOvernatting(e.target.value)}
                       />
                       {k}
                   </label>
               );
           })
           }
           </div>
           <button className={classes.opprett}>Opprett liste</button>
       </>
   )
}