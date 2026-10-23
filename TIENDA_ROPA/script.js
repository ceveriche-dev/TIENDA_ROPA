


 let contenedor=document.getElementById("contenedor")

 fetch("https://dummyjson.com/products/category/mens-shirts")
 .then(function(resultado) {
     return resultado.json()
 })

.then(function(datos){
    datos.products.forEach(function(producto){
        let nombre = document.getElementById("h2")
        nombre.textContent=producto.title;

        contenedor.appendChild(nombre)
    })
})