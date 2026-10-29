import React from "react";
import { useState } from 'react';
import type { Ekipa } from "../models/Ekipa";

interface ekipaProps{
    ekipa: Ekipa
}

function Menu({ekipa} : ekipaProps){

    return(
        <div>
            <h1>
                {ekipa.ime}
            </h1>
        </div>
    )

}

export default Menu;