let count = 1; // `count` est une variable. Stocke un nombre dont nous initialisons la valeur à 1

// `renderImage` est une fonction qui rend l'image d'un pokémon dans le document html
// nous appelons (ou invoquons) cette fonction à chaque fois que nous changeons la valeur de la variable `count`, pour rendre le pokemon correspondant
function renderImage() {
// `document` est une variable globale. Il se compose de toute la structure html de la page Web
  // nous utilisons la méthode `getElementById` pour sélectionner un élément avec un identifiant spécifique
  // aussi, la ligne suivante nous permet d'accéder à l'élément `<div id =" pokemon "> </div>`
  let pokemonContainer = document.getElementById('pokemon');

// la propriété ʻinnerHTML` nous permet de mettre à jour le contenu HTML de l'élément dans lequel il est appliqué, dans ce cas `pokemonContainer`
  pokemonContainer.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

let prev = document.getElementById('previous');
let next = document.getElementById('next');

// ʻonClick` est un enregistreur d'événements qui s'exécute chaque fois que nous cliquons sur l'élément auquel il est appliqué, dans ce cas `prev`
prev.onclick = function() {
// bloc conditionnel: la ligne de code entre les accolades {} sera exécutée si la condition entre parenthèses () est vraie
  if(count > 1) {
    count = count - 1;
    renderImage();
  }
}

next.onclick = function() {
  if(count < 649) {
    count = count + 1;
    renderImage();
  }
}

// nous exécutons ou invoquons la fonction renderImage
renderImage();



