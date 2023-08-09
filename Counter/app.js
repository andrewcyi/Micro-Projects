const numberValue = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
const incrementInput = document.querySelector('input');
let count = 0;
let increment = 1;

const incrementNumberUpdate = () => {
    let regex = /^[0-9]*$/;
    if (!incrementInput.value.match(regex))
    {
        alert("Must input numbers");
    }
    else if(incrementInput.value == 0 ){
        increment = 1;
    }
    else{    increment = incrementInput.value * 1;
    }
}

incrementInput.addEventListener('input',incrementNumberUpdate);

btns.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count = count - increment;
        }
        else if(styles.contains('reset')){
            count = 0;
            increment = 1;
            incrementInput.value = '';
        }
        else if(styles.contains('increase')){
            count = count + increment;
        }
        numberValue.textContent = count;
        valueChecker();
    })
})

const valueChecker = () => {
    if(count < 0){
        numberValue.style.color = "red";
    }
    else if(count == 0){
        numberValue.style.color = "#222";
    }
    else {
        numberValue.style.color = 'green';
    }
}

