import arrow1 from "@/assets/bi_arrow-left-short (1).png"
import icon from "@/assets/Vector1.png"
const Footer = () => {
  return (
    <div className="bg-zinc-900 mx-0">
      <div className="block md:flex md:flex-grow">
        <h1 className="text-4xl md:ml-5 p-4 text-white">Event <span className="text-blue">360</span></h1>
        <div className="md:grid md:grid-cols-5 flex-grow gap-4 mx-4 my-6 text-white">
          <div className="leading-7 font-light mb-5">
            <p><a href="#">Product</a></p>
            <p><a href="#">Pricing</a></p>
            <p><a href="#">Overview</a></p>
            <p><a href="#">Browse</a></p>
            <p><a href="#">Accessibility</a></p>
          </div>
          <div className="leading-7 font-light mb-5">
            <p><a href="#">Solutions</a></p>
            <p><a href="#">Brainstorming</a></p>
            <p><a href="#">Ideation</a></p>
            <p><a href="#">Wireframing</a></p>
            <p><a href="#">Research</a></p>
          </div>
          <div className="leading-7 font-light mb-5">
            <p><a href="#">Product</a></p>
            <p><a href="#">Pricing</a></p>
            <p><a href="#">Overview</a></p>
            <p><a href="#">Product</a></p>
            <p><a href="#">Pricing</a></p>
          </div>
          <div className="leading-7 font-light mb-5">
            <p><a href="#">Support</a></p>
            <p><a href="#">Contact Us</a></p>
            <p><a href="#">Developers</a></p>
            <p><a href="#">Documentation</a></p>
            <p><a href="#">Integrations</a></p>
          </div>
          <div className="leading-7 font-light mb-2">
            <p><a href="#">Company</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Press</a></p>
            <p><a href="#">Events</a></p>
            <div className="flex items-center">
              <p><a href="#">Request Demo</a></p>
              <img src={arrow1} alt="" className="w-5 h-5 ml-1" />
            </div>
          </div>
        </div>
      </div>
      <hr className="md:mx-10"></hr>
      <div className="md:flex md:justify-between md:mx-10">
        <p className="md:ml-10 p-4 text-white">@ 2023. All rights reserved.</p>
        <div className="flex space-x-4 text-white font-light p-4">
          <p><a href="#">Terms</a></p>
          <p><a href="#">Privacy</a></p>
          <p><a href="#">Contact</a></p>
          <div className="flex">
            <img src={icon} alt="" className="w-4 h-4 m-1" />
            <p><a href="#">EN</a></p>
          </div>
          <p><a href="#">EUR</a></p>
        </div>
      </div>
    </div>
  );
  
};

export default Footer;