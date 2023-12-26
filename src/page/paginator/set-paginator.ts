import { createInitialPaginator } from "./generate-paginator";

const paginator = document.querySelector('.pagination');

const _clearPaginator = () => {
    const ulItem = document.querySelector('.pagination-list');
    if( ulItem ){
        ulItem.remove();
    }
};

export const setPaginator = ( page:number = 1 ) => {
    let itemsPaginator:HTMLElement;
    if( page > 0 && page <= 4 ){
        _clearPaginator();
        itemsPaginator = createInitialPaginator(page);
        paginator?.appendChild(itemsPaginator);
    }
    console.log(page);    
    return page;
}

const _listtenerButtonNext = () => {
    const buttonNext = document.querySelector('.pagination-next');
    buttonNext?.addEventListener( 'click', () => {
        const currentElement = document.querySelector('.is-current');
        const nextPage = Number(currentElement?.textContent) + 1;
        setPaginator(nextPage);
    })
};

const _listtenerButtonPrev = () => {
    const buttonPrev = document.querySelector('.pagination-previous');
    buttonPrev?.addEventListener( 'click', () => {
        const currentElement = document.querySelector('.is-current');
        const prevPage = Number(currentElement?.textContent) - 1;
        setPaginator(prevPage);
    } )
};

const _setListeners = () => {
    _listtenerButtonNext();
    _listtenerButtonPrev();
};
_setListeners();