const numberValue = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
let count = 0;

console.log(btns);

btns.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        else if(styles.contains('increase')){
            count++;
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