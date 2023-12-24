import { loadCards } from './page/cards/load-cards';
import { getCharactersPerPages } from './services/characters/get-all-characters';
import './style.css'


const main = async () => {
  const { results:characters} = await getCharactersPerPages();
  loadCards( characters );
}

main()