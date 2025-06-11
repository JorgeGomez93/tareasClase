document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { id: 1, nombre: "Huevos", imagen: "assets/img/eggs.png", precio: 2.5 },
    { id: 2, nombre: "Carne", imagen: "assets/img/meat.png", precio: 8.99 },
    { id: 3, nombre: "Leche", imagen: "assets/img/milk.png", precio: 1.2 },
    { id: 4, nombre: "Azúcar", imagen: "assets/img/sugar.png", precio: 1.0 },
    { id: 5, nombre: "Trigo", imagen: "assets/img/wheat.png", precio: 1.5 },
    { id: 6, nombre: "fish", imagen: "assets/img/fish.png", precio: 2.5 },
    { id: 7, nombre: "bananas", imagen: "assets/img/bananas.png", precio: 3 },
    { id: 8, nombre: "fresas", imagen: "assets/img/strawberry.png", precio: 0.8 },
  ];

  const contenedorProductos = document.getElementById("productos");
  const tabla = document.querySelector("#tablaCarrito tbody");
  const totalCompra = document.getElementById("totalCompra");

  const carrito = [];

  productos.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("producto");

    const img = document.createElement("img");
    img.src = p.imagen;
    img.alt = p.nombre;

    const nombre = document.createElement("p");
    nombre.textContent = `Nombre: ${p.nombre}`;

    const precio = document.createElement("p");
    precio.textContent = `Precio: ${p.precio} €`;

    const botonAgregar = document.createElement("button");
    const imgBoton = document.createElement("img");
    imgBoton.src = "assets/img/trolley.png";
    imgBoton.alt = "Agregar";
    imgBoton.classList.add("icono-boton");
    botonAgregar.appendChild(imgBoton);

    botonAgregar.addEventListener("click", () => {
      agregarAlCarrito(p);
    });

    div.appendChild(img);
    div.appendChild(nombre);
    div.appendChild(precio);
    div.appendChild(botonAgregar);

    contenedorProductos.appendChild(div);
  });

  function agregarAlCarrito(producto) {
    const encontrado = carrito.find((item) => item.id === producto.id);

    if (encontrado) {
      encontrado.cantidad++;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarTabla();
  }

  function actualizarTabla() {
    tabla.innerHTML = "";

    carrito.forEach((producto) => {
      const fila = document.createElement("tr");

      const celdaImagen = document.createElement("td");
      const img = document.createElement("img");
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.classList.add("producto-carrito");
      celdaImagen.appendChild(img);
      fila.appendChild(celdaImagen);

      const celdaNombre = document.createElement("td");
      celdaNombre.textContent = producto.nombre;
      fila.appendChild(celdaNombre);

      const celdaPrecio = document.createElement("td");
      celdaPrecio.textContent = `${producto.precio.toFixed(2)}€`;
      fila.appendChild(celdaPrecio);

      // 🔥 NUEVA CELDA: Cantidad separada
      const celdaCantidad = document.createElement("td");
      celdaCantidad.textContent = producto.cantidad;
      fila.appendChild(celdaCantidad);

      const celdaAccion = document.createElement("td");
      const btnEliminar = document.createElement("button");
      const imgEliminar = document.createElement("img");
      imgEliminar.src = "assets/img/cart-minus.png";
      imgEliminar.alt = "Eliminar";
      btnEliminar.appendChild(imgEliminar);

      btnEliminar.addEventListener("click", () => {
        eliminarDelCarrito(producto.id);
      });

      celdaAccion.appendChild(btnEliminar);
      fila.appendChild(celdaAccion);

      tabla.appendChild(fila);
    });

    // 🔥 NUEVO: actualizamos el total
    calcularTotal();
  }

  function eliminarDelCarrito(id) {
    const index = carrito.findIndex((item) => item.id === id);
    if (index !== -1) {
      if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
      } else {
        carrito.splice(index, 1);
      }
      actualizarTabla();
    }
  }

  function calcularTotal() {
    const total = carrito.reduce(
      (sum, item) => sum + item.precio * item.cantidad,
      0
    );
    totalCompra.textContent = `Total: ${total.toFixed(2)}€`;
  }
});
