const calculateBtn = document.getElementById('calculate-button');
const resetBtn = document.getElementById('reset-button');
const heightInput =  document.getElementById('height-input');
const weightInput =  document.getElementById('weight-input');
const resultArea = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const enteredHeight = +heightInput.value;
    const enteredWeight = +weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
        <ion-card-content class="ion-text-center">
            <h1>${Math.round(bmi * 100) / 100}</h1>
        </ion-card-content>
    `;
    
    resultArea.innerHTML = '';
    resultArea.appendChild(resultElement);
});

resetBtn.addEventListener('click', () => {
    heightInput.value = '';
    weightInput.value = '';
    resultArea.innerHTML = '';
});
