const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];

console.log('Catalogue des produits:');
for (const produit of produits) {
  console.log(`${produit.nom} - ${produit.prix} MAD`);
}

console.log(' Produits disponibles:');
const disponibles = produits.filter(
  (produit) => produit.stock > 0
);
console.log('Produits disponibles :', disponibles);
console.log('Nombre de produits disponibles :', disponibles.length);


console.log(' \n Valeur du stock');
const valeurStock = produits.reduce(
  (total, produit) => total + produit.prix * produit.stock,0
);
console.log('Valeur totale du stock :', valeurStock, 'MAD');


console.log('\n Prix minimal');
let moinsCher;
if (disponibles.length === 0) {
  console.log('Aucun produit disponible.');
} else {
   moinsCher = disponibles.reduce(
    (minimum, produit) =>
      produit.prix < minimum.prix ? produit : minimum
  );
  
  console.log('Produit le moins cher :', moinsCher.nom);
  console.log('Prix minimal :', moinsCher.prix, 'MAD');
}


console.log('Résumé du catalogue');
const lignes = produits.map((produit) => {
  return `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unités`;
});
for (const ligne of lignes) {
  console.log(ligne);
}

console.log('Validation des données');
function estValide(produit) {
  return (
    typeof produit.prix === 'number' &&
    produit.prix >= 0 &&
    typeof produit.stock === 'number' &&
    produit.stock >= 0
  );
}
for (const produit of produits) {
  console.log(produit.nom, ':', estValide(produit));
}

console.log('\n Déstructuration');
if (moinsCher !== undefined) {
    const { nom, prix } = moinsCher;

    console.log('Produit :', nom);
    console.log('Prix :', prix, 'MAD');
} else {
    console.log('Aucun produit à afficher.');
}


console.log('\n Test catalogue vide');
const produitsVides = [];
const valeurStockVide = produitsVides.reduce(
  (total, produit) => total + produit.prix * produit.stock,0
);
console.log('Valeur totale du stock vide :', valeurStockVide, 'MAD');


module.exports = {
  nombreProduitsDisponibles: disponibles.length,
  valeurTotaleStock: valeurStock
};


