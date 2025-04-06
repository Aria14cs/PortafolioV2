interface Project {
  titulo: string;
  descripcion: string;
  imagen: string;
  url: string;
  tecnologias: string[];
}

interface ProjectsProps {
  proyectos: Project[];
}

export const Proyectos = ({ proyectos }: ProjectsProps) => (
  <section className="mt-8">
    <h3 className="text-2xl font-semibold border-b pb-2">Proyectos</h3>
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      {proyectos.map((proyecto, index) => (
        <div
          key={`${proyecto.titulo}-${index}`} // Clave única
          className="border rounded-lg p-4 bg-gray-100 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
        >
          <h4 className="text-lg font-bold">{proyecto.titulo}</h4>
          <p className="text-sm text-gray-700 mt-1">{proyecto.descripcion}</p>

          <div className="mt-3 border rounded-md p-2 bg-white shadow-sm">
            {proyecto.tecnologias.includes("Figma") ? (
              <iframe
                src={proyecto.url}
                className="w-full h-64 border rounded-md"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="rounded-md shadow-md w-full"
              />
            )}
          </div>

          {proyecto.url && (
            <a
              href={proyecto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium underline mt-3 block"
            >
              Ver Proyecto
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);
