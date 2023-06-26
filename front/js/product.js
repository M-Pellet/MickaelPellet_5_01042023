// async function asyncData(){
//     const productID = getProductId()

// }

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const urlId = 'http://localhost:3000/api/products' + `/${id}`


// PANIER (LocalStoprage)
// - Ajouter les items dans un tableau avec l'option distincte (couleur)
// - Stocker les informations du produit (reprendre les valeurs indiquées dans le panier)
// - Gérer les quantitées si on rajoute des quantités sur le même produit (incrémentation du nombre de produit)