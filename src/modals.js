export function updateModal(drink) {
    const modal = new window.bootstrap.Modal(document.getElementById('modal'));
    modal.toggle();

    const cocktailName = document.getElementById('modalLabel');
    cocktailName.innerHTML = drink.strDrink;

    const cocktailImg = document.getElementById('modal-img');
    cocktailImg.classList.add('img-fluid', 'w-100')
    cocktailImg.src = drink.strDrinkThumb;

    const cocktailCategory = document.querySelector('.modal-subtitle');
    cocktailCategory.innerHTML = drink.strCategory;

    const cocktailGlass = document.querySelector('.modal-subtitle-secondary');
    cocktailGlass.innerHTML = drink.strGlass;

    const cocktailInstruction = document.querySelector('.modal-description');
    cocktailInstruction.innerHTML = drink.strInstructions;

    const ingredientListWrapper = document.querySelector('.modal .list-group');
    ingredientListWrapper.innerHTML = '';

    drink.ingredients.forEach((ingredient) => {
        const listItem = document.createElement('li');

        listItem.classList.add('list-group-item');
        listItem.innerHTML = `<h6 class="mb-0 mt-2">${ingredient[0]}</h6>`;

        if (ingredient[1] !== null) {
            listItem.innerHTML += `<small>${ingredient[1]}</small>`;
        }

        ingredientListWrapper.appendChild(listItem);
    });
}