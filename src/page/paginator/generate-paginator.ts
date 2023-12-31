
export const createInitialPaginator = ( page:number, oldPage:number ):HTMLElement => {
    const luItem:HTMLElement = _generateLuItem();
    for (let index = 1; index <= 5; index++) {
        if( index === page ){
            const isCurrent:boolean = true;
            const liItem = _generateLiItem(index, isCurrent);
            luItem.appendChild(liItem);
            continue;
        }
        const liItem = _generateLiItem(index);
        luItem.appendChild(liItem);
    };
    const elipsis = _generateElipsisItem();
    luItem.appendChild(elipsis);
    const finalItem = _generateLiItem(oldPage);
    luItem.appendChild(finalItem);
    return luItem;
}

export const generateStandarPaginator = ( page:number, oldPage:number ) => {
    const luItem:HTMLElement = _generateLuItem();
    const firstLiItem = _generateLiItem(1);
    luItem.appendChild(firstLiItem);
    const firstElipsis = _generateElipsisItem();
    luItem.appendChild(firstElipsis);
    for (let index = page - 1; index <= (page + 1); index++) {
        if( index === page ){
            const isCurrent:boolean = true;
            const liItem = _generateLiItem(index, isCurrent);
            luItem.appendChild(liItem);
            continue;
        }
        const liItem = _generateLiItem(index);
        luItem.appendChild(liItem);
    };
    const secondElipsis = _generateElipsisItem();
    luItem.appendChild(secondElipsis);
    const finalItem = _generateLiItem(oldPage);
    luItem.appendChild(finalItem);
    return luItem;
};

export const generateFinalPaginator = ( page:number, oldPage:number ) => {
    const luItem:HTMLElement = _generateLuItem();
    const firstLiItem = _generateLiItem(1);
    luItem.appendChild(firstLiItem);
    const elipsis = _generateElipsisItem();
    luItem.appendChild(elipsis);
    for (let index = (oldPage - 4); index <= oldPage; index++) {
        if( index === page ){
            const isCurrent:boolean = true;
            const liItem = _generateLiItem(index, isCurrent);
            luItem.appendChild(liItem);
            continue;
        }
        const liItem = _generateLiItem(index);
        luItem.appendChild(liItem);
    }
    return luItem;
};

const _generateLuItem = ():HTMLElement => {
    const luItem:HTMLElement = document.createElement('lu');
    luItem.classList.add('pagination-list');
    return luItem;
}

const _generateLiItem = ( page:number, current:boolean = false  ):HTMLElement => {
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

const _generateElipsisItem = ():HTMLElement => {
    const liItem = document.createElement('li');
    const spanItem = document.createElement('span');
    spanItem.classList.add('pagination-ellipsis');
    spanItem.innerHTML = '&hellip;';
    liItem.appendChild(spanItem);
    return liItem;
}