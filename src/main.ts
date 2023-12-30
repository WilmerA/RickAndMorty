import { loadCards } from './page/cards/load-cards';
import { setListenersPaginator } from './page/paginator/listeners-paginator-butons';
import { setPaginator } from './page/paginator/set-paginator';
import { getCharactersPerPages } from './services/characters/get-characters-per-pages';
import './style.css';

let oldPage:number;

const main = async ():Promise<void> => {
  const response = await getCharactersPerPages();
  oldPage = response.info.pages;
  console.log(response);
  setPaginator(1, oldPage)
  loadCards( response.results );
  setListenersPaginator();
}

main();

