import type {Funkcionar,Igralec} from "./Oseba";
import React from "react";
import { useState } from "react";

export class Ekipa {
    ime: string ;
    letoUstanovitve: number ;
    direktor: Funkcionar ;
    trener: Funkcionar ;
    igralci: Igralec[] ;

    constructor(
        ime: string ,
        letoUstanovitve: number ,
        direktor: Funkcionar ,
        trener: Funkcionar ,
        igralci: Igralec[])
    {
        this.ime = ime;
        this.letoUstanovitve = letoUstanovitve ;
        this.direktor = direktor ;
        this.trener = trener;
        this.igralci = igralci;
    }

    dodajIgralca(igralec: Igralec): void{
        // this.igralci.push(igralec);

    }

    posodobiIgralca(novi_igralec: Igralec, id: number): void{
        const i = this.igralci.findIndex(item => item.id === id)
        if(i === -1){
            console.log(`Igralec ${id} ne obstaja`)
            return
        }
        this.igralci[i] = novi_igralec;
    }

    odstraniIgralca(id: number): void{
        const i = this.igralci.findIndex(item => item.id === id)
        if(i === -1){
            console.log(`Igralec ${id} ne obstaja`)
            return
        }
        this.igralci.splice(i,1);
    }

    izpisiPodatke(): string{

        const fun = (x:Funkcionar) => `${x.ime} ${x.priimek} (${x.vloga}, veljavnost do ${x.veljavnost})`

        const igralciIzpis = this.igralci
            .map(i => `  - [${i.id}] ${i.ime} ${i.priimek}, ${i.visina} cm, ${i.teza} kg, poškodovan: ${i.poskodovan ? "da" : "ne"}`)
            .join("\n");

        return "ime: "+this.ime
        +"\nletoUstanovitve: "+ this.letoUstanovitve 
        +"\ndirekto: "+ fun(this.direktor) 
        +"\ntrener: "+ fun(this.trener) 
        +"\nigralci "+ igralciIzpis
    }
}