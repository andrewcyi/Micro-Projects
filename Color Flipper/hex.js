const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let generatedHexValue = '';
let colorIndex = 0;
let btn = document.getElementById('btn');
let color = document.querySelector('.color');

btn.addEventListener('click', () => {
    randomFlipColors();
})

const randomFlipColors = () => {
    generatedHexValue = '#';
    for (let i = 0; i < 6; i++) {
        generatedHexValue += hex[getRandomNumber()];
    }
    color.textContent = generatedHexValue;
    document.body.style.background = generatedHexValue;
}

const getRandomNumber = () => {
    let randomNumber = Math.random();
    let randomFlooredNumber = Math.floor(randomNumber * hex.length);
    return randomFlooredNumber;
}