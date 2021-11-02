import './index.css';
import { formatIngredients } from './utils';
import { printCards } from './cards'

const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', (e) => {
    e.preventDefault();

    const searchParameter = document.querySelector('.form-control').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchParameter}`)
        .then((response) => response.json())
        .then(jsonResponse => {
            if (jsonResponse.drinks === null) {
                alert('No cocktails were found');
                return;
            }

            const drinks = formatIngredients(jsonResponse.drinks);

            printCards(drinks);
        })
})
