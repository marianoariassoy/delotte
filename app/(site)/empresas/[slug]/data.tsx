type Data = {
  id: number;
  title: string;
  text: string;
};

const Galeria = ({ data, lang }: { data: Data[]; lang: string }) => {
  return (
    <div className="border-b border-foreground pb-30">
      <h2 className="font-bold mb-4">
        {lang === "es" ? "NUESTROS DATOS" : "OUR DATA"}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
        {data.map((item, index) => {
          return (
            <div key={item.id} className="flex flex-col">
              <h3 className="text-2xl md:text-4xl">{item.title}</h3>
              <p className="text-xl md:text-3xl">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Galeria;
