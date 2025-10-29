// Arreglo para guardar los productos agregados al carrito
let carrito = [];

// Función que se llama al hacer clic en "Agregar al carrito"
function agregarCarrito(nombreProducto) {
    // Agrega el producto al arreglo
    carrito.push(nombreProducto);

    // Muestra alerta personalizada
    mostrarMensaje(`✅ "${nombreProducto}" agregado al carrito.`);

    // Actualiza la lista en pantalla
    mostrarCarrito();
}

// Función para mostrar el carrito en el HTML
function mostrarCarrito() {
    const lista = document.getElementById('listaCarrito');
    lista.innerHTML = ''; // Limpiar lista antes de mostrar

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = producto;

        // Crear botón de eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = '❌';
        btnEliminar.style.marginLeft = '10px';
        btnEliminar.style.background = '#f582ae'; // rosa pastel
        btnEliminar.style.border = 'none';
        btnEliminar.style.borderRadius = '5px';
        btnEliminar.style.padding = '2px 6px';
        btnEliminar.style.cursor = 'pointer';
        btnEliminar.style.color = '#fff';

        btnEliminar.onclick = function() {
            eliminarProducto(index);
        };

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
    const eliminado = carrito.splice(index, 1);
    mostrarMensaje(`❌ "${eliminado}" eliminado del carrito.`);
    mostrarCarrito();
}

// Función para mostrar un mensaje temporal en pantalla
function mostrarMensaje(texto) {
    const mensaje = document.createElement('div');
    mensaje.textContent = texto;
    mensaje.style.position = 'fixed';
    mensaje.style.top = '20px';
    mensaje.style.right = '20px';
    mensaje.style.backgroundColor = '#8bd3dd'; // celeste pastel
    mensaje.style.color = '#001858'; // azul oscuro
    mensaje.style.padding = '10px 15px';
    mensaje.style.borderRadius = '10px';
    mensaje.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    mensaje.style.fontWeight = '600';
    mensaje.style.zIndex = '1000';
    document.body.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 2000); // desaparece después de 2 segundos
}
