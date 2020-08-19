'use strict';

// TOUTES MES PHOTOS 
var contentSlider = [
    {
        src:"images/1.jpg",
        alt:"image1",
        legend:"Art"
    },{
        src:"images/2.jpg",
        alt:"Image2",
        legend:"Bridge"
    },{
        src:"images/3.jpg",
        alt:"Image3",
        legend:"Color Bat"
    },{
        src:"images/4.jpg",
        alt:"Image4",
        legend:"Light of the night"
    },{
        src:"images/5.jpg",
        alt:"Image5",
        legend:"City Light"
    },{
        src:"images/6.jpg",
        alt:"Image6",
        legend:"Paris"
    }
]
    
var imagePresente = 0;
var intervalAutomatik;

//DIAPO AUTOMATIQUE
function mySlider(){  
    (intervalAutomatik == undefined) ? intervalAutomatik = window.setInterval(slideNext,1500) : intervalAutomatik = clearInterval(intervalAutomatik);

    document.querySelector("#slider-toggle").classList.toggle("fa-play");
    document.querySelector("#slider-toggle").classList.toggle("fa-pause");
}
                          
function slidePrevious(){   
    imagePresente--;
    if (imagePresente < 0) imagePresente = 5; 
    displayImage();
}
    
function slideNext(){ 
    imagePresente++;
    if (imagePresente == contentSlider.length) imagePresente = 0;
    displayImage();
}

//AFFICHAGE PHOTO ET LEGEND                                 
function displayImage(){  
    document.querySelector("img").src = contentSlider[imagePresente].src;
    document.querySelector("figcaption").textContent = contentSlider[imagePresente].legend;
}

//FUNCTION SLIDE ALEATOIRE
function slideRandom(){ 
    var randomSlider;

    do {
    randomSlider = Math.round(Math.random()*contentSlider.length);
    } while (randomSlider == imagePresente)

    imagePresente = randomSlider;
    displayImage();
}


// Manipulation du slider avec les touches du clavier                                                        
function keyClick(event){   
    switch(event.code){
        case 'ArrowLeft':
            slidePrevious();
            break;
        case 'ArrowRight':
            slideNext();
            break;
        case 'Space':
            mySlider();
    }
}

/* All Events*/ 
document.querySelector("#slider-toggle").addEventListener("click",mySlider);
document.querySelector("#slider-next").addEventListener("click",slideNext);
document.querySelector("#slider-previous").addEventListener("click",slidePrevious);
document.querySelector("#slider-random").addEventListener("click",slideRandom);

// TOUCHE DU CLAVIER
document.querySelector("html").addEventListener("keydown",keyClick);