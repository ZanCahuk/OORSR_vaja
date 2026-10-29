import {Ekipa} from "./Ekipa"
import type { Igralec,Funkcionar } from "./Oseba"


const direktor: Funkcionar = {
    id: 1, ime: "Marko", priimek: "Zelvak", letoRojstva: 1967, krajRojstva : "Murska Sobota", vloga: "Direktor", veljavnost: 2031
};


const trener: Funkcionar = {
    id: 2, ime: "Janez", priimek: "Kovač", letoRojstva: 1978,
    vloga: "Trener", veljavnost: 2027
};


export const ekipa = new Ekipa("NK Drava", 1919, direktor, trener, []);


const igralec1: Igralec = {
    id: 10, ime: "Luka", priimek: "Horvat", letoRojstva: 2000,
    visina: 182, teza: 76, poskodovan: false
};
const igralec2: Igralec = {
    id: 11, ime: "Nejc", priimek: "Zupan", letoRojstva: 1998,
    krajRojstva: "Celje", visina: 190, teza: 84, poskodovan: true
};
const igralec3: Igralec = {
    id: 12, ime: "Tim", priimek: "Breznik", letoRojstva: 2002,
    visina: 176, teza: 70, poskodovan: false
};


ekipa.dodajIgralca(igralec1);
ekipa.dodajIgralca(igralec2);
ekipa.dodajIgralca(igralec3);


// ekipa.posodobiIgralca({ ...igralec2, teza: 86, poskodovan: false }, 11);
// ekipa.odstraniIgralca(12);


// console.log(ekipa.izpisiPodatke());