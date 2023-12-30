import { getCharactersPerPages } from "../../services/characters/get-characters-per-pages";
import { clearCards } from "../cards/clear-cards";
import { loadCards } from "../cards/load-cards";
import { setPaginator } from "./set-paginator";

let oldPage:number;

const _setOldPage = async() => {
    const response = await getCharactersPerPages(1);
    oldPage = response.info.pages;
}

_setOldPage();

const _listtenerButtonNext = () => {
    const buttonNext = document.querySelector('.pagination-next');
    buttonNext?.addEventListener('click', async () => {
        const currentElement = document.querySelector('.is-current');
        const nextPage = Number(currentElement?.textContent) + 1;
        const currentPage = nextPage > oldPage ? oldPage : nextPage;
        setPaginator(currentPage, oldPage);
        const response = await getCharactersPerPages(currentPage);
        oldPage = response.info.pages;
        clearCards();
        loadCards(response.results);
    })
};

const _listtenerButtonPrev = () => {
    const buttonPrev = document.querySelector('.pagination-previous');
    buttonPrev?.addEventListener('click', async () => {
        const currentElement = document.querySelector('.is-current');
        const prevPage = Number(currentElement?.textContent) - 1;
        const currentPage = prevPage < 1 ? 1 : prevPage;
        setPaginator(currentPage, oldPage);
        const response = await getCharactersPerPages(currentPage);
        oldPage = response.info.pages;
        clearCards();
        loadCards(response.results);
    })
};

export const setListenersPaginator = () => {
    _listtenerButtonNext();
    _listtenerButtonPrev();
};