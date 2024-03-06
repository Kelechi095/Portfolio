const Animation1 = () => {
  return (
    <div className="my-40 absolute top-10 hidden md:flex right-40">
      <div className="relative mx-auto h-10 w-10 animate-bounce">
        <div className="mx-auto h-16 w-16 animate-pulse rounded-full bg-blue-400"></div>
        <span className="absolute flex h-5 w-5 animate-spin">
          <span className="h-4 w-4 rounded-full bg-gray-800"> </span>
        </span>
      </div>
    </div>
  );
};

export default Animation1;
