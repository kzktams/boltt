/*
window.addEventListener("load", init, false);

function $(id) {
  return document.getElementById(id);
}

function init() {
  $("gomb").addEventListener("click", rendez, false);

  //$("csokkeno").addEventListener("click", csokkeno, false);

}
*/

//plusz minusz 
//forrás: https://stackoverflow.com/questions/31078632/multiple-plus-and-minus-buttons
var total;
// if user changes value in field
$('.field').change(function () {
  // maybe update the total here?
}).trigger('change');

$('.add').click(function () {
  var target = $('.field', this.parentNode)[0];
  target.value = +target.value + 1;
});

$('.sub').click(function () {
  var target = $('.field', this.parentNode)[0];
  if (target.value > 0) {
    target.value = +target.value - 1;
  }
});

//termékek
$('.submitbutton').click(function () {
  var termek1 = {
    nev: $('#itemNev span').text(),
    ar: $('#item1 span').text(),
    mennyiseg: $("input:text").val()
  };

  console.log(termek1.nev + " ");
  console.log(termek1.ar + " ");
  console.log(termek1.mennyiseg + " ");
  console.log(termek1.ar * termek1.mennyiseg);

});

$('.submitbutton2').click(function () {
  var termek2 = {
    nev: $('#itemNev2 span').text(),
    ar: $('#item2 span').text(),
    mennyiseg: $("#mennyi").val()
  };

  console.log(termek2.nev + " ");
  console.log(termek2.ar + " ");
  console.log(termek2.mennyiseg + " ");
  console.log(termek2.ar * termek2.mennyiseg + " ");
});

$('.submitbutton3').click(function () {
  var termek3 = {
    nev: $('#itemNev3 span').text(),
    ar: $('#item3 span').text(),
    mennyiseg: $("#mennyi3").val()
  };

  console.log(termek3.nev + " ");
  console.log(termek3.ar + " ");
  console.log(termek3.mennyiseg + " ");
  console.log(termek3.ar * termek3.mennyiseg + " ");
});

/*
//rendezés
let elemek = [];
let asahi = document.$("ar1").value;
let heineken = document.$("ar2").value;
let jackDaniels = document.$("ar3").value;
let jager = document.$("ar4").value;
let jimBeam = document.$("ar5").value;
let kobanyai = document.$("ar6").value;
let somersby = document.$("ar7").value;
let torley = document.$("ar8").value;
let unicum = document.$("ar9").value;

elemek.push(asahi, heineken, jackDaniels, jager, jimBeam, kobanyai, somersby, torley, unicum);


 function rendezesNovekvo() {
   
   for(let i=0; elemek.length; i++){
      for(let j=0; elemek.length; j++){
        if(rendezes[j] < rendezes[i]){
          temp = rendezes[j];
          rendezes[j] = rendezes[i];
          rendezes[i] = temp;
        }
      }
   }
 }


let rendez = function () {
  if($("novekvo").checked){
    elemek.sort();
    console.log(elemek);
  }
  if($("csokkeno").checked){
    elemek.reverse();
    console.log(elemek);
  }

}
*/