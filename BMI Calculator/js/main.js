// Declare variables
var age = document.getElementById('age').value;
var male = document.getElementById('male').value;
var female = document.getElementById('female').value;
var index = document.querySelector('.bmiindex');
var button = document.getElementById('button');

// Create an event listener
button.addEventListener('click', bmiCalculator);

// Create a function that calculates your body mass index
function bmiCalculator(e, weight, height) {
  weight = document.getElementById('weight').value;
  height = document.getElementById('height').value;
  e.preventDefault();
  var selected = document.getElementById('measure').value;
  var result;
  if (selected === 'Kilograms') {
    result = weight / (height * height);
  } else {
    result = (weight / (height * height)) * 703;
  }
  result = Math.round(result);
  console.log(result);
  if (result <= 18.5) {
    index.innerHTML = `<p>Your body mass index is ${result}, you are underweight.</p>`;
  } else if (result > 18.5 && result <= 24.9) {
    index.innerHTML = `<p>Your body mass index is ${result}, you have an average weight.</p>`;
  } else if (result >= 25 && result <= 29.9) {
    index.innerHTML = `<p>Your body mass index is ${result}, you are overweight.</p>`;
  } else if (result >= 30 && result <= 34.9) {
    index.innerHTML = `<p>Your body mass index is ${result}, you are obese.</p>`;
  } else if (result >= 35) {
    index.innerHTML = `<p>Your body mass index is ${result}, you are extremely obese.</p>`;
  }
}
