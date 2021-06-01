/*
window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("szam2").addEventListener("click", vasarol, false);
}

let email = function() {
    onclick="document.getElementById('email').value = ''"
}


let email = function () {
    document.getElementById('email').value = '';
}
*/

//plusz minusz 
//forrás: https://stackoverflow.com/questions/31078632/multiple-plus-and-minus-buttons
var total;
// if user changes value in field
$('.field').change(function() {
  // maybe update the total here?
}).trigger('change');

$('.add').click(function() {
  var target = $('.field', this.parentNode)[0];
  target.value = +target.value + 1;
});

$('.sub').click(function() {
  var target = $('.field', this.parentNode)[0];
  if (target.value > 0) {
    target.value = +target.value - 1;
  }
});

/*

//korsárba tesz + összeg
let osszeg = 0;
let termekek = [];
let mennyisegek = [];
function kosarbaTesz() {
    let termek = document.getElementById('.field');
    let mennyiseg = document.getElementById('.field').value;
    if(document.getElementById("kosarbaTesz").onclick){
        kosar.push(termek);
    }
    

}
*/
