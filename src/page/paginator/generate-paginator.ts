
export const createInitialPaginator = ( page:number ):HTMLElement => {
    const luItem:HTMLElement = generateLuItem();
    for (let index = 1; index <= 4; index++) {
        if( index === page ){
            const isCurrent:boolean = true;
            const liItem = generateLiItem(index, isCurrent);
            luItem.appendChild(liItem);
            continue;
        }
        const liItem = generateLiItem(index);
        luItem.appendChild(liItem);
    }
    const elipsis = generateElipsisItem();
    luItem.appendChild(elipsis);
    const finalItem = generateLiItem(86);
    luItem.appendChild(finalItem);
    return luItem;
}

const generateLuItem = ():HTMLElement => {
    const luItem:HTMLElement = document.createElement('lu');
    luItem.classList.add('pagination-list');
    return luItem;
}

const generateLiItem = ( page:number, current:boolean = false  ):HTMLElement => {
    const liItem = document.createElement('li');
    const aItem = document.createElement('a');
    if( current ){
        aItem.classList.add('is-current');
    }
    aItem.classList.add('pagination-link');
    aItem.setAttribute('aria-label', `Go to page ${page}`)
    aItem.textContent = `${page}`;
    liItem.appendChild(aItem);
    return liItem;
}

const generateElipsisItem = ():HTMLElement => {
    const liItem = document.createElement('li');
    const spanItem = document.createElement('span');
    spanItem.classList.add('pagination-ellipsis');
    spanItem.innerHTML = '&hellip;';
    liItem.appendChild(spanItem);
    return liItem;
}