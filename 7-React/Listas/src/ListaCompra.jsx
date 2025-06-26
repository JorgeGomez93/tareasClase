// function ListaCompra({ objetos }) {
//   return (
//     <>
//       <h3>Lista de la compra</h3>
//       <ul>
//         {objetos.map((objeto, index) => (
//           <li key={index}>{objeto}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

function ListaCompra2({ objetos }) {
  return (
    <>
      <h3>Lista de la compra</h3>
      <ul>
        {objetos.map((objeto) => (
          <li key={objeto.id}>{objeto.nombre} {objeto.image}</li>
        ))}
      </ul>
    </>
  );
}
export default ListaCompra2;
