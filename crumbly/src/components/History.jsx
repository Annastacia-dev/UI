import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

const History = () => {
  return (
    <div className="mb-4 sm:px-20 px-5 sm:pt-20 pt-72 flex flex-col gap-10">
      <div className="bg-black/30 text-white  rounded-lg grid md:grid-cols-2 gap-10 relative">
        <div className="flex flex-col gap-8 p-8 md:w-10/12">
          <div className="border-2 border-primary flex justify-center items-center text-primary font-coolvetica text-lg capitalize tracking-wide rounded-full p-5 w-24 h-24 absolute md:-top-16 -top-16 left-64">
            baked daily
          </div>
          <h5 className="font-coolvetica text-4xl uppercase tracking-wider">
            Bread beyond just taste
          </h5>
          <p className="text-primary lg:absolute text-6xl font-coolvetica left-[45%] flex flex-col gap-1 top-32">
            <span className="lg:text-[16rem]">15</span>
            <span className="lg:-mt-6 lg:ml-10 text-4xl">years</span>
          </p>
          <p className="text-sm leading-7">
            Crumbly, is proud to be family owned and dedicated to traditions
            that matter for the last 15 years. We&apos;re commited to serving
            the best, freshest products crafted in time-proven artisan ways usin
            our woodfire brick oven.
            <br />
            <br />
            For us baking begins long before putting the dugh into the oven. We
            source only the highest quality ingredients so that you can expect
            great flavours from every single one of our products.
          </p>
          <p className="text-sm leading-7 text-primary">
            Learn more about our process and follow the latest news on social
            media.
            <div className="mt-3 flex gap-4 items-center">
              <FaFacebookF />
              <FaInstagram />
            </div>
          </p>
        </div>
        <div className="md:h-[600px] overflow-hidden">
          <img
            src="images/pizza-oven.jpg"
            className="object-cover object-bottom"
          />
        </div>
      </div>
      <button className="mt-10 bg-primary rounded-lg font-coolvetica text-darkgrey capitalize p-5 text-2xl tracking-wider">
        try something fresh from our oven!
      </button>
    </div>
  );
};

export default History;
