const Productos = [
    { nombre: 'Manzanas', precio: 200, url:"https://biotrendies.com/wp-content/uploads/2015/06/manzana.jpg", cantidad: 1 },
    { nombre: 'Plátanos', precio: 100, url: "https://saludinteractiva.mx/blog/wp-content/uploads/2022/05/beneficios_del_platano_istock.webp", cantidad: 1 },
    { nombre: 'Leche', precio: 300, url:"https://d3ugyf2ht6aenh.cloudfront.net/stores/093/780/products/serenisima-clasica-751-95fea92d1a27f8e9ab15710914346750-640-0.webp", cantidad: 1 },
    { nombre: 'Pan', precio: 200, url:"https://i.ytimg.com/vi/v8F6yJt1ULo/maxresdefault.jpg", cantidad: 1 },
    { nombre: 'Huevos', precio: 80, url: "https://www.recetasderechupete.com/wp-content/uploads/2020/06/Tipos-de-huevos.jpg", cantidad: 1 },
    { nombre: 'Arroz', precio: 130, url: "https://www.recetasderechupete.com/wp-content/uploads/2019/08/Arroz-blanco.jpg", cantidad: 1 },
    { nombre: 'Azúcar', precio: 100, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdR8QvP4faues5eQbMbO-AzDyIvgBoxP8DCeAMElyUMzykDcYjyn8phjDs4_B9wovJfM&usqp=CAU", cantidad: 1 },
    { nombre: 'Aceite de oliva', precio: 900, url:"https://www.cocinista.es/download/bancorecursos/ingredientes/ingrediente-aceite-oliva-2.jpg", cantidad: 1 },
];


const root = document.getElementById("root")
const carritoHTML = document.getElementById("carrito")
const carrito = []


const actualizarCarrito = ()=>{
    carritoHTML.innerHTML = ""
    carrito.forEach((producto)=>{
        const contenedor = document.createElement("div")
        contenedor.classList.add("producto")
    
        const nombre = document.createElement("h2")
        nombre.textContent = producto.nombre
    
        const precio = document.createElement("p")
        precio.innerText = producto.precio

        const cantidad = document.createElement("p")
        cantidad.innerText = producto.cantidad

        const boton = document.createElement("button")
        boton.textContent ="Eliminar"

        boton.addEventListener("click", ()=>{
            eliminarDelCarrito(producto)
        })

        contenedor.appendChild(nombre)
        contenedor.appendChild(precio)
        contenedor.appendChild(cantidad)
        contenedor.appendChild(boton)

        carritoHTML.appendChild(contenedor)
    })
}

const agregarAlCarrito = (producto)=>{
    if(carrito.includes(producto)){
        producto.cantidad++
    }else{
        carrito.push(producto)
    }
    
    actualizarCarrito()
}

const eliminarDelCarrito = (producto) =>{
    if(producto.cantidad > 1){
        producto.cantidad--
    }else{
        const index = carrito.indexOf(producto)
        carrito.splice(index, 1)
    }

    actualizarCarrito()
}

const fabricaDeCards = (producto) => {
    const contenedor = document.createElement("div")
    contenedor.classList.add("card")
    
    const img = document.createElement("img")
    img.src = producto.url

    const nombre = document.createElement("h3")
    nombre.textContent = producto.nombre

    const precio = document.createElement("p")
    precio.innerText = producto.precio

    const boton = document.createElement("button")
    boton.textContent ="Agregar"
    boton.addEventListener("click", ()=>{
        agregarAlCarrito(producto)
    })

    contenedor.appendChild(nombre)
    contenedor.appendChild(img)
    contenedor.appendChild(precio)
    contenedor.appendChild(boton)

    return contenedor
}



const agregarCards = (productos)=>{
    const cards = productos.map((producto)=>{
        return fabricaDeCards(producto)
    })
    root.append(...cards)
}

agregarCards(Productos)

