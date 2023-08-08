const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow"];
let colorIndex = 0;
let btn = document.getElementById('btn');
let color = document.querySelector('.color');

btn.addEventListener('click', () => {
    randomFlipColors();
})

let flipColors = () => {
    colorIndex++;
    if(colorIndex > colors.length-1){
        colorIndex = 0;
    }
    let newColor = colors[colorIndex];
    color.innerText = newColor
    document.body.style.background = newColor;
};

let randomFlipColors = () => {
    const randomNumber = getRandomNumber();
    let newColor = colors[randomNumber];
    color.innerText = newColor
    document.body.style.background = newColor;
};

let getRandomNumber = () => {
    let randomNumber = Math.random();
    let randomFlooredNumber =Math.floor(randomNumber * colors.length);
    console.log(`Random Number: ${randomNumber} - Multiplied Number: ${randomNumber * colors.length} - Floored Number: ${randomFlooredNumber}`);
    return randomFlooredNumber;
}