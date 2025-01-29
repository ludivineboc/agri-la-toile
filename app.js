/*let etape1 = document.getElementById("etape1");
let etape2 = document.getElementById("etape3");
let etape3 = document.getElementById("etape3");
let etape4 = document.getElementById("etape4");
let etape5 = document.getElementById("etape5");**/

// la position de l'etape acutlelment affichée
let courante = 0
let etapes = document.querySelectorAll("#etapes div")
let images = document.querySelectorAll ("#images img")
// pour chacunes des etapes
etapes.forEach((etape,pos) =>{    
    // => je ecoute le click
    etape.addEventListener("click",()=>{
        courante= pos
        // deselectionner celle qui est deja active
        let active = document.querySelector(".actives")
        active.classList.remove("actives")
        // => ca ajoute la classe active sur la div sur laquelle j'ai cliqué
        etape.classList.add("actives")
     // deselectionner celle qui est deja active
        let opacity = document.querySelector(".splineActive")
        opacity.classList.remove("splineActive")
        images[pos].classList.add("splineActive")
    })
   /* image.addEventListener("click",()=>{
       
        // => ca ajoute la classe active sur la div sur laquelle j'ai cliqué
        
    
    })*/

})
/*etapes.forEach((image) =>{
    image.addEventListener("click",()=>{
        let opacity = document.querySelector(".splineActive")
        opacity.classList.remove("splineActive")
        image.classList.add("splineActive")

    })
    
})
    */


setInterval(()=>{
    // masquer l'etape courante
    let active = document.querySelector(".actives")
    active.classList.remove("actives")
    // masquer l'image courante
    let opacity = document.querySelector(".splineActive")
    opacity.classList.remove("splineActive")

    // on passe a la position suivante
    courante++;
    if(courante> images.length-1){
        courante = 0   
    }
    // affifcher letape suivante
    etapes[courante].classList.add("actives")
    // afficher l'image suivante
    images[courante].classList.add("splineActive")
},4000)


    document.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 600){
            header.classList.add('scrolled')
        }else{
            header.classList.remove('scrolled')
        }
    })


