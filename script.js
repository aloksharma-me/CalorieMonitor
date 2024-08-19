// DONE: get user inputs
// TODO: add meals (show/hide details fields)
// DONE: submit.onclick, clear.onclick
// TODO: green and red (change background colour, text, icon color)
// DONE: calculate net calories
// TODO: form validation (text and number fields)
//NOTE TO SELF: .value should be inside the onclick function for the value to be captured


// DOM references and calorie calculation variables
let calorieGoal = document.querySelector("#calorieGoal");
let calorieBreakfast  = document.querySelector("#calorieBreakfast");
let calorieLunch = document.querySelector("#calorieLunch");
let calorieSnacks = document.querySelector("#calorieSnacks");
let calorieDinner = document.querySelector("#calorieDinner");
let calorieExercise = document.querySelector("#calorieExercise");

let addBreakfast = document.querySelector("#addBreakfast");
let addLunch = document.querySelector("#addLunch");
let addSnacks = document.querySelector("#addSnacks");
let addDinner = document.querySelector("#addDinner");

let breakfastDetails = document.querySelector(".breakfastDetails");
let lunchDetails = document.querySelector(".lunchDetails");
let snacksDetails = document.querySelector(".snacksDetails");
let dinnerDetails = document.querySelector(".dinnerDetails");

let calorieNet = 0;
let calorieConsumed = 0;
let calorieBurned = 0;

// calculateButton reference and call to calculateNetCalories function onclick
const calculateButton = document.querySelector("#submit");
calculateButton.addEventListener("click", calculateNetCalories);

// clearButton reference and reload page to clear
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearPage);

// add meal button interaction
addBreakfast.addEventListener("click", showBreakfastDetails);
addLunch.addEventListener("click", showLunchDetails);
addSnacks.addEventListener("click", showSnacksDetails);
addDinner.addEventListener("click", showDinnerDetails);

/* FUNCTION DEFINITIONS BEGIN */

// checks the current status of visibility, then toggles it
function showBreakfastDetails(){
    if(breakfastDetails.style.display === "block"){
        breakfastDetails.style.display = "none";
    } else{
        breakfastDetails.style.display = "block";
    }
}
function showLunchDetails(){
    if(lunchDetails.style.display === "block"){
        lunchDetails.style.display = "none";
    } else{
        lunchDetails.style.display = "block";
    }
}
function showSnacksDetails(){
    if(snacksDetails.style.display === "block"){
        snacksDetails.style.display = "none";
    } else{
        snacksDetails.style.display = "block";
    }
}
function showDinnerDetails(){
    if(dinnerDetails.style.display === "block"){
        dinnerDetails.style.display = "none";
    } else{
        dinnerDetails.style.display = "block";
    }
}

// calculates calorie excess/deficit on Calculate button click
function calculateNetCalories(){
    getCalorieValues();
    // document.querySelector("#summaryCard").style.backgroundColor = "#15803D";
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