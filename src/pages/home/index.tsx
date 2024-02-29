import Navbar from "../../components/ui/layouts/Navbar";
import Appointment from "./Appointment";
import Clients from "./Clients";
import EventItems from "./EventItems";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Newsfeed from "./Newsfeed";
import Pricing from "./Pricing";
import Recents from "./Recents";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-tl from-violet-200 via-yellow-50 to-orange-100 pb-10">
      <Navbar></Navbar>
      <Hero></Hero>
      </div>
      <Clients></Clients>
      <div className="bg-gradient-to-bl from-sky-100  via-white to-white py-10">
      <Services></Services>
      </div>
      <div className="bg-gradient-to-bl from-white via-white to-fuchsia-200 py-10">
      <EventItems></EventItems>
      </div>
      <div className="bg-gradient-to-br from-fuchsia-200	via-white to-indigo-300 py-10">
      <Pricing></Pricing>
      </div>
      <div className="bg-gradient-to-bl from-indigo-300	via-white to-white">
      <Gallery></Gallery>
      </div>
     <Reviews></Reviews>
     <div className="bg-gradient-to-bl from-white via-white to-fuchsia-200 py-10">
  <Recents></Recents>
  </div>
  <div className="bg-gradient-to-br from-fuchsia-200	via-white to-indigo-300 py-10">
  <Newsfeed></Newsfeed>
  </div>
  <div className="bg-gradient-to-bl from-indigo-300	via-white to-white">
  <Appointment></Appointment>
  </div>
  
      <Footer></Footer>
    </div>
  );
};

export default Home;
