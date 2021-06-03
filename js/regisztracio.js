window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("gomb").addEventListener("click", ures, false);

}

let ures = function () {
    let email = $("bejelentkezE").value;
    let jelszo = $("jelszo").value;
    let jelszoKetto = $("jelszo2").value;

    if(email.length < 1 || jelszo.length<1 || jelszoKetto.length < 1){
        console.log("igen");
        $("bejelentkezE").style.color = "red";
    }
}