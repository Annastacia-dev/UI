import Navbar from "./layouts/Navbar";
import Header from "./Header";
import BestSelling from "./BestSelling";
import Reviews from "./Reviews";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BestSelling />
      <Reviews />
    </div>
  );
};

export default LandingPage;
