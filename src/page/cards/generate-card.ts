
export const generateCard = (name: string, urlImage: string, specie: string, status: string, origin:string): string => {
    const statusClass:string = _generateStatus(status)
    return `
        <div class="card">
            <div class="card-image">
            <figure class="image is-4by3">
                <img src="${urlImage}" alt="${name}">
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
            <div class="media-content">
                    <div class="status ${statusClass}">${status}</div>
                    <p class="title is-4">${name}</p>
                    <p class="subtitle is-6">${specie}  -  ${origin}</p>
                </div>
            </div>
            </div>
        </div>
    `
};

const _generateStatus = (status: string):string => {
    let statusClass:string;
    switch (status) {
        case 'Alive':
            statusClass = 'alive';
            break;
        case 'Dead':
            statusClass = 'dead';
            break;
        default:
            statusClass = 'unknown';
            break;
    }
    return statusClass
};