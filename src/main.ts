import { clearCards } from './page/cards/clear-cards';
import { loadCards } from './page/cards/load-cards';
import { setPaginator } from './page/paginator/set-paginator';
import { getCharactersPerPages } from './services/characters/get-characters-per-pages';
import './style.css'

let oldPage:number;

const main = async ():Promise<void> => {
  const response = await getCharactersPerPages();
  oldPage = response.info.pages;
  console.log(response);
  setPaginator(1, oldPage)
  loadCards( response.results );
}

main();

const _listtenerButtonNext = () => {
  const buttonNext = document.querySelector('.pagination-next');
  buttonNext?.addEventListener( 'click', async () => {
      const currentElement = document.querySelector('.is-current');
      const nextPage = Number(currentElement?.textContent) + 1;
      const currentPage = nextPage > oldPage ? oldPage : nextPage;
      setPaginator(currentPage, oldPage);
      const response = await getCharactersPerPages(currentPage);
      oldPage = response.info.pages;
      clearCards();
      loadCards( response.results );
  })
};

const _listtenerButtonPrev = () => {
  const buttonPrev = document.querySelector('.pagination-previous');
  buttonPrev?.addEventListener( 'click', async () => {
      const currentElement = document.querySelector('.is-current');
      const prevPage = Number(currentElement?.textContent) - 1;
      const currentPage = prevPage < 1 ? 1 : prevPage;
      setPaginator(currentPage, oldPage);
      const response = await getCharactersPerPages(currentPage);
      oldPage = response.info.pages;
      clearCards();
      loadCards( response.results );
  } )
};

const _setListeners = () => {
  _listtenerButtonNext();
  _listtenerButtonPrev();
};
_setListeners();