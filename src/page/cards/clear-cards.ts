export const clearCards = () => {
    const containerCards = document.querySelector('#container-cards');
    while (containerCards?.firstChild) {
      containerCards.removeChild(containerCards.firstChild);
    }
};