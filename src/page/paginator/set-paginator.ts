import { createInitialPaginator } from "./generate-paginator";

const paginator = document.querySelector('.pagination');

export const setPaginator = ( page:number = 1 ) => {
    const ulItem = document.querySelector('.pagination-list');
    if( ulItem ){
        ulItem.remove();
    }
    const itemsPaginator:HTMLElement = createInitialPaginator(page);
    paginator?.appendChild(itemsPaginator);
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