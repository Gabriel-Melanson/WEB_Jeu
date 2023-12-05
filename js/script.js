let canevas;
let contexte;
let p1X;
let p1Y;
let p2X;
let p2y;


let touchesClavier = {
    //Joueur  1
    "w": false,
    "s": false,
    "a": false,
    "d": false,

    //Joueur 2
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowLeft": false,
    "ArrowRight": false

};

const VITESSE_JOUEUR = 10;
const DIMENSION_JOUEUR = 35;
const DIENSION_OBJET;

window.onload = function () {
    document.getElementById("chargeTexte").style.display = "none";

    window.addEventListener("keydown", toucheAppuyee);
    window.addEventListener("keyup", toucheRelachee);

    canevas = document.getElementById('ZoneJeu');
    contexte = canevas.getContext('2d');

    posX = (canevas.width - DIMENSION_CARRE) / 2;
    posY = (canevas.height - DIMENSION_CARRE) / 2;

    window.requestAnimationFrame(boucleJeu);  // le navigateur appellera boucleJeu() au bon moment
}

function toucheAppuyee(evenement) {
    console.log("touche appuyée: " + evenement.key);
    switch (evenement.key) {
        case "ArrowUp":
            touchesClavier["ArrowUp"] = true;
            break;
        case "ArrowDown": 
            touchesClavier["ArrowDown"] = true;
            break;
        case "ArrowLeft": 
            touchesClavier["ArrowLeft"] = true;
            break;
        case "ArrowRight": 
            touchesClavier["ArrowRight"] = true;
            break;
        case "w":
            touchesClavier["w"] = true;
            break;
        case "s": 
            touchesClavier["s"] = true;
            break;
        case "a": 
            touchesClavier["a"] = true;
            break;
        case "d": 
            touchesClavier["d"] = true;
            break;
    }
}

function toucheRelachee(evenement) {
    switch (evenement.key) {
        case "ArrowUp":
            touchesClavier["ArrowUp"] = false;
            break;
        case "ArrowDown": 
            touchesClavier["ArrowDown"] = false;
            break;
        case "ArrowLeft": 
            touchesClavier["ArrowLeft"] = false;
            break;
        case "ArrowRight": 
            touchesClavier["ArrowRight"] = false;
            break;
        case "w":
            touchesClavier["w"] = false;
            break;
        case "s": 
            touchesClavier["s"] = false;
            break;
        case "a": 
            touchesClavier["a"] = false;
            break;
        case "d": 
            touchesClavier["d"] = false;
            break;
    }
}

function boucleJeu(timeStamp){
    calculerPosition();
    dessiner();

    window.requestAnimationFrame(boucleJeu);  // le navigateur appellera boucleJeu() au bon moment
}

function dessiner() {
    // effacer le canevas
    contexte.clearRect(0, 0, canevas.width, canevas.height);

    // affiche le carré
    contexte.fillStyle("orange");
    contexte.fillRect(posX, posY, DIMENSION_CARRE, DIMENSION_CARRE);


}