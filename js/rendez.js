window.addEventListener("load", init, false);

function $(id) {
  return document.getElementById(id);
}

function init() {
  $("gomb").addEventListener("click", rendezesNovekvo, false);

  //$("csokkeno").addEventListener("click", csokkeno, false);

}

//rendezés
 let rendezesNovekvo = function () {
    let elemek = [];
    let asahi = $("ar1").innerText;
    let heineken = $("ar2").innerText;
    let jackDaniels = $("ar3").innerText;
    let jager = $("ar4").innerText;
    let jimBeam = $("ar5").innerText;
    let kobanyai = $("ar6").innerText;
    let somersby = $("ar7").innerText;
    let torley = $("ar8").innerText;
    let unicum = $("ar9").innerText;
    
    elemek.push(asahi, heineken, jackDaniels, jager, jimBeam, kobanyai, somersby, torley, unicum);
   
   for(let i=0; elemek.length; i++){
      for(let j=0; elemek.length; j++){
        if(elemek[j] < elemek[i]){
          temp = elemek[j];
          elemek[j] = elemek[i];
          elemek[i] = temp;
        }
      }
   }

   console.log(elemek);
 }


 /*
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