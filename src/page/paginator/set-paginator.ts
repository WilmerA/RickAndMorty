import { createInitialPaginator, generateFinalPaginator, generateStandarPaginator } from "./generate-paginator";

const paginator = document.querySelector('.pagination');

const _clearPaginator = () => {
    const ulItem = document.querySelector('.pagination-list');
    if( ulItem ){
        ulItem.remove();
    }
};

export const setPaginator = ( page:number = 1, oldPage:number = 20 ) => {
    let itemsPaginator:HTMLElement;
    if( page > 0 && page <= 5 ){
        _clearPaginator();
        itemsPaginator = createInitialPaginator(page, oldPage);
        paginator?.appendChild(itemsPaginator);
    };

    if( page > 5 && page <= (oldPage - 5) ){
        _clearPaginator();
        itemsPaginator = generateStandarPaginator(page, oldPage);
        paginator?.appendChild(itemsPaginator);
    }
    
    if( page <= oldPage && page > (oldPage - 5) ){
        _clearPaginator();
        itemsPaginator = generateFinalPaginator(page, oldPage);
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