import ListaCompra from "./ListaCompra";
import "./App.css";


function App() {
  // const compra = ["Pan", "Leche", "Huevos", "Carne", "Pescado"];
  const compra3 = [
    {id: 1, nombre:"Ensalada", image: '🥗'},
    {id:2, nombre: "Cerveza", image: '🍺'},
    {id:3, nombre: "Patatas", image: '🍟'},
    {id:4, nombre: "Pan", image: '🥖'},
    {id:5, nombre: "Queso", image: '🧀'},
    {id:6, nombre: "Leche", image: '🥛'},
    {id:7, nombre: "Huevos", image: '🥚'},
    {id:8, nombre: "Pollo", image: '🍗'},
    {id:9, nombre: "Carne", image: '🥩'},
    {id:10, nombre: "Pescado", image: '🐟'},
    {id:11, nombre: "Tomates", image: '🍅'},
    {id:12, nombre: "Lechuga", image: '🥬'},
    {id:13, nombre: "Zanahorias", image: '🥕'},
    {id:14, nombre: "Cebolla", image: '🧅'},
    {id:15, nombre: "Ajo", image: '🧄'},
    {id:16, nombre: "Arroz", image: '🍚'},
    {id:17, nombre: "Pasta", image: '🍝'},
    {id:18, nombre: "Pizza", image: '🍕'},
    // {id:19, nombre: "Hamburguesa", image: '🍔'},
    // {id:20, nombre: "Frutas", image: '🍉🍎🍌'},
    // {id:21, nombre: "Agua", image: '💧'},
    // {id:22, nombre: "Refresco", image: '🥤'},
    // {id:23, nombre: "Café", image: '☕'},
    // {id:24, nombre: "Té", image: '🍵'},
    // {id:25, nombre: "Chocolate", image: '🍫'},
    // {id:26, nombre: "Helado", image: '🍨'},
    // {id:27, nombre: "Tarta", image: '🍰'},
    // {id:28, nombre: "Galletas", image: '🍪'},
    // {id:29, nombre: "Sal", image: '🧂'},
    // {id:30, nombre: "Aceite", image: '🛢️'},
    // {id:31, nombre: "Jabón", image: '🧼'},
    // {id:32, nombre: "Papel higiénico", image: '🧻'},
    // {id:33, nombre: "Cepillo de dientes", image: '🪥'},
    // {id:34, nombre: "Detergente", image: '🧺'},
    // {id:35, nombre: "Bolsas de basura", image: '🗑️'}
];
  return (
    <>
      <ListaCompra objetos={compra3} />
      <ListaCompra objetos={compra3} />
    </>
  );
}

export default App;
