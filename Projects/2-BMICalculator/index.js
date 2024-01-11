const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);

    let result = document.querySelector('#results');

    if ( isNaN(height) || height <= 0){
        result.innerHTML = `Please enter a valid height !!`;
    }else if ( isNaN(weight) || weight <= 0 ){
        result.innerHTML = `Please enter a valid weight !!`;
    }else{
        let bmi = (weight/((height*height)/10000)).toFixed(2);
        if (bmi < 18.6){
            result.innerHTML = `Oops, Your are under weighted .
                                Your BMI : ${bmi}`;
        }else if(bmi < 24.9){
            result.innerHTML = `Good, You have normal weight .
            Your BMI : ${bmi}`;
        }else{
            result.innerHTML = `Oops, Your are over weighted .
            Your BMI : ${bmi}`;
        }
    }

})