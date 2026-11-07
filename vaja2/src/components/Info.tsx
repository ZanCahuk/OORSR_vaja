// import React, { useContext } from "react";
// import type { Ekipa } from "../models/Ekipa";
// import {useEkipa} from "./Telo";

interface InfoProps{
    dol: number
}

export function Info({dol} : InfoProps){
    // const ekipa = useEkipa();

 
    

    return(
        <div>
            <h1>
                Ekipa ima Dovolj igralcev YaaY ({dol} / 11) 
            </h1>
        </div>
    )
}

// export default Igralec;
