interface ProfileProps {
  perfil_imagen: string;
  titulo: string;
  perfil: string;
}

export const Perfil = ({ perfil_imagen, titulo, perfil }: ProfileProps) => (
  <section className="text-center">
    <img
      src={perfil_imagen}
      alt="Perfil"
      className="w-40 h-40 rounded-full mx-auto shadow-lg border-2 border-gray-300"
    />
    <h2 className="text-3xl font-semibold mt-3">{titulo}</h2>
    <p className="text-gray-700 leading-relaxed mt-2">{perfil}</p>
  </section>
);
