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
      <div className="bg-primary/70 p-5 rounded-lg grid md:grid-cols-3 gap-5 relative">
        <img src="basket.png" className="md:w-[35%] absolute md:-left-28 md:-top-16 -top-32 left-10" />
        <div></div>
        <div className="flex flex-col gap-4 text-black md:mt-0 mt-24">
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
                <div key={step.id} className="flex items-center md:gap-10 gap-2">
                  <div className="flex flex-col gap-2">
                    <img src={step.icon} className="md:w-10 w-5" />
                    <p className="text-sm">{step.title}</p>
                  </div>
                  {index !== process.length - 1 && <FaChevronRight />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
