let canevas;
let contexte;
let posX;
let posY;
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
const LARGEUR_JOUEUR = 35;
const HAUTEUR_JOUEUR = 35;
const DIMENSION_OBJET = 50;

window.onload = function () {
    //obtient element texte avec font qu'on peut alors utiliser
    document.getElementById("chargeTexte").style.display = "none";

    window.addEventListener("keydown", toucheAppuyee);
    window.addEventListener("keyup", toucheRelachee);

    canevas = document.getElementById('ZoneJeu');
    contexte = canevas.getContext('2d');
    contexte.canvas.width = window.innerWidth - window.innerWidth * 0.01;
    contexte.canvas.height = window.innerHeight - window.innerHeight * 0.01;

    p1X = (canevas.width - LARGEUR_JOUEUR) / 2;
    p1Y = (canevas.height - HAUTEUR_JOUEUR) / 2;
    p2X = (canevas.width - LARGEUR_JOUEUR) / 2;
    p2Y = (canevas.height - HAUTEUR_JOUEUR) / 2;

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

function calculerPosition(){
    console.log();
}

function dessiner() {
    console.log("0");
    dessinerBG();
    // effacer le canevas
    contexte.clearRect(0, 0, canevas.width - 1, canevas.height - 1);

    // affiche le carré
    contexte.fillStyle = "orange";
    contexte.fillRect(0, 0, canevas.width - 1, canevas.height - 1);


}

function dessinerBG(){
    let repeatX = Math.round(contexte.canvas.width / 10);
    let repeatY = Math.round(contexte.canvas.width / 10);
    for(let indexX = 0; indexX < repeatX; indexX++){

    }
}