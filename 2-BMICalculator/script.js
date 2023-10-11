const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give me a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give me a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let weightCategory;
    switch (!isNaN(height) || !isNaN(weight)) {
      case bmi < 18.5:
        weightCategory = 'Under Weight';
        break;
      case bmi >= 18.5 && bmi < 24.9:
        weightCategory = 'Normal Weight';
        break;
      case bmi >= 25 && bmi < 29.9:
        weightCategory = 'Over Weight';
        break;
      default:
        weightCategory = 'Obese';
        break;
    }
    results.innerHTML = `<div>Your weight is <span>${bmi} </span> and weight category is ${weightCategory}</div>`;
  }
});
