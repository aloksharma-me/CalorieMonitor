// TODO: user inputs and change content based on that
// TODO: add meals (show/hide details fields)
// TODO: submit.onclick, clear.onclick
// TODO: green and red (change background colour, text, icon color)
// TODO: calculate net calories
// TODO: form validation (text and number fields)

// Taking user inputs from fields calorie goal, breakfast calorie, lunch calorie, snacks calorie, dinner calorie, exercise calorie

const submitButton = document.querySelector("#submit");
const calorieGoal = document.querySelector("#calorieGoalValue");

// submitButton.onclick = buttonClicked;
submitButton.addEventListener("click", buttonClicked);

function buttonClicked(){
    console.log('clicked');
}