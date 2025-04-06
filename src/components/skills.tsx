interface SkillsProps {
  habilidades: string[];
}

export const Skills = ({ habilidades }: SkillsProps) => (
  <section className="mt-8">
    <h3 className="text-2xl font-semibold border-b pb-2">Habilidades</h3>
    <div className="flex flex-wrap gap-3 mt-4">
      {habilidades.map((habilidad) => (
        <span
          key={habilidad}
          className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium shadow-md"
        >
          {habilidad}
        </span>
      ))}
    </div>
  </section>
);
