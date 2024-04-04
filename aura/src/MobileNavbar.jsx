import ProductCategories from './ProductCategories';

const MobileNavbar = ({ isOpen }) => {
  return (
    isOpen && (
      <div className="flex-col flex fixed inset-0 bottom-[15%] bg-black/80 gap-4 px-10 py-8  text-tan capitalize font-bold text-sm mt-[38px]">
        <ul className="flex flex-col gap-4">
          <li>
            <a
              aria-label="ourstory"
              href="#story"
              className="hover:underline cursor-pointer"
            >
              our story
            </a>
          </li>
          <li>
            <a
              aria-label="products"
              href="#products"
              className="hover:underline cursor-pointer"
            >
              products
            </a>
          </li>
          <li>
            <a
              aria-label="blog"
              href="#blog"
              className="hover:underline cursor-pointer"
            >
              blog
            </a>
          </li>
        </ul>
        <hr className="border-tan" />
        <ProductCategories />
      </div>
    )
  );
};

export default MobileNavbar;
