export function formatearPrecio(precio) {
  return (
    precio
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €"
  );
}
