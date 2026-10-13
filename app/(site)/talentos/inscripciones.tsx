export default function columnas() {
  return (
    <div className="border-t border-b border-foreground grid md:grid-cols-2">
      <div className="py-12 pr-4 md:border-r border-foreground">
        <h1 className="font-bold mb-2">APLICACIONES ABIERTAS </h1>
      </div>
      <div className="py-12 md:px-4 border-t md:border-0 border-foreground md:pb-60 flex flex-col items-start justify-start gap-y-8">
        <button className="text-2xl md:text-5xl font-medium hover:opacity-50 transition-all cursor-pointer">
          Analista de datos
        </button>
      </div>
    </div>
  );
}
