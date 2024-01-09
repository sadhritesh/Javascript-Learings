//✅Array_name.forEach()

//1 - for 

fruits = ["Apple", "Mango", "Banana", "Lithchi", "kela", "stawberry", "cherry"];

fruits.forEach(element => {
    // console.log(element);
});

fruits.forEach((element, index, arr) => {
    // console.log(element, index, arr);  //arr -> whole fruits array
});

let mobiles = [
    {
        name : "Nokia",
        model : "1208",
        price : 12000
    },
    {
        name : "Samsung",
        model : "E5",
        price : 15000
    },
    {
        name : "Apple",
        model : "15pro-max",
        price : 200000
    },
    {
        name : "Oneplus",
        model : "Nord3c",
        price : 22000
    }
]

mobiles.forEach(mobile=>{
    console.log(`Mobile name : ${mobile.name}, model : ${mobile.model}, price : ${mobile.price}`);
})
// Mobile name : Nokia, model : 1208, price : 12000
// Mobile name : Samsung, model : E5, price : 15000
// Mobile name : Apple, model : 15pro-max, price : 200000
// Mobile name : Oneplus, model : Nord3c, price : 22000