import { ICharacter } from "../interfaces/data.interface";
import { generateCard } from "./generate-card";

export const loadCards = ( character:ICharacter[] ) => {

    const containerCards = document.querySelector('#container-cards');

    character.forEach( ( character:ICharacter ) => {

        const card = generateCard( character.name, character.image, character.species )

        containerCards!.insertAdjacentHTML( 'beforeend', card );
        

    } )

}