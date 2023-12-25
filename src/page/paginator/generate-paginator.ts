

const generateLuItem = ():HTMLElement => {
    const luItem:HTMLElement = document.createElement('lu');
    luItem.classList.add('pagination-list');
    return luItem;
}

const generateLiItem = ( page:number, current:boolean = false  ):HTMLElement => {
    const liItem = document.createElement('li');
    const aItem = document.createElement('a');
    const isCurrent = current === true ? 'is-current' : '';
    aItem.classList.add('pagination-link', isCurrent);
    aItem.setAttribute('aria-label', `Go to page ${page}`)
    aItem.textContent = `${page}`;
    liItem.appendChild(aItem);
    return liItem;
}

const generateElipsisItem = ():HTMLElement => {
    const liItem = document.createElement('li');
    const spanItem = document.createElement('span');
    spanItem.classList.add('pagination-ellipsis');
    spanItem.textContent = '&hellip;';
    liItem.appendChild(spanItem);
    return liItem;
}