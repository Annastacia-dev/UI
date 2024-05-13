import { useState } from 'react';
import { CiCircleInfo, CiClock1 } from 'react-icons/ci';

const items = [
  {
    id: 1,
    title: 'freshly made sesame Bagels',
    image: 'pastries/bagels.jpeg',
    price: 100,
    cal: 450,
    ingredients: 'Flour, water, yeast, salt, sesame seeds',
    status: 'hot!',
  },
  {
    id: 2,
    title: 'flaky french croissants',
    image: 'pastries/croissant.jpeg',
    price: 250,
    cal: 390,
    ingredients: 'Flour, butter, sugar, yeast, milk, salt',
  },
  {
    id: 3,
    title: 'chocolate glazed donuts',
    image: 'pastries/donuts.jpeg',
    price: 310,
    cal: 420,
    ingredients: 'Flour, sugar, eggs, milk, butter, chocolate glaze',
    status: 'new',
  },
  {
    id: 4,
    title: 'sourdough french baguette',
    image: 'pastries/baguette.jpeg',
    price: 60,
    cal: 100,
    ingredients: 'Flour, water, sourdough starter, salt',
  },
  {
    id: 5,
    title: 'chocolate pecan cinnamon rolls',
    image: 'pastries/cinnamon.jpeg',
    price: 100,
    cal: 280,
    ingredients:
      'Flour, butter, sugar, yeast, milk, cinnamon, pecans, chocolate',
  },
  {
    id: 6,
    title: 'gluten free vegan churros',
    image: 'pastries/churros.jpeg',
    price: 250,
    cal: 130,
    ingredients: 'Gluten-free flour, almond milk, sugar, oil, cinnamon',
  },
  {
    id: 7,
    title: 'perfect new york cheesecake',
    image: 'pastries/cheesecake.jpeg',
    price: 310,
    cal: 250,
    ingredients: 'Cream cheese, sugar, eggs, sour cream, vanilla extract',
  },
  {
    id: 8,
    title: 'super fudgy brownies',
    image: 'pastries/brownies.jpeg',
    price: 60,
    cal: 90,
    ingredients: 'Flour, sugar, eggs, butter, cocoa powder',
  },
];

const CustomerFavourites = () => {
  const [showIngredients, setShowIngredients] = useState({});

  const toggleIngredients = (itemId) => {
    setShowIngredients((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className="mb-4 sm:px-20 px-5 sm:pt-20 pt-72 flex flex-col gap-10">
      <div className="flex md:flex-row flex-col gap-8 md:justify-between justify-center items-center">
        <div className="flex flex-col gap-3 text-xs">
          <p>Filter by:</p>
          <ul className="capitalize list-disc flex flex-col gap-2">
            <li className="text-primary underline font-semibold cursor-pointer">
              daily items
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              pastry
            </li>
            <li className="hover:text-primary hover:underline cursor-pointer">
              specialty
            </li>
          </ul>
        </div>
        <h1 className="text-4xl text-primary font-coolvetica md:text-center uppercase tracking-wide">
          customer <br /> favourites
        </h1>
        <div className="flex gap-4 text-primary items-center">
          <CiClock1 className="text-2xl" />
          <p className="w-40 text-xs font-light">
            All orders must be placed 24 hours before delivery time before 8pm
            each day.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-4 gap-x-4 gap-y-10 mt-10">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="shadow-lg bg-[#181717] hover:bg-secondary/50 rounded-lg flex flex-col gap-6 text-sm relative"
            >
              <div className="flex justify-center items-center">
                <img
                  src={item.image}
                  className="w-full h-40 object-cover rounded-lg rounded-b-none"
                />
              </div>
              {item.status && (
                <div className="border-2 border-primary flex justify-center items-center text-primary font-coolvetica text-xs capitalize tracking-wide rounded-full p-5 w-10 h-10 absolute md:-top-10 -top-8 left-2">
                  {item.status}
                </div>
              )}
              <div className="flex justify-between px-4 py-2">
                <div className="flex flex-col gap-1">
                  <p>Kshs. {item.price}</p>
                  <p className="font-coolvetica text-lg tracking-wide capitalize w-32">
                    {item.title}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <CiCircleInfo
                    className="text-xl cursor-pointer hover:text-primary"
                    onClick={() => toggleIngredients(item.id)}
                  />
                  <p>{item.cal}g</p>
                  <button className="bg-primary text-darkgrey rounded-sm px-4 py-2 hover:bg-secondary hover:text-lightgrey">
                    Add
                  </button>
                </div>
                {showIngredients[item.id] && (
                  <div className="glass p-4 absolute top-10 rounded-md text-darkgrey left-1">
                    <p className="font-bold">Ingredients</p>
                    <p>{item.ingredients}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-primary text-darkgrey rounded-sm px-4 py-2 hover:bg-secondary hover:text-lightgrey  font-bold capitalize">
          view all
        </button>
      </div>
    </div>
  );
};

export default CustomerFavourites;
