import { loadCards } from './page/load-cards';
import { getAllCharacters } from './services/characters/get-all-characters';
import './style.css'


const main = async () => {
  const { results:characters} = await getAllCharacters();
  loadCards( characters );
}

main()