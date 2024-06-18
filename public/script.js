//establish the form submission where user will input the details of their smoothie
//load html and create addSmoothie and pastSmoothie variables that are linked to the corresponding Id sections in the html
document.addEventListener('DOMContentLoaded', () => {
    const addSmoothie = document.getElementById('addSmoothie');
    const pastSmoothies = document.getElementById('pastSmoothies');

//add an event listener for when the user submits/adds their smoothie for the form to reset itself and for the smoothie to be added to the past smoothies section
//added a preventDeafult to stop the page from reloading after user submits the form source: https://www.quora.com/How-do-you-prevent-a-page-reload-in-JavaScript#:~:text=preventDefault()%20to%20prevent%20a%20form%20from%20refreshing%20the%20page%20when%20submitted.&text=You%20can%20add%20an%20event,preventDefault)%20property%20to%20the%20event.
addSmoothie.addEventListener('submit', (event) => {
    event.preventDefault();
    
    //create date, ingredients and cost variables 
    const date = document.getElementById('date').value;
    const ingredients = document.getElementById('ingredients').value.split(', ');
    //used parseFloat to get numerical values from string input
    const cost = parseFloat(document.getElementById('cost').value);
    
    //created the smoothie variable that is made up with the variables the user will input
    const smoothie = {
        ingredients, date, cost
    };
    
    //call addSmoothieToList function where the smoothie will be added to the past smoothies section
    addSmoothieToList(smoothie);
    //reset the form 
    addSmoothie.reset();
    });


//create function that will add the smoothie details user will input into a section where the user can see and track
function addSmoothieToList(smoothie) {
    //create a list using the smoothies the user has added so user can use this information to compare and track details of the smoothies they have inputted
    const smoothiesAdded = document.createElement('li');
    
    //create and format the information variables
    const dateDiv = document.createElement('div');
    dateDiv.textContent = `Date: ${smoothie.date}`;
    
    const ingredientsDiv = document.createElement('div');
    ingredientsDiv.textContent = `${smoothie.ingredients.join(', ')}`;
    
    const costDiv = document.createElement('div');
    costDiv.textContent = `Cost: $${smoothie.cost}`;
    
    //add this information to the smoothiesAdded variable that will be under one dot point in the list element created
    smoothiesAdded.appendChild(ingredientsDiv);
    smoothiesAdded.appendChild(dateDiv);
    smoothiesAdded.appendChild(costDiv);
    
    //add smoothie
    pastSmoothies.appendChild(smoothiesAdded);
    }
});