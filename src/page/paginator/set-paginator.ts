import { createInitialPaginator } from "./generate-paginator";

let currentPage:number = 1;

const paginator = document.querySelector('.pagination');
console.log('pagination', paginator);


export const setPaginator = ( page:number = 1 ) => {
    
    const itemsPaginator:HTMLElement = createInitialPaginator(currentPage);
    paginator?.appendChild(itemsPaginator);

}

