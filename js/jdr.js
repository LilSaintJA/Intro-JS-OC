/*
var Personnage = {
    nom: "",
    sante: 0,
    force: 0,
    xp: 0,
    
    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " points de force et " + this.xp + " points d'expérience";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.nom = "Tatooine";
perso1.sante = 150;
perso1.force = 25;
perso1.xp = 0;

var perso2 = Object.create(Personnage);
perso2.nom = "Hoth";
perso2.sante = 200;
perso2.force = 20;
perso2.xp = 5;

console.log(perso1.decrire());
console.log(perso2.decrire());
*/

/*
Initialisation des personnage
*/
/*
var Personnage = {
    // Initialisation du personnage
    init: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
    },
    
    // Renvoie la description du personnage
      decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " points de force et " + this.xp + " points d'expérience";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.init("Tatooine", 150, 25);

var perso2 = Object.create(Personnage);
perso2.init("Hoth", 200, 20);

console.log(perso1.decrire());
console.log(perso2.decrire());
*/

/*
Création des adversaires
*/

var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    }
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0;
};
// Renvoie la description du joueur
Joueur.decrire = function () {
      var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " points de force et " + this.xp + " points d'expérience";
        return description;
};

var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Tatooine", 150, 15);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Hoth", 200, 20);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("Barthandelus", 40, 20, "Robot", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);