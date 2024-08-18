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

// calculate button reference and event listener 
const calculateButton = document.querySelector("#submit");
calculateButton.addEventListener("click", calculateCalories);

// clear button reference and reload page to clear
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", reloadPage);

function reloadPage(){
    window.location.reload();
    return false;
}


/* FUNCTION DEFINITIONS START */

// calculates calorie excess/deficit on Calculate button click
function calculateCalories(){
    getCalorieValues();
    return console.log(calorieGoal, calorieBreakfast, calorieLunch, calorieSnacks, calorieDinner, calorieExercise);
}

// stores user entered calorie values on Calculate button click
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