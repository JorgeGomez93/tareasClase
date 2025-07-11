import "./App.css";
import ListaProductos from "./components/ListaProductos";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";
import DetalleDelProducto from "./components/DetalleDelProducto";
import CarritoDeCompras from "./components/CarritoDeCompras";

const productos = [
  {
    id: 1,
    nombre: "iPhone 15 Pro",
    precio: 1199,
    imagen:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    categoria: "smartphones",
    disponible: true,
    descripcion: "El iPhone más avanzado con chip A17 Pro y cámara profesional",
    marca: "Apple",
    stock: 15,
    valoracion: 4.8,
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S24 Ultra",
    precio: 1299,
    imagen: "https://m.media-amazon.com/images/I/61oRWx985-L._AC_SL1500_.jpg",
    categoria: "smartphones",
    disponible: true,
    descripcion: "Smartphone con S Pen integrado y cámara de 200MP",
    marca: "Samsung",
    stock: 8,
    valoracion: 4.7,
  },
  {
    id: 3,
    nombre: "Google Pixel 8",
    precio: 699,
    imagen:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    categoria: "smartphones",
    disponible: false,
    descripcion: "Pura experiencia Android con IA avanzada",
    marca: "Google",
    stock: 0,
    valoracion: 4.6,
  },
  {
    id: 4,
    nombre: "OnePlus 12",
    precio: 899,
    imagen:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=300&h=300&fit=crop",
    categoria: "smartphones",
    disponible: true,
    descripcion: "Velocidad extrema con carga rápida de 100W",
    marca: "OnePlus",
    stock: 12,
    valoracion: 4.5,
  },

  // LAPTOPS
  {
    id: 5,
    nombre: "MacBook Air M3",
    precio: 1299,
    imagen:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
    categoria: "laptops",
    disponible: true,
    descripcion: "Ultrabook con chip M3 y hasta 18 horas de batería",
    marca: "Apple",
    stock: 5,
    valoracion: 4.9,
  },
  {
    id: 6,
    nombre: "Dell XPS 13",
    precio: 1099,
    imagen:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    categoria: "laptops",
    disponible: true,
    descripcion: "Laptop premium con pantalla InfinityEdge",
    marca: "Dell",
    stock: 7,
    valoracion: 4.4,
  },
  {
    id: 7,
    nombre: "MacBook Pro 14",
    precio: 1999,
    imagen:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
    categoria: "laptops",
    disponible: false,
    descripcion: "Para profesionales con chip M3 Pro",
    marca: "Apple",
    stock: 0,
    valoracion: 4.8,
  },
  {
    id: 8,
    nombre: "ASUS ROG Strix",
    precio: 1599,
    imagen:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=300&h=300&fit=crop",
    categoria: "laptops",
    disponible: true,
    descripcion: "Laptop gaming con RTX 4060 y 16GB RAM",
    marca: "ASUS",
    stock: 3,
    valoracion: 4.6,
  },

  // TABLETS
  {
    id: 9,
    nombre: "iPad Pro 12.9",
    precio: 1099,
    imagen:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
    categoria: "tablets",
    disponible: true,
    descripcion: "Tablet profesional con chip M2 y Liquid Retina",
    marca: "Apple",
    stock: 10,
    valoracion: 4.7,
  },
  {
    id: 10,
    nombre: "Samsung Galaxy Tab S9",
    precio: 799,
    imagen:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=300&fit=crop",
    categoria: "tablets",
    disponible: true,
    descripcion: "Tablet Android premium con S Pen incluido",
    marca: "Samsung",
    stock: 6,
    valoracion: 4.5,
  },
  {
    id: 11,
    nombre: "iPad Air",
    precio: 599,
    imagen:
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=300&h=300&fit=crop",
    categoria: "tablets",
    disponible: true,
    descripcion: "Equilibrio perfecto entre potencia y precio",
    marca: "Apple",
    stock: 14,
    valoracion: 4.6,
  },

  // AUDIO
  {
    id: 12,
    nombre: "AirPods Pro 2",
    precio: 249,
    imagen:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop",
    categoria: "audio",
    disponible: true,
    descripcion: "Auriculares con cancelación activa de ruido",
    marca: "Apple",
    stock: 20,
    valoracion: 4.8,
  },
  {
    id: 13,
    nombre: "Sony WH-1000XM5",
    precio: 399,
    imagen:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    categoria: "audio",
    disponible: true,
    descripcion: "Auriculares over-ear con la mejor cancelación de ruido",
    marca: "Sony",
    stock: 9,
    valoracion: 4.9,
  },
  {
    id: 14,
    nombre: "Samsung Galaxy Buds3",
    precio: 179,
    imagen:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop",
    categoria: "audio",
    disponible: false,
    descripcion: "Auriculares inalámbricos con carga rápida",
    marca: "Samsung",
    stock: 0,
    valoracion: 4.4,
  },
  {
    id: 15,
    nombre: "JBL Charge 5",
    precio: 129,
    imagen:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    categoria: "audio",
    disponible: true,
    descripcion: "Altavoz Bluetooth resistente al agua",
    marca: "JBL",
    stock: 25,
    valoracion: 4.3,
  },

  // ACCESORIOS
  {
    id: 16,
    nombre: "Apple Watch Series 9",
    precio: 399,
    imagen:
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=300&h=300&fit=crop",
    categoria: "accesorios",
    disponible: true,
    descripcion: "Smartwatch con GPS y monitoreo de salud",
    marca: "Apple",
    stock: 11,
    valoracion: 4.7,
  },
  {
    id: 17,
    nombre: "Cargador MagSafe",
    precio: 39,
    imagen:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHXH3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1707852650047",
    categoria: "accesorios",
    disponible: true,
    descripcion: "Carga inalámbrica magnética para iPhone",
    marca: "Apple",
    stock: 30,
    valoracion: 4.2,
  },
  {
    id: 18,
    nombre: "Anker PowerBank 20000mAh",
    precio: 59,
    imagen: "https://m.media-amazon.com/images/I/613ceNersgL._AC_SY879_.jpg",
    categoria: "accesorios",
    disponible: true,
    descripcion: "Batería externa de alta capacidad con carga rápida",
    marca: "Anker",
    stock: 18,
    valoracion: 4.6,
  },

  // GAMING
  {
    id: 19,
    nombre: "PlayStation 5",
    precio: 499,
    imagen:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop",
    categoria: "gaming",
    disponible: false,
    descripcion: "Consola de nueva generación con SSD ultra rápido",
    marca: "Sony",
    stock: 0,
    valoracion: 4.9,
  },
  {
    id: 20,
    nombre: "Xbox Series X",
    precio: 499,
    imagen:
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=300&h=300&fit=crop",
    categoria: "gaming",
    disponible: true,
    descripcion: "La consola Xbox más potente de la historia",
    marca: "Microsoft",
    stock: 4,
    valoracion: 4.8,
  },
  {
    id: 21,
    nombre: "Nintendo Switch OLED",
    precio: 349,
    imagen:
      "https://m.media-amazon.com/images/I/71eVf1+jn6L._AC_SX342_SY445_.jpg",
    categoria: "gaming",
    disponible: true,
    descripcion: "Consola híbrida con pantalla OLED vibrante",
    marca: "Nintendo",
    stock: 13,
    valoracion: 4.7,
  },
  {
    id: 22,
    nombre: "Canapé abatible tapizado",
    precio: 229,
    imagen: "/canape.jpg", // imagen representativa desde Amazon
    categoria: "accesorios",
    disponible: true,
    descripcion:
      "Canapé abatible con gran capacidad de almacenamiento y apertura frontal.",
    marca: "DreamBase",
    stock: 7,
    valoracion: 4.6,
  },
  {
    id: 23,
    nombre: "Colchón viscoelástico Premium",
    precio: 289,
    imagen: "/colchon.jpg",
    categoria: "accesorios",
    disponible: true,
    descripcion:
      "Colchón viscoelástico de alta densidad con tecnología de descanso y tejido transpirable.",
    marca: "SleepTech",
    stock: 10,
    valoracion: 4.8,
  },
  {
    id: 24,
    nombre: "Armario ropero 4 puertas blanco",
    precio: 349,
    imagen: "/armario3pts.jpg",
    categoria: "accesorios",
    disponible: true,
    descripcion:
      "Amplio armario ropero con 4 puertas batientes y estantes interiores.",
    marca: "HomeSpace",
    stock: 5,
    valoracion: 4.5,
  },
];
function App() {
  const [nombre, setNombre] = useState("");
  const [clicado, setClicado] = useState(null);
  const [productosDelCarrito, setAgregarCarrito] = useState([]);
  const [carritoVisible, setCarritoVisible] = useState(false);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  // 🔍 Filtro combinado: por texto Y categoría
  const productosFiltrados = productos.filter((producto) => {
    const coincideTexto = producto.nombre
      .toLowerCase()
      .includes(nombre.trim().toLowerCase());

    const coincideCategoria =
      categoriaSeleccionada === "" || // si no hay filtro
      categoriaSeleccionada === "all" || // si es "All"
      producto.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase();

    return coincideTexto && coincideCategoria;
  });

  const eliminarDelCarrito = (id) => {
    setAgregarCarrito((prev) => prev.filter((p, index) => index !== id));
  };

  return (
    <>
      <NavBar
        setNombre={setNombre}
        setCategoria={setCategoriaSeleccionada}
        productosDelCarrito={productosDelCarrito}
        setCarritoVisible={setCarritoVisible}
        setClicado={setClicado}
      />

      {productosFiltrados.length === 0 ? (
        <p className="NotFound">
          <img src="/notFound.png" alt="NotFound" />
          Lo sentimos, no hemos podido encontrar ningún resultado de{" "}
          <span id="nombre">{nombre}</span>
        </p>
      ) : (
        <div className={`contenido ${clicado ? "con-aside" : ""}`}>
          <ListaProductos
            productos={productosFiltrados}
            setClicado={(producto) => {
              setClicado(producto);
              setCarritoVisible(false); // ← Cierra el carrito si abres un detalle
            }}
            setAgregarCarrito={setAgregarCarrito}
          />
          <DetalleDelProducto
            producto={clicado}
            setClicado={setClicado}
            setAgregarCarrito={setAgregarCarrito}
          />

          <CarritoDeCompras
            productosDelCarrito={productosDelCarrito}
            carritoVisible={carritoVisible}
            eliminarDelCarrito={eliminarDelCarrito}
          />
        </div>
      )}
      <Footer className={clicado ? "ocultar-footer" : ""} />
    </>
  );
}

export default App;
