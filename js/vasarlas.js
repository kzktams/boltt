window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("feliratkozas").addEventListener("click", email, false);
}
/*
let email = function() {
    onclick="document.getElementById('email').value = ''"
}
*/

let email = function () {
    document.getElementById('email').value = '';
}
/*
//forrás: https://codepen.io/baselakasha/pen/RZybYe
window.onload=function(){
    var minusBtn = document.getElementById("minus"),
        plusBtn = document.getElementById("plus"),
        numberPlace = document.getElementById("szam"),
        submitBtn = document.getElementById("kosarbaTesz"),
        number = 0, /// number value
        min = 0, /// min number
        max = 30; /// max number
        
    minusBtn.onclick = function(){
        if (number>min){
           number--; /// Minus 1 of the number
           numberPlace.innerText = number ; /// Display the value in place of the number
           
        }
        if(number == min) {        
            numberPlace.style.color= "red";
            setTimeout(function(){numberPlace.style.color= "black"},500)
        }
        else {
          numberPlace.style.color="black";            
           }
                
    }
    plusBtn.onclick = function(){
        if(number<max){
           number++;
           numberPlace.innerText = number ; /// Display the value in place of the number
        }     
        if(number == max){
               numberPlace.style.color= "red";
               setTimeout(function(){numberPlace.style.color= "black"},500)
        }
        else {
               numberPlace.style.color= "black";
               
        }
    }
    submitBtn.onclick = function(){
        alert("you choice : " + number);
    }
    
}
*/


// forrás: https://www.youtube.com/watch?v=GXsWa_6vnOo&t=306s
//setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

//taking value to increment decrement input value
var valueCount

//taking price value in variable
var price = document.getElementById("price").innerText;

//price calculation function
function priceTotal() {
    var total = valueCount * price;
    document.getElementById("price").innerText = total
}

//plus button
document.querySelector(".plus-btn").addEventListener("click", function () {
    //getting value of input
    valueCount = document.getElementById("quantity").value;

    //input value increment by 1
    valueCount++;

    //setting increment input value
    document.getElementById("quantity").value = valueCount;

    if (valueCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled")
    }

    //calling price function
    priceTotal()
})

//plus button
document.querySelector(".minus-btn").addEventListener("click", function () {
    //getting value of input
    valueCount = document.getElementById("quantity").value;

    //input value increment by 1
    valueCount--;

    //setting increment input value
    document.getElementById("quantity").value = valueCount

    if (valueCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }

    //calling price function
    priceTotal()
})