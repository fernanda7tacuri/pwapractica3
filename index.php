<?php
// Incluir el arreglo de productos
include('productos.php');
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda Pastel - Clase Práctica 3</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <header>
        <h1>🛍️ Bienvenido a mi Tienda Pastel </h1>
        <p>Explora nuestros productos y agrégalos a tu carrito 💖</p>
    </header>

    <main>
        <section class="productos">
            <?php foreach ($productos as $p): ?>
                <div class="tarjeta">
                    <img src="imagenes/<?php echo $p['imagenes']; ?>" alt="<?php echo $p['nombre']; ?>">
                    <h2><?php echo $p['nombre']; ?></h2>
                    <p class="descripcion"><?php echo $p['descripcion']; ?></p>
                    <p class="precio">$<?php echo number_format($p['precio'], 2); ?></p>
                    <button class="btn-agregar" onclick="agregarCarrito('<?php echo $p['nombre']; ?>')">Agregar al carrito</button>
                </div>
            <?php endforeach; ?>
        </section>

        <section id="carrito" class="carrito">
            <h2>🛒 Carrito de compras</h2>
            <ul id="listaCarrito"></ul>
        </section>
    </main>

    <footer>
        <p>© 2025 Tienda Pastel | Desarrollado por Fernanda 🌸</p>
    </footer>

    <script src="scripts/practica3.js"></script>
</body>
</html>
