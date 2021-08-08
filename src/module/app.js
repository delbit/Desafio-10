//Función para generar un numero aleatorio partiendo de un intervalo.
const random = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

//Generando el contenido de la Item.
const contenido = () => {
  let obj = {
    title: `Producto ${Math.floor(random(1, 10))}`,
    price: `${random(0.0, 9999.99).toFixed(2)}`,
    thumbnail: `https://picsum.photos/id/${Math.floor(random(1, 200))}/200/200`,
    id: ``,
  };
  return obj;
};

//stringify el contenido para el Item.
const objToJSON = (contenido) => {
  return JSON.stringify(contenido, undefined, 2);
};

export { random, contenido, objToJSON };
