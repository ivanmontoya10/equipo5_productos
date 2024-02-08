class Imagen {
    constructor(id, url, producto) {
        this.id = id;
        this.url = url;
        this.producto = producto;
    }
}

class Producto {
    constructor(id, nombre, descripcion, categoria, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
    }
}

class Categoria {
    constructor(id, nombre, subcategoria) {
        this.id = id;
        this.nombre = nombre;
        this.subcategoria = subcategoria;
    }
}

let productos = [];

function agregarProducto() {
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let categoria = document.getElementById("categoria").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let imagenInput = document.getElementById("imagen");
    let imagen = imagenInput.files[0];

    // Crear objeto Producto y agregarlo al array de productos
    let producto = new Producto(productos.length + 1, nombre, descripcion, categoria, precio, imagen);
    productos.push(producto);

    // Mostrar el producto en la tabla
    mostrarProductos();
}

function mostrarProductos() {
    let tabla = document.getElementById("tablaProductos");

    // Limpiar la tabla
    tabla.innerHTML = `
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                </tr>
            `;

    // Iterar sobre los productos y agregarlos a la tabla
    productos.forEach(producto => {
        let fila = `
                    <tr>
                        <td>${producto.nombre}</td>
                        <td>${producto.descripcion}</td>
                        <td>${producto.categoria}</td>
                        <td>${producto.precio}</td>
                        <td><img src="${URL.createObjectURL(producto.imagen)}" alt="Imagen de ${producto.nombre}" style="max-width: 100px;"></td>
                    </tr>
                `;
        tabla.innerHTML += fila;
    });
}