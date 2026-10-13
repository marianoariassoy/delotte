export default function valores() {
  const data = [
    {
      title: "Sostenibilidad",
      subtitle: "Generamos valor, con mirada de futuro.",
      description:
        "Gestionamos nuestros recursos pensando en el impacto de hoy y en las oportunidades de mañana. Tomamos decisiones favoreciendo el crecimiento sostenible del negocio, las personas y el entorno.",
    },
    {
      title: "Innovación y Mejora continua",
      subtitle: "Construimos nuestro propio camino con valentía.",
      description:
        "Gestionamos nuestros recursos pensando en el impacto de hoy y en las oportunidades de mañana. Tomamos decisiones favoreciendo el crecimiento sostenible del negocio, las personas y el entorno",
    },
    {
      title: "Sostenibilidad",
      subtitle: "Generamos valor, con mirada de futuro.",
      description:
        "Nos animamos a cuestionar lo establecido, probar nuevas y mejores soluciones, transformando aprendizajes en mejoras.",
    },
    {
      title: "Responsabilidad",
      subtitle: "Trabajamos de manera comprometida.",
      description:
        "Actuamos con profesionalismo, respondiendo con compromiso ante los desafíos y decisiones que tomamos.",
    },
    {
      title: "Colaboración",
      subtitle: "Crecemos juntos.",
      description:
        "Compartimos conocimiento, integramos distintas perspectivas, y construimos alianzas que potencian nuestras capacidades y nos impulsan a alcanzar mejores resultados. Construimos confianza y valor en nuestros vínculos.",
    },
    {
      title: "Calidez humana",
      subtitle: "Promovemos cercanía que impulsa.",
      description:
        "Construimos relaciones cercanas y humanas porque creemos que los grandes proyectos se sostienen a partir el del cuidado de los vínculos con nuestra gente.",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 pb-20 md:pb-0 ">
      <div className="py-14 md:py-20 md:border-r border-black">
        <h1 className="font-bold">NUESTROS VALORES</h1>
      </div>
      <div className="md:px-20 md:pt-20 md:pb-60 flex flex-col gap-y-12 ">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-y-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {index + 1}. {item.title}
            </h2>
            <div>
              <h3 className="text-2xl md:text-4xl font-medium">
                {item.subtitle}
              </h3>
              <p className="text-xl md:text-3xl font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
