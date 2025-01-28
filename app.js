/*let etape1 = document.getElementById("etape1");
let etape2 = document.getElementById("etape3");
let etape3 = document.getElementById("etape3");
let etape4 = document.getElementById("etape4");
let etape5 = document.getElementById("etape5");**/


let etapes = document.querySelectorAll("#etapes div")
// pour chacunes des etapes
etapes.forEach(etape =>{    
    // => je ecoute le click
    etape.addEventListener("click",()=>{
        // deselectionner celle qui est deja active
        let active = document.querySelector(".actives")
        active.classList.remove("actives")
        // => ca ajoute la classe active sur la div sur laquelle j'ai cliqué
        etape.classList.add("actives")
    })

})


