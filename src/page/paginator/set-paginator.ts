import { createInitialPaginator, generateFinalPaginator, generateStandarPaginator } from "./generate-paginator";
import { listenerPaginatorNumbers } from "./listeners-paginator-numbers";

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
        listenerPaginatorNumbers();
    };

    if( page > 5 && page <= (oldPage - 5) ){
        _clearPaginator();
        itemsPaginator = generateStandarPaginator(page, oldPage);
        paginator?.appendChild(itemsPaginator);
        listenerPaginatorNumbers();
    }
    
    if( page <= oldPage && page > (oldPage - 5) ){
        _clearPaginator();
        itemsPaginator = generateFinalPaginator(page, oldPage);
        paginator?.appendChild(itemsPaginator);
        listenerPaginatorNumbers();
    }
}

