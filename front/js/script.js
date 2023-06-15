// Récuperation des données de l'API avec Fetch
fetch("http://localhost:3000/api/products/")
    .then(response => response.json())
    .then(data => requestApi(data))
    .catch(error => console.error(error));

// Déclaration de la fonction (template DOM + boucle)
function requestApi(data) {
    for (let i = 0; i < data.length; i++) {
        // Code de géneration du DOM + variable
        let sectionItems = document.querySelector("#items");
        let linkElement = document.createElement("a");
        sectionItems.appendChild(linkElement);
        linkElement.href = `./product.html?id=${data[i]._id}`;

        // Ecrire le reste du code pour générer le DOM ici
    }
}







//Création de la boucle
// async function data() {
//     const result = await products();
// for (let i = 0; i < data.length; i++){
//     console.log(result[i]);
//     }
// }
// Récupération des éléments du DOM pour la création des fiches produits
// Element --> section
const sectionItems = document.querySelector("#items"); 
    console.log(document.querySelector("#items"));

//Element --> a
// --> const = variable qui est appelé productLink et document.createElement('a') vas créer l'element 'a' se trouvant dans 'index.html'
const productLink = document.createElement('a');
// appenchild = ajoute un enfant au noeud (parent) - ajoute un produit a la liste tant qu'il y a un ID.
sectionItems.appendChild(productLink);
// création du lien pour chercher les produits dans le le fichier Json via l'API
productLink.href = './product.html?id=${data[i]._id}';

//Element --> article
// --> const = variable qui est appelé productArticle et document.createElement('article') vas créer l'element 'article' se trouvant dans 'index.html'
const productArticle = document.createElement('article');
// appenchild = ajoute un enfant au noeud (parent) - ajoute un produit a la liste tant qu'il y a un ID.
productLink.appendChild(productArticle);

//Element --> img
// --> const = variable qui est appelé productImg et document.createElement('img') vas créer l'element 'img' se trouvant dans 'index.html'
const productImg = document.createElement('img');
// appenchild = ajoute un enfant au noeud (parent) - ajoute un produit a la liste tant qu'il y a un ID.
productArticle.appendChild(productImg);
// vas chercher l'image dans le fichier Json via l'API en fonction de son ID
productImg.src = data[i].imageUrl;
// vas chercher le texte lié a l'image dans le fichier Json via l'API en fonction de son ID
productImg.alt = data[i].altTxt;









