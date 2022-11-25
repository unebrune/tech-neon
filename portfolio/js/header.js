
const index = parseInt(document.getElementById('nav').getAttribute('data-index'));
let logo = "./img/logoTN (1).png", img = ['./img/coeur.png', './img/panier.png'],

header = [{
    href: "index.html",
    name: "Home",
    index: 1
},{
    href: "neon.html",
    name: "Néon",
    index: 2
},{
    href: "neoncusto.html",
    name: "Néon customisable",
    index: 3
},{
    href:"Quisommesnous.html",
    name: "Qui somme nous ?",
    index: 4

},{
    href: "contacter.html",
    name: "Contacter",
    index: 5
},{
    href: "identifier.html",
    name: "S'Identifier",
    index: 6
}]

switch (index) {
    case 1:
        header.filter(function (el){return el.index > 1}).
        map(el => el.href = "./html/"+el.href);
        break;
    default:
        header.filter(function (el){return el.index == 1}).
        map(el => el.href = "../index.html");
        logo = "../img/logoTN (1).png", img = ['../img/coeur.png', '../img/panier.png'];
        break;
}

/* On recupere l'header */

const head = document.getElementById('nav');

const logoV = document.createElement('img');
logoV.setAttribute("id", "logo"); /* attribuer un id */
logoV.setAttribute("src", logo ); /* Ne pas mettre les guillemets car pas string */
head.appendChild(logoV); /* Place à l'interieur | Classée de haut en bas*/

const ul = document.createElement('ul');
ul.setAttribute("id", "HeaderList"); /* attribuer un id */

const liste = header.map((v) => {return v.index === index ? '<li><a id="selected" href="'+v.href+'">'+v.name+'</a></li>' : '<li><a href="'+v.href+'">'+v.name+'</a></li>'})
/* créer les li 
Ce qui va nous permettre de recuperer les noms qu'on a nommé v | Modifier les valeurs à l'interieur*/
liste.forEach(e => {
    ul.innerHTML += e; /*Placer a l'interieur des li */
});


head.appendChild(ul); // Créer l'ul

const div = document.createElement("div");
div.setAttribute("id", "mainIcon");
img.forEach(e =>{
    const i= document.createElement("div"); // Pour chaque élément du tableau tu créer img
    i.innerHTML = '<img src="'+e+'"/>';
    div.appendChild(i);
});

head.appendChild(div);

//---------------------------------------------------------------------//

let Yline = 0;
window.onscroll = function() {
    if (window.pageYOffset < Yline) {
        head.classList.remove("hide");
    } else {
        head.classList.add("hide");
    }
    Yline = window.pageYOffset;
}

