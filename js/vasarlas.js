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



//var kosar = [termek1, termek2, termek3];


//kosár
/*
$('.submitbutton').click(function() {
let termekek = [];
let termekekNeve = [];
let osszAr = [];
var ar = $('#item1 span').text();
var nev = $('#itemNev span').text();
var mennyiseg = $("input:text").val();

var osszeg = ar*mennyiseg;
 
termekek.push(ar);
termekekNeve.push(nev);
osszAr.push(osszeg);

console.log(termekek);
console.log(termekekNeve);
console.log(mennyiseg);
console.log(osszAr);

});

$('.submitbutton2').click(function() {
  termekek = [];
  termekekNeve = [];
  osszAr = [];
  var ar2 = $('#item2 span').text();
  var nev2 = $('#itemNev2 span').text();
  var mennyiseg2 = $("#txt_name").val();
  
  var osszeg2 = ar2*mennyiseg2;
   
  termekek.push(ar2);
  termekekNeve.push(nev2);
  osszAr.push(osszeg2);
  
  console.log(termekek);
  console.log(termekekNeve);
  console.log(mennyiseg2);
  console.log(osszAr);

});



/*
function kosar() {
  var termekek = [];
  var termekekNeve = [];
  var osszAr = [];
  var ar2 = $("ar").text();
  var nev2 = $("hein").text();
  var mennyiseg2 = $('txt_name').value;
  
  var osszeg2 = ar2*mennyiseg2;
   
  termekek.push(ar2);
  termekekNeve.push(nev2);
  osszAr.push(osszeg2);
  
  console.log(termekek);
  console.log(termekekNeve);
  console.log(mennyiseg2);
  console.log(osszAr);
}
*/

