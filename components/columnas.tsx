export default function columnas({
  title,
  textLeft,
  textRight,
}: {
  title: string;
  textLeft: string;
  textRight: string;
}) {
  return (
    <div className="border-t border-b border-black grid md:grid-cols-2">
      <div className="py-12 pr-4 md:border-r border-black">
        <h1 className="font-bold mb-2">{title}</h1>
        {textLeft && (
          <p className="text-xl md:text-3xl font-medium md:pr-20 md:pb-20">
            {textLeft}
          </p>
        )}
      </div>
      <div className="py-12 md:px-4 border-t md:border-0 border-black md:pb-20">
        <p className="text-xl md:text-3xl font-medium">{textRight}</p>
      </div>
    </div>
  );
}
