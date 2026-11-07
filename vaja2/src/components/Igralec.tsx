// import React, { useContext } from "react";
// import type { Ekipa } from "../models/Ekipa";
// import {useEkipa} from "./Telo";
import type { Igralec } from "../models/Oseba";

interface igralecProps{
    igralec: Igralec
}

export function Igralec(igralec : igralecProps){
    // const ekipa = useEkipa();

 
    

    return(
        
        <li className="igralec">    
            [{igralec.igralec.id}] {igralec.igralec.ime} {igralec.igralec.priimek}, {igralec.igralec.visina} cm, {igralec.igralec.teza} kg, poškodovan: {igralec.igralec.poskodovan ? "da" : "ne"}
        </li>
        
    )
}

// export default Igralec;
