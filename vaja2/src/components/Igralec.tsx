import React, { useContext } from "react";
import type { Ekipa } from "../models/Ekipa";
import {useEkipa} from "./Telo";

// interface ekipaProps{
//     ekipa: Ekipa
// }
function Igralec(){
    const ekipa = useEkipa();

    const igralci = ekipa.igralci.map(
        // i=>
        // <li key={i}>{i}</li>
        )
    

    return(
        <div>
            <h1>{ekipa.letoUstanovitve}</h1>
            <p>TELO</p>
        </div>
    )
}

export default Igralec;
