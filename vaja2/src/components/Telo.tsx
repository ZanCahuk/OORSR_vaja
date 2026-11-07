// import React from "react"
import { createContext, useContext } from "react";
import type { Ekipa } from "../models/Ekipa";
import { Igralec }from "./Igralec";
import { ekipa } from "../models/data";
import { Opozorilo } from "./Opozorilo";
import { Info } from "./Info";

interface ekipaProps{
    ekipa: Ekipa
}

    const context = createContext(ekipa)

export function Telo({ekipa}:ekipaProps ){

    const igralciDol = ekipa.igralci.map( i => 

                <Igralec igralec={i} /> 
            )

    return(
        <context.Provider value={ekipa} >
            <div>
                <h2>Leto ustvarjave: {ekipa.letoUstanovitve}</h2>
                <h3>Diraktor: {ekipa.direktor.ime} {ekipa.direktor.priimek}</h3>
                <h3>Trener: {ekipa.trener.ime} {ekipa.trener.priimek}</h3>
            </div>

            {igralciDol}
            {igralciDol.length < 11 ? <Opozorilo dol={igralciDol.length} /> : <Info dol={igralciDol.length} /> }
            {/* {igralciDol.length < 11 && <Opozorilo dol={igralciDol.length} /> }
            {igralciDol.length > 11 && <Info dol={igralciDol.length} /> } */}

        </context.Provider>
    )
}

export function useEkipa(){
    return useContext(context)
};
