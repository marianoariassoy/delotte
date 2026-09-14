export default function Trabaja() {
  return (
    <div className="border-t border-b border-black grid md:grid-cols-2 md:h-[50vh]">
      <div className="border-b md:border-0 md:border-r border-black py-4 text-sm">
        TRABAJÁ CON NOSOTROS
      </div>
      <div className="py-4 md:px-2 relative">
        <a
          href="mailto:info@grupodelotte.com"
          className="hover:underline text-2xl md:text-4xl"
        >
          Contactanos
        </a>
        <div className="absolute top-5 md:top-8 right-2 md:right-14">
          <img src="/assets/arrow.svg" alt="Arrow" className="h-6" />
        </div>
      </div>
    </div>
  );
}
