import { updateModal } from "./modals";

function createCocktailCard(drink) {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'mt-3');

    const card = document.createElement('div');
    card.classList.add('card');
    cardWrapper.appendChild(card);

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top');
    card.appendChild(cardImg);
    cardImg.src = drink.strDrinkThumb;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardBody.appendChild(cardTitle);
    cardTitle.innerHTML = drink.strDrink;

    const cardSubtitle = document.createElement('h6');
    cardSubtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
    cardBody.appendChild(cardSubtitle);
    cardSubtitle.innerHTML = drink.strCategory;

    const listOfIngredientsWrapper = document.createElement('ul');
    listOfIngredientsWrapper.classList.add('list-group', 'list-group-flush');
    cardBody.appendChild(listOfIngredientsWrapper);

    drink.ingredients.forEach((ingredient) => {
        const ingredientListItem = document.createElement('li');
        ingredientListItem.classList.add('px-0', 'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        ingredientListItem.innerHTML = `${ingredient[0]}`

        if (ingredient[1] !== null) {
            ingredientListItem.innerHTML += `<span class="badge bg-dark rounded-pill">${ingredient[1]}</span>`;
        }

        listOfIngredientsWrapper.appendChild(ingredientListItem);
    })

    return cardWrapper;
}

export function printCards(drinks) {
    const cocktailsWrapper = document.querySelector('.row');
    cocktailsWrapper.innerHTML = '';

    drinks.forEach((drink) => {
        const card = createCocktailCard(drink);

        card.addEventListener('click', () => {
            updateModal(drink);
        })

        cocktailsWrapper.appendChild(card);
    })
}