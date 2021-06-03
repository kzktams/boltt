window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("gomb").addEventListener("click", ures, false);

    //$("gomb").addEventListener("click", elvisz, false);

}

let ures = function () {
    let email = $("bejelentkezE").value;
    let jelszo = $("jelszo").value;
    let jelszoKetto = $("jelszo2").value;
    //let elerheto = $("oldalLink").disabled = true;

/* 
        if ($("bejelentkezE").value < 1) {
            $("ures1").innerHTML = "Ne hagyjon üres mezőket!";
        }
        if ($("jelszo").value < 1) {
            $("ures2").innerHTML = "Ne hagyjon üres mezőket!";
        }
        if ($("jelszo2").value < 1) {
            $("ures3").innerHTML = "Ne hagyjon üres mezőket!";
        }
        if ($("jelszo").value != $("jelszo2").value) {
            $("ures3").innerHTML = "A jelszó  nem egyezik";
        }

        $("gomb").disabled = false;*/

        if($("bejelentkezE").value < 1 && $("jelszo").value < 1 && $("jelszo2").value < 1){
            $("ures3").innerHTML = "Ne hagyjon üres mezőket!";
        }else{
            $("oldalLink").disabled = false;
        }
    
}

/*
let elvisz = function () {
    if(!ures()){

    }
}
*/
