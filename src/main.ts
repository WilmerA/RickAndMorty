import { loadCards } from './page/cards/load-cards';
import { setPaginator } from './page/paginator/set-paginator';
import { getCharactersPerPages } from './services/characters/get-characters-per-pages';
import './style.css'


const main = async () => {
  const { results:characters} = await getCharactersPerPages();
  loadCards( characters );
  setPaginator()
}

main()