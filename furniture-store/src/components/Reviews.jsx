import { useState, useEffect, useRef } from "react";
import { reviews } from "./data/reviews";

const Reviews = () => {
  const scrollContainerRefs = useRef([]);
  const scrollSpeeds = [0.5, -0.5, 0.5];
  const [scrollPositions, setScrollPositions] = useState([0, 0, 0]);

  useEffect(() => {
    const intervals = [];

    scrollContainerRefs.current.forEach((scrollContainer, rowIndex) => {
      const beltWidth = scrollContainer.scrollWidth / 2;

      const scroll = () => {
        setScrollPositions((prevPositions) => {
          const newPosition = [...prevPositions];
          newPosition[rowIndex] =
            prevPositions[rowIndex] + scrollSpeeds[rowIndex];

          if (newPosition[rowIndex] >= beltWidth) {
            newPosition[rowIndex] = 0;
          } else if (newPosition[rowIndex] <= -beltWidth) {
            newPosition[rowIndex] = 0;
          }

          return newPosition;
        });
      };

      let interval = setInterval(scroll, 20);
      intervals.push(interval);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  const rowReviews = [
    reviews.slice(0, 8),
    reviews.slice(8, 16),
    reviews.slice(16, 24),
  ];

  return (
    <div className="flex flex-col gap-16 md:pt-28 pt-20 pb-10">
      <div className="flex items-center gap-4 md:px-10 px-5">
        <h4 className="font-bold md:text-3xl text-xl capitalize">
          what our customers say
        </h4>
        <hr className="border border-black md:w-1/2 w-1/3" />
      </div>
      <div className="flex flex-col gap-y-4 gap-x-2 ">
        {rowReviews.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center items-center overflow-hidden"
            ref={(el) => (scrollContainerRefs.current[rowIndex] = el)}
          >
            <div
              className="flex gap-2"
              style={{
                transform: `translateX(${scrollPositions[rowIndex]}px)`,
                whiteSpace: "break",
              }}
            >
              {[...row, ...row, ...row].map(({ name, quote, rating }, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col gap-2 bg-gray-100 mx-2 rounded shadow-lg w-60"
                >
                  <p className="italic text-sm">{quote}</p>
                  <p className="mt-2 font-bold text-sm">~{name}</p>
                  <p className="text-yellow-600">{"★".repeat(rating)}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
