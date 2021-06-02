window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("feliratkozas").addEventListener("click", email, false);

}

let email = function () {
    document.getElementById('email').value='';
}