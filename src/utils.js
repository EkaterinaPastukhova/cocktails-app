export function formatIngredients(drinks) {
    return drinks.map((drink) => {
        const formattedIngredients = [];

        for (let i = 1; i <= 15; i++) {
            if (drink['strIngredient' + i]) {
                formattedIngredients.push([
                    drink['strIngredient' + i],
                    drink['strMeasure' + i]
                ])
            }
        }

        return {
            ...drink,
            ingredients: formattedIngredients
        }
    })
}