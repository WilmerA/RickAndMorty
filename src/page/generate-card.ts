
export const generateCard = ( name:string, urlImage:string, specie:string ):string => {
    return `
    <div id="content-card">
        <div class="card">
            <div class="card-image">
            <figure class="image is-4by3">
                <img src="${urlImage}" alt="${name}">
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
                <div class="media-content">
                <p class="title is-4">${name}</p>
                <p class="subtitle is-6">${specie}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    `
}