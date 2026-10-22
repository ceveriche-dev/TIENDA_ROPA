
// mi primer boton haci se hace 

let boton=document.getElementById("boton")

let contenedor=document.getElementById("contenedor")

boton.addEventListener("click", function(){

    let mensaje=document.createElement("p")

    mensaje.textContent=("cristian ceveriche")

    contenedor.appendChild(mensaje)

})

// cuando undo en el boton se ponga mas grande lo que tengo a dentro

let boton = document.getElementById("boton");

let mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {

    mensaje.classList.add("activo");

});

// Ahora vamos con setAttribute(), y este sí nos va a servir directamente cuando lleguemos a las imágenes de la API.

let imagen = document.getElementById("producto");

imagen.setAttribute("src", "imagen.jpg");


//ARRAY

let producto1 = {
    nombre: "camisa",
    precio: 50000,
    categoria: "ropa"
};

let producto2 = {
    nombre: "zapatos",
    precio: 80000,
    categoria: "calzado"
};

let producto3 = {
    nombre: "pantalon",
    precio: 60000,
    categoria: "ropa"
};


//Vamos a repasar forEach() porque lo vamos a usar muchísimo cuando la API nos entregue varios productos.

let productos = [
    producto1,
    producto2,
    producto3
]
productos.forEach(function(producto) {
    console.log(producto.nombre);
});

//Ahora sí entramos a fetch(), que es una de las partes más importantes de nuestra ruta.

fetch("https://fakestoreapi.com/products")

//Ahora agreguemos then()

fetch("https://fakestoreapi.com/products")
    .then(function(respuesta) {
        console.log(respuesta);
    });


    //*El siguiente paso es .json() Cambia solamente lo que tienes dentro del then por esto:

    fetch("https://fakestoreapi.com/products")
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(datos) {
        console.log(datos);
    });

let contenedor = document.getElementById("productos");

fetch("https://fakestoreapi.com/products")
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(datos) {

        datos.forEach(function(producto) {

            let nombre = document.createElement("h2");

            nombre.textContent = producto.title;

          //para traer los nombres de las apis de los productos
          
            let contenedor = document.getElementById("contenedor");

fetch("https://dummyjson.com/products/category/mens-shirts")
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(datos) {
        console.log(datos.products);

        datos.products.forEach(function(producto) {
            let nombre = document.createElement("h2");

            nombre.textContent = producto.title;

            contenedor.appendChild(nombre);
        });
    });


    const contenedor = document.getElementById("contenedor");
const mensaje = document.getElementById("mensaje");

// 1. Consumir la API
fetch("https://dummyjson.com/products/category/mens-shirts")

    // 2. Convertir la respuesta a JSON
    .then(function(respuesta) {
        if (!respuesta.ok) {
            throw new Error("No se pudieron cargar los productos");
        }

        return respuesta.json();
    })

    // 3. Recibir los datos de los productos
    .then(function(datos) {
        mensaje.textContent = "";

        // 4. Recorrer cada producto
        datos.products.forEach(function(producto) {

            // Crear la tarjeta
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("tarjeta");

            // Crear la imagen
            const imagen = document.createElement("img");
            imagen.src = producto.thumbnail;
            imagen.alt = producto.title;

            // Crear el nombre
            const nombre = document.createElement("h3");
            nombre.textContent = producto.title;

            // Crear la categoría
            const categoria = document.createElement("p");
            categoria.textContent = producto.category;
            categoria.classList.add("categoria");

            // Crear el precio
            const precio = document.createElement("p");
            precio.textContent = "$" + producto.price.toFixed(2);
            precio.classList.add("precio");

            // Crear el botón
            const boton = document.createElement("button");
            boton.textContent = "Agregar al carrito";

            boton.addEventListener("click", function() {
                alert("Agregaste: " + producto.title);
            });

            // Agregar elementos a la tarjeta
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(nombre);
            tarjeta.appendChild(categoria);
            tarjeta.appendChild(precio);
            tarjeta.appendChild(boton);

            // Mostrar la tarjeta en la tienda
            contenedor.appendChild(tarjeta);
        });
    })

    // 5. Manejar errores
    .catch(function(error) {
        mensaje.textContent = "Error al cargar los productos.";
        console.log(error);
    });



    let contenedor= document.getElementById("contenedor")

    fetch("#")

    .then(function(resultado){
        resultado return.json()
    })
    .then(function(datos){

        datos.product
    })