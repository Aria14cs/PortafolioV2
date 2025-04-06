interface Prototipo {
  titulo: string;
  descripcion: string;
  imagen: string;
  url: string;
  tecnologias: string[];
}

interface ProjectsProps {
  prototipos: Prototipo[];
}

export const Prototipos = ({ prototipos }: ProjectsProps) => (
  <section className="mt-8">
    <h3 className="text-2xl font-semibold border-b pb-2">Prototipos</h3>
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      {prototipos.map((prototipo) => (
        <div
          key={prototipo.titulo}
          className="border rounded-lg p-4 bg-gray-100 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
        >
          <h4 className="text-lg font-bold">{prototipo.titulo}</h4>
          <p className="text-sm text-gray-700 mt-1">{prototipo.descripcion}</p>

          {/* 🔥 Caja que envuelve la imagen */}
          <div className="mt-3 p-2 border border-gray-300 rounded-md shadow-md bg-white flex justify-center">
            <img
              src={prototipo.imagen}
              alt="Perfil"
              className="rounded-md shadow-md w-30 h-45"
            />
          </div>

          <a
            href={prototipo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium underline mt-3 block text-center"
          >
            Ver Prototipo
          </a>
        </div>
      ))}
    </div>
  </section>
);
