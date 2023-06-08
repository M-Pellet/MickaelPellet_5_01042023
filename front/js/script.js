// Récuperation des données de l'API avec Fetch
fetch("http://localhost:3000/api/products/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
//Création de la boucle
async function data() {
    const result = await products();
for (let i = 0; i < data.length; i++){
    console.log(result[i]);
    }
}
// Récupération des éléments du DOM pour la création des fiches produits
const sectionItems = document.querySelector("#items"); 
    console.log(document.querySelector("#items"));
const canapeElement = document.createElement("article");
const linkElement = document.createElement("a");
    linkElement.href = "./product.html";
const imageElement = document.createElement("img");
    imageElement.src = data[i].imageUrl;




