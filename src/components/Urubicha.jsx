import { Link } from "react-router-dom";

export default function Urubicha() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Encabezado con botón de regreso */}
      <header className="bg-gray-900 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Proyecto Urubicha</h1>
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
        >
          ← Volver al inicio
        </Link>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 flex items-center justify-center p-8">
        <h2 className="text-3xl font-semibold">
          Bienvenido a la página de Urubicha
        </h2>
      </main>
    </div>
  );
}
