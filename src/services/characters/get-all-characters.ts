import { Icharacters } from '../../interfaces/data.interface';
import { baseUrl } from '../base';

export const getAllCharacters = async ( page:number = 1 ):Promise<Icharacters> => {
    const response = await fetch(`${baseUrl}character?page=${page}`);
    const allCharactersData = await response.json();
    return allCharactersData;
}