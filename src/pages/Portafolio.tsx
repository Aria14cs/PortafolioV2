import { usePortafolio } from "../hooks/usePortafolio";
import { Header } from "../components/header";
import { Proyectos } from "../components/proyectos";
import { Prototipos } from "../components/prototipos";
import { Skills } from "../components/skills";
import { Perfil } from "../components/portafolio";
import { Contacto } from "../components/contacto";

export default function Portfolio() {
  const { data } = usePortafolio();

  return (
    <div className="min-h-screen bg-white text-black px-6 sm:px-10 lg:px-20">
      <Header nombre={data.nombre} />
      <main className="p-6 max-w-4xl mx-auto">
        <Perfil
          perfil_imagen={data.perfil_imagen}
          titulo={data.titulo}
          perfil={data.perfil}
        />
        <Contacto contacto={data.contacto} />
        <Skills habilidades={data.habilidades} />
        <Proyectos proyectos={data.proyectos} />
        <Prototipos prototipos={data.prototipos} />
      </main>
    </div>
  );
}
