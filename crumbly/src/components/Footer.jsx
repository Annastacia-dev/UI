import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { items } from '../data/items';

const Footer = () => {
  return (
    <div className="mb-4 sm:px-20 px-5 sm:pt-20 pt-72 flex flex-col gap-10">
      <div className="grid lg:grid-cols-5">
        <div className="flex flex-col gap-5">
          <h5 className="font-coolvetica text-xl tracking-wide cpitalize">
            follow
          </h5>
          <p className="flex items-center gap-2 text-sm">
            <FaInstagram />
            <span className="capitalize">instagram</span>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaFacebookF />
            <span className="capitalize">facebook</span>
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="font-coolvetica text-xl tracking-wide capitalize">
            contact
          </h5>
          <p className="flex items-center gap-2 text-sm">+2547 1234 5678</p>
          <p className="flex items-center gap-2 text-sm">hey@crumbly.com</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src="logo.png" className='w-12 h-12'/>
          <p className='text-2xl font-coolvetica tracking-wider'>crumbly</p>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="font-coolvetica text-xl tracking-wide capitalize">
            bakery
          </h5>
          <p className="flex items-center gap-2 text-sm capitalize">3590 Woodvale avenue</p>
          <p className="flex items-center gap-2 text-sm capitalize">ring road</p>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="font-coolvetica text-xl tracking-wide capitalize">
            find us
          </h5>
          <p className="flex items-center gap-2 text-sm capitalize">open location in google maps</p>
        </div>

      </div>
      <div className='flex gap-4 justify-center items-center'>
        {
          items.slice(0, 10).map((item) => (
            <div key={item.id}>
              <img src={item.image} className="w-20 h-20 object-cover" />
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Footer;
