// import React, { useContext } from "react";
// import type { Ekipa } from "../models/Ekipa";
// import {useEkipa} from "./Telo";

interface OpozoriloProps{
    dol: number
}

export function Opozorilo({dol} : OpozoriloProps){
    // const ekipa = useEkipa();

 
    

    return(
        <div>
            <h1>
                Ekipa ima premalo igralcev !!! ({dol} / 11) 
            </h1>
        </div>
    )
}

// export default Igralec;
