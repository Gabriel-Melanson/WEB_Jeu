let canevas;
let contexte;

//donnees joueur et objet
let dimensionP = {
    "hauteur": 50,
    "largeur": 30
};
let p1X, p1Y;
let p2X, p2Y;
const VITESSE_JOUEUR = 400;//en pixels/seconde

const DIMENSION_OBJET = {
    "hauteur": 50,
    "largeur": 30
};

//variables temporelles
let deltaTime;
let tempsPrecedent;
let tempsEcoule;
let tempsInital;

//array de touches pour enregister les inputs des joueurs
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

//fonction intiale qui commence le projet
window.onload = function () {
    //obtient element texte avec font qu'on peut alors utiliser
    document.getElementById("chargeTexte").style.display = "none";

    //activation des listener d'evenements qui traquent les inputs des touches
    window.addEventListener("keydown", toucheAppuyee);
    window.addEventListener("keyup", toucheRelachee);

    //obtention du canevas et des dimensions du canevas
    canevas = document.getElementById('ZoneJeu');
    contexte = canevas.getContext('2d');
    contexte.canvas.width = window.innerWidth;
    contexte.canvas.height = window.innerHeight;

    //placement initial des joueurs
    let distanceCentre = canevas.width * 0.3;
    p1X = (canevas.width - dimensionP["largeur"]) / 2 + distanceCentre;
    p1Y = (canevas.height - dimensionP["hauteur"]) / 2;
    p2X = (canevas.width - dimensionP["largeur"]) / 2 - distanceCentre;
    p2Y = (canevas.height - dimensionP["hauteur"]) / 2;

    window.requestAnimationFrame(boucleJeu);  // le navigateur appellera boucleJeu() au bon moment
}

//evenement qui active lors de l'appui de touches
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

//evenement qui active lorsque les touches sont levees
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

//boucle centrale du jeu qui joue a chaque frame
function boucleJeu(timeStamp){
    calculerTemps(timeStamp);
    calculerPosition();
    dessiner();

    window.requestAnimationFrame(boucleJeu);  // le navigateur appellera boucleJeu() au bon moment
}

//fonction pour maintenir la vitesse du jeu peu importe le fps du canevas
function calculerTemps(tempsPresent){
    //valeurs lors du premier appel
    if(tempsInital == undefined){
        tempsInital = tempsPresent;
        tempsPrecedent = tempsPresent;
    }

    tempsEcoule = tempsInital - tempsPresent;
    deltaTime = (tempsPresent - tempsPrecedent) * 0.001;//en secondes au lieu de millisecondes

    tempsPrecedent = tempsPresent;
    console.log(deltaTime);
}

let ass = 0;
function calculerPosition(){
    ////////////////////////////////////////////////////////////////////
    //JOUEUR 1
    let velociteP1 = {
        "horizontal": 0,
        "vertical": 0
    };
    //velocite selon input
    if(touchesClavier["ArrowLeft"]){
        velociteP1["horizontal"] -= VITESSE_JOUEUR;
    }
    if(touchesClavier["ArrowRight"]){
        velociteP1["horizontal"] += VITESSE_JOUEUR;
    }
    if(touchesClavier["ArrowUp"]){
        velociteP1["vertical"] -= VITESSE_JOUEUR;
    }
    if(touchesClavier["ArrowDown"]){
        velociteP1["vertical"] += VITESSE_JOUEUR;
    }

    //si le joueur1 se deplace en diagonale
    if(velociteP1["horizontal"] != 0 && velociteP1["vertical"] != 0){
        velociteP1["horizontal"] = velociteP1["horizontal"] * 0.7;
        velociteP1["vertical"] = velociteP1["vertical"] * 0.7;
    }

    p1X += velociteP1["horizontal"] * deltaTime;
    if(p1X < 0){
        p1X = 0;
    }
    if(p1X > canevas.width - dimensionP["largeur"]){
        p1X = canevas.width - dimensionP["largeur"];
    }
    if(p1Y < 0){
        p1Y = 0;
    }
    if(p1Y > canevas.height - dimensionP["hauteur"]){
        p1Y = canevas.height - dimensionP["hauteur"];
    }

    p1Y += velociteP1["vertical"] * deltaTime;
    if(p2X < 0){
        p2X = 0;
    }
    if(p2X > canevas.width - dimensionP["largeur"]){
        p2X = canevas.width - dimensionP["largeur"];
    }
    if(p2Y < 0){
        p2Y = 0;
    }
    if(p2Y > canevas.height - dimensionP["hauteur"]){
        p2Y = canevas.height - dimensionP["hauteur"];
    }

    ////////////////////////////////////////////////////////////////
    //JOUEUR 2
    let velociteP2 = {
        "horizontal": 0,
        "vertical": 0
    };
    //velocite selon input
    if(touchesClavier["a"]){
        velociteP2["horizontal"] -= VITESSE_JOUEUR;
    }
    if(touchesClavier["d"]){
        velociteP2["horizontal"] += VITESSE_JOUEUR;
    }
    if(touchesClavier["w"]){
        velociteP2["vertical"] -= VITESSE_JOUEUR;
    }
    if(touchesClavier["s"]){
        velociteP2["vertical"] += VITESSE_JOUEUR;
    }

    //si le joueur2 se deplace en diagonale
    if(velociteP2["horizontal"] != 0 && velociteP2["vertical"] != 0){
        velociteP2["horizontal"] = velociteP2["horizontal"] * 0.75;
        velociteP2["vertical"] = velociteP2["vertical"] * 0.75;
    }

    p2X += velociteP2["horizontal"] * deltaTime;
    p2Y += velociteP2["vertical"] * deltaTime;
}

function dessiner() {
    // effacer le contenu de la frame precedente
    contexte.clearRect(0, 0, canevas.width - 1, canevas.height - 1);

    // affiche un bg orange
    contexte.fillStyle = "orange";
    contexte.fillRect(0, 0, canevas.width - 1, canevas.height - 1);
    dessinerBG();

    //dessiner le joueur1 (code temporaire)
    contexte.fillStyle = "yellow";
    contexte.fillRect(p1X, p1Y, dimensionP["largeur"], dimensionP["hauteur"]);

    //dessiner le joueur2 (code temporaire)
    contexte.fillStyle = "purple";
    contexte.fillRect(p2X, p2Y, dimensionP["largeur"], dimensionP["hauteur"]);

}

function dessinerBG(){
    let tuileCouleur = false;
    let dimensionTuile = 20;
    let repeatX = Math.round(contexte.canvas.width / dimensionTuile) + 1;
    let repeatY = Math.round(contexte.canvas.width / dimensionTuile) + 1;

    for(let indexX = 0; indexX < repeatX; indexX++){
        //lorsque l'indexe de la colonne est paire, commencer par une tuile non-coloree
        if(indexX % 2 == 0){
            tuileCouleur = false;
        }else{
            tuileCouleur = true;
        }
        for(let indexY = 0; indexY < repeatY; indexY++){
            //inverse la valeur par tuile
            tuileCouleur = !tuileCouleur;

            if(tuileCouleur){
                contexte.fillStyle = "darkgreen";
            }else{
                contexte.fillStyle = "black";
            }
            contexte.fillRect(indexX * dimensionTuile, indexY * dimensionTuile, dimensionTuile, dimensionTuile);
        }
    }
}