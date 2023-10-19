// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos");
const input = document.getElementById('InputMain');

function displayProductos(productos){
  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

displayProductos(productos);
const botonDeFiltro = document.querySelector("button");
// Agregar event listener al boton 
botonDeFiltro.addEventListener('click',()=>filtrarProductos(input.value));
// Funcion para filtrar por color o tipo
function filtrarProductos(value) {
  // Se remueve los productos existentes en el dom
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  // se filtran los valores por el valor en el input
  const texto = value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );
  displayProductos(productosFiltrados);
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  