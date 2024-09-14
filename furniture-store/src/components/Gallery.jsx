import { bestSellers } from "./data/bestSelling";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-10 md:pt-20 md:px-10 px-5 pt-5">
      <div className="flex items-center gap-4">
        <h4 className="font-bold md:text-3xl text-xl capitalize">Gallery</h4>
        <hr className="border border-black md:w-1/2 w-1/3" />
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        {bestSellers.map((product, index) => (
          <div key={index} className="break-inside-avoid">
            <a href={product.path} className="flex flex-col gap-3">
              <img
                src={product.image}
                className="w-full rounded hover:scale-95 transition-transform duration-300"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
