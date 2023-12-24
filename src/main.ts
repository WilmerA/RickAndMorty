import { loadCards } from './page/cards/load-cards';
import { getCharactersPerPages } from './services/characters/get-characters-per-pages';
import './style.css'


const main = async () => {
  const { results:characters} = await getCharactersPerPages();
  loadCards( characters );
}

main()