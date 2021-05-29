window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("plusz").addEventListener("click", kosarbaTesz, false);
}

let kosarbaTesz = function(){
    let plusz = $("szam").value;
    let minusz = $("minusz").value;
    let szam = $("szam").value;
    if(plusz){
        szam++;
    }
    if(minusz){
        szam--;
    }


}