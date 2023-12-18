import { baseUrl } from '../base';

export const getAllCharacters = async () => {
    const response = await fetch(`${baseUrl}character`);
    const allCharactersData = await response.json();
    return allCharactersData;
}