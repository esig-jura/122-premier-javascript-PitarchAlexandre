/**
 * Démo mon premier JavaScript
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-02-07
 */

'use strict'; // Active le mode strict du JavaScript

const premierP = document.querySelector('p');
const premierUl = document.querySelector('ul');
const tousLesStrongs = document.querySelectorAll('strong');
console.log(premierP, premierUl,tousLesStrongs);

premierP.innerText = 'Bonjour le monde !';
premierUl.style.backgroundColor = 'yellow';

// Pacrours le tableau de tousLesStrongs
for (let i = 0; i < tousLesStrongs.length; i++){
    tousLesStrongs[i].style.color = 'red';
    tousLesStrongs[i].innerText = 'toto';
}

// Même chose avec les for...of
for (let element of tousLesStrongs){
    element.style.textDecoration = 'overline' ;
}

/* Gestion de la liste des courses */
const txtArticle = document.querySelector('#article');
const btAjouter = document.querySelector('button.ajouter');
const ulListe = document.querySelector('ul.liste');

console.log(txtArticle, btAjouter, ulListe);

// Fonction Ajouter
function ajouter () {
    // Affiche le texte saisi dans le champ
   // alert(txtArticle.value);
    // ancienne méthode --> ulListe.innerHTML += '<li>' + txtArticle.value + '</li>';
    // Nouvelle méthode
    ulListe.innerHTML += `<li>
                            ${txtArticle.value} 
                          </li>`;
}
// Au clic du boutton appelle la fonction ajouter
// btAjouter.onclick = ajouter;
//btAjouter.addEventListener('click', ajouter);

// Même chose avec un arrow function anonyme

// Ecoute la frappe du clavier dans le champs de texte
txtArticle.addEventListener('keypress', function (event) {
    // Affiche chaque touche utilisé dans la console
    console.log(event.key);
    // Si la touche est "ENTER"
    if (event.key === 'Enter') {
        btAjouter.click(); // Simule le clic du bouton Ajouter
    }
});

