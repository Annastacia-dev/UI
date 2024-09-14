import Navbar from "./layouts/Navbar";
import Header from "./Header";
import BestSelling from "./BestSelling";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import Blog from "./Blog";
import Footer from "./layouts/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BestSelling />
      <Reviews />
      <Gallery />
      <Blog />
      <Footer />
    </div>
  );
};

export default LandingPage;
