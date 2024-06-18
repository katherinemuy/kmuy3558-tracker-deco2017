document.addEventListener('DOMContentLoaded', () => {
    const addSmoothie = document.getElementById('addSmoothie');
    const pastSmoothies = document.getElementById('pastSmoothies');

addSmoothie.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const date = document.getElementById('date').value;
    const ingredients = document.getElementById('ingredients').value.split(', ');
    const cost = parseFloat(document.getElementById('cost').value);
    
    const smoothie = {
        date,
        ingredients,
        cost
    };
    
    addSmoothieToList(smoothie);
    addSmoothie.reset();
    });

function addSmoothieToList(smoothie) {
    const smoothiesAdded = document.createElement('li');
    
    const dateDiv = document.createElement('div');
    dateDiv.textContent = `Date: ${smoothie.date}`;
    
    const ingredientsDiv = document.createElement('div');
    ingredientsDiv.textContent = `Ingredients: ${smoothie.ingredients.join(', ')}`;
    
    const costDiv = document.createElement('div');
    costDiv.textContent = `Cost: $${smoothie.cost}`;
    
    smoothiesAdded.appendChild(dateDiv);
    smoothiesAdded.appendChild(ingredientsDiv);
    smoothiesAdded.appendChild(costDiv);
    
    pastSmoothies.appendChild(smoothiesAdded);
    }
});