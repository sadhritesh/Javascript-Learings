let clock = document.getElementById('clock');

// let date = new Date(); //will not work , becuse date is creating at the time of js reload(page-reload)

setInterval(function(){
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
},1000)