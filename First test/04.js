const misFrutas = ["Anana", "Manzana", "Pera", "Banana", "Naranja"];
let showFruits = function() {
  misFrutas.forEach(fruta => console.log(fruta));
}

showFruits();
misFrutas.push("uva","Sandia", "Melon");
showFruits();