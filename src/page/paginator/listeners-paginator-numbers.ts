import { getCharactersPerPages } from "../../services/characters/get-characters-per-pages";
import { clearCards } from "../cards/clear-cards";
import { loadCards } from "../cards/load-cards";
import { setPaginator } from "./set-paginator";

export const listenerPaginatorNumbers = () => {
    const paginatorsLinks = document.querySelectorAll('.pagination-link:not(.is-current)');
    paginatorsLinks.forEach( ( linkNumber:Element ) => {
        linkNumber.addEventListener( 'click', async () => {
            const currentPage = Number(linkNumber.textContent);
            const response = await getCharactersPerPages(currentPage);
            const oldPage = response.info.pages;
            setPaginator(currentPage, oldPage);
            clearCards();
            loadCards(response.results);
        } )
    } )
}
