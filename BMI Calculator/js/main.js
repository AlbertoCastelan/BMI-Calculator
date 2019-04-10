// Declare variables
var age = document.getElementById('age').value;
var male = document.getElementById('male').value;
var female = document.getElementById('female').value;
var index = document.querySelector('.result');
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
    index.innerHTML = `<div class="show-result">
    <p>Your body mass index is ${result}, you are underweight, try a diet rich on carbs and proteins.</p>
    </div>`;
    index.style.backgroundColor = '#48ACEE';
  } else if (result > 18.5 && result <= 24.9) {
    index.innerHTML = `<div class="show-result">
    <p>Your body mass index is ${result}, you have an average weight, keep on the good work!.</p>
    </div>`;
    index.style.backgroundColor = '#27C122';
  } else if (result >= 25 && result <= 29.9) {
    index.innerHTML = `<div class="show-result">
    <p>Your body mass index is ${result}, you are overweight, take better care of your daily diet.</p>
    </div>`;
    index.style.backgroundColor = '#F98205';
  } else if (result >= 30 && result <= 34.9) {
    index.innerHTML = `<div class="show-result">
    <p>Your body mass index is ${result}, you are in a state of obesity, control your diet by consuming less fat.</p>
    </div>`;
    index.style.backgroundColor = '#F92205';
  } else if (result >= 35) {
    index.innerHTML = `<div class="show-result">
    <p>Your body mass index is ${result}, you are in a state of extreme obesity, we advise you to visit your local GP 
    for a diet counseling.</p>
    </div>`;
    index.style.backgroundColor = '#FB0BF7';
  }
}
