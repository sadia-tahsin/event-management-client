import Container from "@/components/Container";
import icon1 from "@/assets/Package.png";
import icon2 from "@/assets/Stack.png";
import icon3 from "@/assets/RocketLaunch.png";
import { Button } from "@/components/ui/button";
import icon4 from "@/assets/ArrowRight.png"
import listIcon from "@/assets/Group 16.png"

const Pricing = () => {
  return (
    <Container className="my-16">
      <h1 className="text-6xl font-extrabold text-center mb-4" style={{color:'rgba(6, 28, 61, 1)'}}>
        Explore our pricing plans
      </h1>
      <p className="mb-16 text-center" style={{color:'rgba(86, 107, 132, 1)'}}>
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
        posuere<br></br> felis arcu tellus tempus in in ultricies. Gravida id
        nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
      </p>
      <div className="hidden md:block lg:block"> {/* Hide on small screens */}
    <div className="flex justify-center">
      <div className="text-center bg-sky-500 h-8 w-32 rounded-t-lg p-1 text-white">
        Recommended
      </div>
    </div>
  </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        <div className="bg-white rounded-md border-t-4 border-pink-400">
          <div className="flex justify-between m-4">
            <div className="bg-red-200 p-2 rounded-md">
              <img src={icon1} alt="" className="w-10 h-10 " />
            </div>
            <div>
              <h1 className="text-pink-400 text-4xl font-bold p-2">$21</h1>
            </div>
          </div>
          <div className="mx-4 my-5 text-left">
            <h1 className="text-3xl font-bold py-2">Standard</h1>
            <p>
            Quisque auctor erat velit, quis ultrices nisi vestibulum at. Donec vitae purus lorem. 
            </p>
          </div>
          <Button className="mx-4 mb-3 bg-white border-2 border-blue-500 px-10 text-sky-600 md:mx-2">Get this package <img src={icon4} alt="" className="mx-2" /></Button>
          <hr></hr>
          <ul className="list none m-4 py-2">
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Post 3 Ads per week
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Multiple images & videos
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Multiple images & videos
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Multiple images & videos
          </li>
          </ul>
        </div>
       
        <div>
        <div className=" md:hidden lg:hidden"> 
    <div className="flex justify-center">
      <div className="text-center bg-sky-500 h-8 w-32 rounded-t-lg p-1 text-white">
        Recommended
      </div>
    </div>
  </div> 
        <div className="bg-white rounded-md border-t-4 border-sky-500">
       
          <div className="flex justify-between m-4">
            <div className="bg-sky-100 p-2 rounded-md">
              <img src={icon2} alt="" className="w-10 h-10 " />
            </div>
            <div>
              <h1 className="text-sky-500 text-4xl font-bold p-2">$49</h1>
            </div>
          </div>
          <div className="mx-4 my-5 text-left">
            <h1 className="text-3xl font-bold py-2">Premium</h1>
            <p>
            Quisque auctor erat velit, quis ultrices nisi vestibulum at. Donec vitae purus lorem. 
            </p>
          </div>
           <div style={{ height: "50px" }}> {/* Set a fixed height */}
        <Button className="mx-4 mb-2 bg-sky-500 border-sky-500 px-10 text-white">Get this package <img src={icon4} alt="" className="mx-2" /></Button>
             </div>
          <hr></hr>
          <ul className="list none m-4 py-2">
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Post 3 Ads per week
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Multiple images & videos
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Multiple images & videos
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Multiple images & videos
          </li>
          </ul>
        </div>
        </div>
 
        <div className="bg-white rounded-md border-t-4 border-red-500">
          <div className="flex justify-between m-4">
            <div className="bg-red-200 p-2 rounded-md">
              <img src={icon3} alt="" className="w-10 h-10 " />
            </div>
            <div>
              <h1 className="text-red-500 text-4xl font-bold p-2">$124</h1>
            </div>
          </div>
          <div className="mx-4 my-5 text-left">
            <h1 className="text-3xl font-bold py-2">Business</h1>
            <p>
              Upgrade your social portfolio with a stunning profile & enhanced
              shots.
            </p>
          </div>
          <Button className="mx-4 mb-2 bg-white border-2 border-blue-500 px-10 text-sky-600">Get this package <img src={icon4} alt="" className="mx-2" /></Button>
          <hr></hr>
          <ul className="list none m-4 py-2">
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Post 3 Ads per week
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Multiple images & videos
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            User Dashboard
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Multiple images & videos
          </li>
          <li className="flex items-center my-4">
            <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
            Multiple images & videos
          </li>
          </ul>
        </div>
      </div>
    </Container>

  );
};

export default Pricing;
