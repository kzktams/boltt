window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("gomb").addEventListener("click", ures, false);

    //$("gomb").addEventListener("click", egyezes, false);

}

let ures = function () {
    let email = $("bejelentkezE").value;
    let jelszo = $("jelszo").value;


        if ($("bejelentkezE").value < 1 || $("jelszo").value < 1) {
            $("ures").innerHTML = "Ne hagyjon üres mezőket!";
            //console.log("jaú");
        }else{
            if (window.confirm('Sikeres regisztráció!')) {
                window.location.href='../../index.html';
            }
        }

        //$("gomb").disabled = false;

}

/*
let egyezes = function () {
    if(!ures()){
        if (window.confirm('Sikeres regisztráció!')) {
            window.location.href='../../index.html';
        }
    }
}
*/

/*
let elvisz = function () {
    if(!ures()){

    }
}
*/
