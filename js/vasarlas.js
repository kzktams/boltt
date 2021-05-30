window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

/*
function minusz(){
    let szam = $("szam").value;
    if($('minusz').clicked == true){
        szam--;
    }

}

function plusz(){
    if($("plusz").clicked == true){
        szam++;
    }

}*/

function increment() {
    $('szam').stepUp();
 }

 function decrement() {
    $('szam').stepDown();
 }
