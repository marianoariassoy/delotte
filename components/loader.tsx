const Loader = () => {
  return (
    <div className="h-full w-full flex justify-center items-center mt-4">
      <div className="flex justify-center items-center space-x-2">
        <div
          className="w-2 h-2 bg-foreground/30 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-2 bg-foreground/30 rounded-full animate-bounce"
          style={{ animationDelay: ".3s" }}
        ></div>
        <div
          className="w-2 h-2 bg-foreground/30 rounded-full animate-bounce"
          style={{ animationDelay: ".6s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
