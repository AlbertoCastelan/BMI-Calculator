const resultModal = document.querySelector('.result');
const resultText = document.querySelector('.result__display');
const button = document.querySelector('.container__button-submit');
const closeBtn = document.querySelector('.result__closeBtn');

button.addEventListener('click', bmiCalculator);
closeBtn.addEventListener('click', closeModal);

function closeModal() {
  resultModal.classList.remove('active')
};

function bmiCalculator(e, weight, height) {
  e.preventDefault();
  weight = document.querySelector('.container__input-weight').value;
  height = document.querySelector('.container__input-height').value;
  
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  resultModal.classList.add('active');

  switch(true) {
    case (bmi <= 18.5 && bmi >= 0):
      resultText.innerHTML = `Your body mass index is ${bmi}, your result suggests you are underweight.If you are receiving treatment for an eating disorder then this tool is NOT to be used.
      There may be an underlying medical cause for your weight, or your diet may not be providing you with enough calories. We suggest you discuss this with your GP.`;
      resultModal.style.backgroundColor = '#27C122';
      break;
    case (bmi > 18.5 && bmi <= 24.9):
      resultText.innerHTML = `Your body mass index is ${bmi}, your result suggests you are in the healthy weight range, but at the higher end. Keep an eye on your weight and try to stay in the healthy range.`;
      resultModal.style.backgroundColor = '#48ACEE';
      break;
    case (bmi >= 25 && bmi <= 29.9):
      resultText.innerHTML = `Your body mass index is ${bmi}, your result suggests you are overweight. Excess weight can put you at increased risk of health issues such as type 2 diabetes, heart disease, stroke.
      Working towards a healthier weight and keeping the weight off can help reduce your risk of health problems in the longer term. Your health could benefit from losing 5% of your weight.`;
      resultModal.style.backgroundColor = '#F98205';
      break;
    case (bmi >= 30 && bmi <= 34.9):
      resultText.innerHTML = `Your body mass index is ${bmi}, your result suggests you are obese, Losing and keeping off 5% of your weight can have health benefits, 
      such as lowering your blood pressure and reducing your risk of developing type 2 diabetes. Over time you should work towards achieving a healthier weight.
      If you're concerned about your weight speak to your GP.`;
      resultModal.style.backgroundColor = '#F92205';
      break;  
    case (bmi >= 35 && bmi <= 50):
      resultText.innerHTML = `Your body mass index is ${bmi}, you are in a state of extreme obesity, we advise you to visit your local GP 
      for a diet counseling as soon as possible.`;
      resultModal.style.backgroundColor = '#FB0BF7';
      break;
    default:  
      resultText.innerHTML = `Please enter a valid measure. Range in kilograms and centimetres between 0 and 300.`;
      resultModal.style.backgroundColor = 'red';
      break;
  }

}
