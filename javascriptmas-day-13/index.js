/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

document.addEventListener('DOMContentLoaded', function () {
    const numInput = document.getElementById('num-input');
    const veggieCheckbox = document.getElementById('vegetarian-input');
    const resultElement = document.getElementById('result');
    const foodElement = document.getElementById('food');
    const calculateButton = document.getElementById('btn');

    calculateButton.addEventListener('click', function () {
        const numGuests = parseInt(numInput.value);
        const isVegetarian = veggieCheckbox.checked;

        let chosenDinner = '';

        if (isVegetarian) {
            chosenDinner = 'Winter Squash Risotto';
        } else if (numGuests <= 4) {
            chosenDinner = 'Ham';
        } else {
            chosenDinner = 'Turkey';
        }

        resultElement.textContent = `Your ideal Christmas dinner is ${chosenDinner}.`;
        foodElement.textContent = chosenDinner;
    });
});



