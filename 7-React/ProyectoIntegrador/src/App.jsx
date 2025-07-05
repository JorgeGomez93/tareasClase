import TarjetaContacto from "./components/TarjetaContacto";
import ListaContactos from "./components/ListaContactos";
import "./App.css";

function App() {
  const contactos = [
    {
      id: 1,
      nombre: "Ana García",
      email: "ana@email.com",
      telefono: "+34 123 456 789",
      activo: true,
      avatar: "https://i.pravatar.cc/150?img=16",
    },
    {
      id: 2,
      nombre: "Carlos López",
      email: "carlos@email.com",
      telefono: "+34 987 654 321",
      activo: false,
      avatar: "https://i.pravatar.cc/150?img=17",
    },
    {
      id: 3,
      nombre: "María Silva",
      email: "maria@email.com",
      telefono: "+34 555 123 456",
      activo: true,
      avatar: "https://i.pravatar.cc/150?img=19",
    },
    {
      id: 4,
      nombre: "Juan Pérez",
      email: "juan@email.com",
      telefono: "+34 666 789 123",
      activo: true,
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      nombre: "Laura Martín",
      email: "laura@email.com",
      telefono: "+34 777 888 999",
      activo: false,
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 6,
      nombre: "Jorge",
      email: "vigiasys@gmail.com",
      telefono: "123456789",
      activo: true,
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 7,
      nombre: "Pedro Sánchez",
      email: "pedro@email.com",
      telefono: "+34 222 333 444",
      activo: false,
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      id: 8,
      nombre: "Lucía Fernández",
      email: "lucia@email.com",
      telefono: "+34 444 555 666",
      activo: false,
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    {
      id: 9,
      nombre: "Sofía Torres",
      email: "sofia@email.com",
      telefono: "+34 999 888 777",
      activo: true,
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: 10,
      nombre: "David Ramírez",
      email: "david@email.com",
      telefono: "+34 111 222 333",
      activo: true,
    },
  ];
  return (
    <>
      <h1>Lista de Contactos </h1>

      {/* <TarjetaContacto

      /> */}
      <div className="contenedorTarjetas">
        <ListaContactos contactos={contactos} soloActivos={true} />
      </div>
    </>
  );
}

export default App;
