import { Icharacters } from '../../interfaces/data.interface';
import { baseUrl } from '../base';

export const getAllCharacters = async ():Promise<Icharacters> => {
    const response = await fetch(`${baseUrl}character`);
    const allCharactersData = await response.json();
    return allCharactersData;
}