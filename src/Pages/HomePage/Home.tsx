import AboutUS from "./Components/AboutUs";
import Header from "./Components/Header";
import Features from "./Components/Features";
import Review from "./Components/Reviews";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

const Home = () => {
  return (
    <>
    <NavBar/>
      <Header />
      <Features />
      <AboutUS />
      <Review />
      <Footer />
      {/* <Partners/> */}
    </>
  );
};

export default Home;
