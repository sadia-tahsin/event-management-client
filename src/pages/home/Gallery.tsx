import img1 from "@/assets/Picture (3).png";
import img2 from "@/assets/Picture (4).png";
import img3 from "@/assets/Picture (5).png";
import img4 from "@/assets/Picture (1).png";
import img5 from "@/assets/Picture (2).png";
import img6 from "@/assets/Picture (6).png";
import img7 from "@/assets/Picture (7).png";
import img9 from "@/assets/Picture (9).png";
import icon1 from "@/pages/home/Group 15.png";
import icon2 from "@/assets/Group 16.png";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 mx-12 bg-[url('src\assets\Star.png')]">
      <div className="my-auto">
        <h2 className="text-7xl font-extrabold">Gallery</h2>
        <p className="py-9" style={{color:'rgba(86, 107, 132, 1)'}}>
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        {/* <ul class="list-image-[url(checkmark.png)] ">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul> */}
        <ul className="list-none">
          <li className="flex items-center my-2">
            <img src={icon1} alt="Icon" className="w-6 h-6 mr-2" />
            One day pas access all lecture
          </li>
          <li className="flex items-center my-2">
            <img src={icon2} alt="Icon" className="w-5 h-5 mr-2" />
            Lunch and Snack
          </li>
          <li className="flex items-center my-2">
            <img src={icon2} alt="Icon" className="w-5 h-5 mr-2" />
            Lunch and Snack
          </li><li className="flex items-center my-2">
            <img src={icon2} alt="Icon" className="w-5 h-5 mr-2" />
            Front Seat
          </li><li className="flex items-center my-2">
            <img src={icon2} alt="Icon" className="w-5 h-5 mr-2" />
            One day pas access all lecture
          </li>
        </ul>
      </div>
      {/* <div className="grid grid-cols-4 gap-4">
        <div className="bg-red-500"></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>

      </div> */}
      <div className="grid grid-cols-4 gap-x-4">
        {/* First column
  <div className="grid grid-cols-1 gap-4 place-items-end my-9" >
  <div className="bg-red-500">
    <img src={img1} alt=""className='object-contain w-32 h-48 pt-20'/>
  </div>
    <div className="bg-red-500">
    <img src={img1} alt="" className="object-cover"/>
    </div>
  </div> */}
        {/* First column */}
        <div className="grid grid-cols-1 gap-3 my-8">
          {/* First image */}
          <div className="relative w-24 h-48 place-self-end">
            <img
              src={img1}
              alt=""
              className="absolute bottom-0 right-0 object-contain"
            />
          </div>

          {/* Second image */}
          <div className="w-43 h-56 overflow-hidden relative">
            <img
              src={img2}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Second column */}

        <div className="grid grid-cols-1 gap-2">
            {/* <div className="h-56 relative">
              <img
                src={img3}
                alt=""
                className="absolute left-0 w-full object-cover"
                style={{ paddingTop: "1.5rem" }} // Adjust the padding value as needed
              />
            </div> */}
            <div className="h-48 mt-5">
            <img src={img5} alt="" className="w-full h-full object-cover " />
          </div>
          <div className="h-48">
            <img src={img4} alt="" className="w-full h-full object-cover " />
          </div>

          <div className="h-48">
            <img src={img5} alt="" className="w-full h-full object-cover " />
          </div>
        </div>

        {/* Third column */}
        <div className="grid grid-cols-1 gap-3 my-12">
          <div className="h-44 relative">
            <img
              src={img3}
              alt=""
              className="absolute left-0 w-full object-cover"
              // Adjust the padding value as needed
            />
          </div>

          <div className="h-48">
            <img src={img6} alt="" className="w-full h-full object-cover " />
          </div>

          <div className="h-44">
            <img src={img7} alt="" className="w-full h-full object-cover " />
          </div>
        </div>

        {/* Fourth column */}
        <div className="grid grid-cols-1 gap-3 my-32">
          <div className="w-43 h-56 rounded ">
            <img
              src={img2}
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>

          <div className="h-40">
            <img src={img9} alt="" className="w-5/6 h-full object-cover " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
