let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let backGround = document.body;

let intervalId = 0;

let startChange = function(){
    intervalId = setInterval(()=>{
        min = 0;
        max = 255;

        let redValue = Math.floor(Math.random() * (max - min + 1)) + min;
        let greenValue = Math.floor(Math.random() * (max - min + 1)) + min;
        let blueValue = Math.floor(Math.random() * (max - min + 1)) + min;

        backGround.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        
    },1000)
}

let stopChange = function(){
    if (intervalId){
    clearInterval(intervalId);
    }
}

startBtn.addEventListener('click',startChange);
stopBtn.addEventListener('click', stopChange);


