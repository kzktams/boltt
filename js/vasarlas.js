/*
window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("feliratkozas").addEventListener("click", email, false);
}
/*
let email = function() {
    onclick="document.getElementById('email').value = ''";
}
*/

/*
let email = function () {
    document.getElementById('email').value='';
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

//kosár
/*
function kosar() {
  let termekek = [];
  let termekNev = document.getElementById('termek').value;
  let ar = document.getElementById("ar").value;
  let mennyiseg = document.getElementById('.field').value
  var mennyiseg = $('.field', this.parentNode)[0];

  termekek.push(termekNev);
}*/

/*
let termek = {
  termekek: [],
  termeknev: document.getElementById('termek').value, 
  ar: document.getElementById("ar").value, 
  mennyiseg: document.getElementById('.field').value
};

//termékek 
var products = {
  123: {
    name : "asahi",
    img : "asahi.jpg",
    price : 2034
  },
  124: {
    name : "haineken",
    img : "dummy-pdt-b.jpg",
    price : 1247
  },
  125: {
    name : "unicum",
    img : "dummy-pdt-a.jpg",
    price : 675
  },
  126: {
    name : "jager",
    img : "dummy-pdt-a.jpg",
    price : 842
  }
};

$('.kosar').click(function() {
  //let termekek = [];
  //let termekNev = document.getElementById('termek').value;
  //let ar = document.getElementById("ar").value;
  //let mennyiseg = document.getElementById('.field').value;

  /*
  let termek = {
    termekek: [],
    termeknev: document.getElementById('termek').value, 
    ar: document.getElementById("ar").value, 
    //mennyiseg: document.getElementById('.field').value
  };

  var termekek= [];
  var kosar = $('.field', this.parentNode)[0];
  termekek.push(products);
  console.log("lefut");
  console.log(products.name);
});
*/

$('.submitbutton').click(function() {
var termekek = [];
var termekekNeve = [];
var osszAr = [];
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