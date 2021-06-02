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

//kosár
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

  console.log(termekek);
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
