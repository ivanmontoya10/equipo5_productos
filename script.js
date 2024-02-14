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
    // Obtener la imagen del nuevo campo de selección de imagen
    let imagenInput = document.getElementById("nueva-imagen");
    let imagen = imagenInput.files[0];

    // Crear objeto Producto y agregarlo al array de productos
    let producto = new Producto(productos.length + 1, nombre, descripcion, categoria, precio, imagen);
    productos.push(producto);
     
    // Mostrar el producto en la tabla
    mostrarProductos();
}
function editarProducto(id) {
    // Buscar el producto correspondiente en el array
    let producto = productos.find(producto => producto.id === id);

    // Llenar los campos del formulario con la información del producto
    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("precio").value = producto.precio;
    // La imagen no se puede llenar por motivos de seguridad
    // Limpiar el campo de selección de imagen
    document.getElementById("nueva-imagen").value = "";

    // Cambiar el texto del botón de "Agregar Producto" a "Editar Producto"
    let botonAgregarEditar = document.getElementById("agregar-editar-btn");
    botonAgregarEditar.innerText = "Editar Producto";

    // Agregar un evento al botón para que llame a la función editarProducto()
    botonAgregarEditar.onclick = function() {
        editarProductoExistente(id);
    };
}

function editarProductoExistente(id) {
    
}

//funcion para eliminar productos
function eliminarProducto(id) {
    // Filtrar el array de productos para obtener los productos que no coinciden con el ID proporcionado
    productos = productos.filter(producto => producto.id !== id);

    // Mostrar los productos actualizados en la tabla
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
                    <th>Acciones</th>
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
                        <td><button onclick="editarProducto(${producto.id})">Editar</button></td>
                        <td><button onclick="eliminarProducto(${producto.id})">Eliminar</button></td>
                    </tr>
                `;
        tabla.innerHTML += fila;
    });
}