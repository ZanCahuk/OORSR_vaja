import React, { createContext, useContext } from "react";
import type { Ekipa } from "../models/Ekipa";
import Igralec from "./Igralec";
import { ekipa } from "../models/data";

interface ekipaProps{
    ekipa: Ekipa
}

    const context = createContext(ekipa)

export function Telo({ekipa}:ekipaProps ){

    

    return(
        <context.Provider value={ekipa} >
                <Igralec /> 
        </context.Provider>
    )
}

export function useEkipa(){
    return useContext(context)
};
