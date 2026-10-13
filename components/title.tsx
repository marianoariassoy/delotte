const title = ({
  title = "",
  subtitle = "",
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <h2 className="font-bold uppercase">{title}</h2>
      <h1 className="text-3xl md:text-7xl mt-2 font-medium">{subtitle}</h1>
    </div>
  );
};

export default title;
