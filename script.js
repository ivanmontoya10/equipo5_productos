//Clases
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

//Creación del arreglo
let productos = [];

function agregarProducto() {
    //Declaración de los campos
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let categoria = document.getElementById("categoria").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let imagenURL = document.getElementById("imagen").value;

    // Crear objeto Producto y agregarlo al array de productos
    let producto = new Producto(productos.length + 1, nombre, descripcion, categoria, precio, imagenURL);
    productos.push(producto);
     
    // Mostrar el producto en la tabla y limpiar los campos
    mostrarProductos();
    limpiarCampos();
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("imagen").value = "";
}

function editarProducto(id) {
    // Buscar el producto correspondiente en el id del arreglo
    let producto = productos.find(producto => producto.id === id);

    // Llenar los campos del formulario con la información del producto seleccionado
    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("imagen").value = producto.imagen;

    // Cambiar el texto del botón de "Agregar Producto" a "Editar Producto"
    let botonAgregarEditar = document.getElementById("agregar-editar-btn");
    botonAgregarEditar.innerText = "Editar Producto";

    //Botón que llama a la función editarProducto()
    botonAgregarEditar.onclick = function() {
        editarProductoExistente(id);
    };
}

function editarProductoExistente(id) {
    // Buscar el producto correspondiente en el id del arreglo
    let indice = productos.findIndex(producto => producto.id === id);

    // Actualizar la información del producto en el array
    productos[indice].nombre = document.getElementById("nombre").value;
    productos[indice].descripcion = document.getElementById("descripcion").value;
    productos[indice].categoria = document.getElementById("categoria").value;
    productos[indice].precio = parseFloat(document.getElementById("precio").value);
    productos[indice].imagen = document.getElementById("imagen").value;
    
    // Mostrar el producto en la tabla y limpiar los campos
    mostrarProductos();
    limpiarCampos();

    // Cambiar el texto del botón de "Editar Producto" a "Agregar Producto"
    let botonAgregarEditar = document.getElementById("agregar-editar-btn");
    botonAgregarEditar.innerText = "Agregar Producto";

    // Cambiar el evento del botón de "Editar Producto" para que llame a la función agregarProducto()
    botonAgregarEditar.onclick = function() {
        agregarProducto();
    };
}

function eliminarProducto(id) {
    // Filtrar el array de productos para obtener los productos que no coinciden con el ID proporcionado y actualiza la tabla
    productos = productos.filter(producto => producto.id !== id);
    mostrarProductos();
}

function mostrarProductos() {
    //Declaración de la tabla
    let tabla = document.getElementById("tablaProductos");

    //Estructura de la tabla
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

    //Itera sobre los productos y agregarlos a la tabla
    productos.forEach(producto => {
        let fila = `
                    <tr>
                        <td>${producto.nombre}</td>
                        <td>${producto.descripcion}</td>
                        <td>${producto.categoria}</td>
                        <td>${producto.precio}</td>
                        <td><img src="${producto.imagen}" alt="Imagen de ${producto.nombre}" style="max-width: 100px;"></td>
                        <td><center><button onclick="editarProducto(${producto.id})">Editar</button><br><br>
                        <button onclick="eliminarProducto(${producto.id})">Eliminar</button></center></td>
                    </tr>
                `;
        //Se van agregando productos y aumenta la cantidad de filas de la tabla
        tabla.innerHTML += fila; 
    });
}