import { FaChevronRight } from 'react-icons/fa6';

const process = [
  {
    id: 1,
    title: 'choose bundle',
    icon: 'icons/basket.png',
  },
  {
    id: 2,
    title: 'place order',
    icon: 'icons/truck.png',
  },
  {
    id: 3,
    title: 'eat and enjoy',
    icon: 'icons/eat.png',
  },
];

const Order = () => {
  return (
    <div className="mb-4 sm:px-20 px-5 sm:pt-20 pt-72 flex flex-col gap-10 overflow-hidden">
      <div className="bg-primary/70  rounded-lg grid md:grid-cols-3 gap-10 relative">
        <img
          src="basket.png"
          className="md:w-[35%] absolute md:-left-20 md:-top-4 -top-32 left-10"
        />
        <div></div>
        <div className="flex flex-col gap-8 text-black md:mt-0 mt-24 p-5">
          <h5 className="font-coolvetica uppercase tracking-wide text-2xl">
            can&apos;t decide ?
          </h5>
          <p className="text-sm leading-6 md:w-full w-52">
            Sample a selection of our best selling breads and treats that will
            be delivered right to your doorstep. The default is whole grain
            spelt, four seed, whole wheat, bagels and pastry(our most popular
            items).
          </p>
          <div className="flex md:gap-10 gap-4">
            {process.map((step, index) => {
              return (
                <div
                  key={step.id}
                  className="flex items-center md:gap-10 gap-2"
                >
                  <div className="flex flex-col gap-2">
                    <img src={step.icon} className="w-10" />
                    <p className="text-sm">{step.title}</p>
                  </div>
                  {index !== process.length - 1 && <FaChevronRight />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-secondary rounded-lg px-5 md:py-10 py-4 relative">
          <div className="h-5 w-5 bg-secondary rotate-45 absolute -left-2 top-20"></div>
          <div className="flex md:flex-row flex-col md:gap-10 gap-5">
            <img src="pastries.png" className="md:w-1/2 w-3/4" />
            <div className="text-sm flex flex-col gap-4">
              <p className="capitalize font-semibold">
                whole grain spelt, flour seed whole wheat, bagels, pastry
              </p>
              <p>850g</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between mt-5 gap-5">
            <div className="flex flex-col gap-1">
              <p>Kshs. 3000</p>
              <p className="font-coolvetica text-2xl tracking-wide capitalize">
                big pack*
              </p>
            </div>
            <button className="bg-primary px-4 py-2 text-darkgrey font-medium capitalize rounded-md h-10">
              order now
            </button>
          </div>
          <p className="mt-8 text-xs md:w-3/4 leading-6 tracking-wide">
            *Please let us know if you have any allergies to anything in our
            products, and we will make suitable substitutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
