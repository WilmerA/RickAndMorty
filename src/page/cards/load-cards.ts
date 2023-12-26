import { ICharacter } from "../../interfaces/data.interface";
import { generateCard } from "./generate-card";

export const loadCards = ( characters:ICharacter[] ) => {
    const containerCards = document.querySelector('#container-cards');
    characters.forEach( ( character:ICharacter ) => {
        const divContentCard:HTMLDivElement = document.createElement('div');
        divContentCard.setAttribute('id', 'content-card');
        const card:string = generateCard( 
            character.name, 
            character.image, 
            character.species, 
            character.status, 
            character.origin.name );
        divContentCard.innerHTML = card;
        containerCards?.appendChild( divContentCard );
    } )
};