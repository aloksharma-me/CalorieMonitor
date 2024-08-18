// DONE: get user inputs
// TODO: add meals (show/hide details fields)
// DONE: submit.onclick, clear.onclick
// TODO: green and red (change background colour, text, icon color)
// TODO: calculate net calories
// TODO: form validation (text and number fields)
//NOTE TO SELF: .value should be inside the onclick function for the value to be captured


// stores references to all calorie fields
let calorieGoal = document.querySelector("#calorieGoal");
let calorieBreakfast  = document.querySelector("#calorieBreakfast");
let calorieLunch = document.querySelector("#calorieLunch");
let calorieSnacks = document.querySelector("#calorieSnacks");
let calorieDinner = document.querySelector("#calorieDinner");
let calorieExercise = document.querySelector("#calorieExercise");
let calorieNet = 0;
let calorieConsumed = 0;
let calorieBurned = 0;
    

// calculateButton reference and call to calculateNetCalories function onclick
const calculateButton = document.querySelector("#submit");
calculateButton.addEventListener("click", calculateNetCalories);

// clearButton reference and reload page to clear
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearPage);


/* FUNCTION DEFINITIONS BEGIN */

// calculates calorie excess/deficit on Calculate button click
function calculateNetCalories(){
    getCalorieValues();

    calorieConsumed = (calorieBreakfast + calorieLunch + calorieSnacks + calorieDinner);
    calorieBurned = calorieExercise;
    calorieNet = calorieConsumed - calorieBurned;

    return console.log(calorieNet);
}

// clears all values by reloading the page
function clearPage(){
    window.location.reload();
    return false;
}

// captures user entered calorie values on Calculate button click
function getCalorieValues(){
    calorieGoal = calorieGoal.value;
    calorieBreakfast  = calorieBreakfast.value;
    calorieLunch  = calorieLunch.value;
    calorieSnacks  = calorieSnacks.value;
    calorieDinner  = calorieDinner.value;
    calorieExercise  = calorieExercise.value;
    
    return calorieGoal, calorieBreakfast, calorieLunch, calorieSnacks, calorieDinner, calorieExercise;
}

/* FUNCTION DEFINITIONS END */