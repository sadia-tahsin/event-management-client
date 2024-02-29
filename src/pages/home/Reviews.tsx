import img from "@/assets/Ellipse 80 (1).png";
import arrow1 from "@/assets/bi_arrow-left-short (1).png"
import arrow2 from "@/assets/bi_arrow-left-short.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SetStateAction, useRef, useState } from "react";

// const Reviews = () => {
//   const swiperRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0); // State to track active slide index
//   const handleSlideChange = (swiper: { activeIndex: SetStateAction<number>; }) => {
//     setActiveIndex(swiper.activeIndex); // Update activeIndex state
//   };

//   // Function to set background color based on active slide index
//   const getSlideBgColor = (index:number) => {
//     return index === activeIndex ? 'bg-sky-600' : 'bg-slate-200';
//   };

//   const handlePrevSlide = () => {
//     if (swiperRef.current !== null) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   const handleNextSlide = () => {
//     if (swiperRef.current !== null) {
//       swiperRef.current.slideNext();
//     }
//   };


//   return (
  //   <div className="my-20 ml-10">
  //       <div className="flex justify-between">
  //      <h1 className="text-5xl font-extrabold mb-14">
  //        What Our Client Said about us
  //      </h1>
       
  //      <div className="hidden lg:flex p-4 mx-6">
  //       <button className="bg-slate-200 rounded-full w-12 h-12 mr-4 justify-center" onClick={handlePrevSlide}>
  //         <img src={arrow2} alt="" className="w-12 h-12" />
  //       </button>
  //       <button className="bg-sky-600 rounded-full w-12 h-12 mr-24" onClick={handleNextSlide}>
  //         <img src={arrow1} alt="" className="w-12 h-12" />
  //       </button>
  //     </div>
  //     </div>
  //    <Swiper
  //   modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  //   spaceBetween={50}
  
  //   slidesPerView={1}
  //   breakpoints={{
  //     640: {
  //       slidesPerView: 1.5,
  //     },
  //     768: {
  //       slidesPerView: 2.5,
  //     },
  //   }}
  //   navigation={{
  //     prevEl: ".swiper-prev",
  //     nextEl: ".swiper-next",
  //   }}
  //   onSwiper={(swiper) => {
  //     swiperRef.current = swiper;
  //     console.log(swiper);
  //   }}
  //   onSlideChange={(swiper) => handleSlideChange(swiper)}
  // >
       
  //       <SwiperSlide>
      
  //         <div className={`rounded-md  ${getSlideBgColor(0)} p-10 mx-auto`}>
  //          <div className="flex justify-enter mb-4">
  //            <img src={img} alt="" className="rounded w-20 h-20" />
  //            <div className="p-4">
  //              <h4>Jacob Joshua</h4>
  //              <h5>Chief Manager</h5>
  //            </div>
  //          </div>
  //          <p>
  //            I found the digital expertise I needed. Their creative-professional
  //            balance exceeded expectations. Friendly interactions, exceptional
  //            outcomes. For digital enchantment, it's got to be Embrace!
  //          </p>
        
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
      
  //     <div className={`rounded-md  ${getSlideBgColor(1)} p-10 mx-auto`}>
  //      <div className="flex justify-enter mb-4">
  //        <img src={img} alt="" className="rounded w-20 h-20" />
  //        <div className="p-4">
  //          <h4>Jacob Joshua</h4>
  //          <h5>Chief Manager</h5>
  //        </div>
  //      </div>
  //      <p>
  //        I found the digital expertise I needed. Their creative-professional
  //        balance exceeded expectations. Friendly interactions, exceptional
  //        outcomes. For digital enchantment, it's got to be Embrace!
  //      </p>
    
  //     </div>
  //   </SwiperSlide>
  //       <SwiperSlide>
  //         <div className={`rounded-md  ${getSlideBgColor(2)} p-10 mx-auto`}>
  //         <div className="flex justify-enter mb-4">
  //          <img src={img} alt="" className="rounded w-20 h-20" />
  //            <div className="p-4">
  //              <h4>Amelia Joseph</h4>
  //              <h5>Chief Manager</h5>
  //            </div>
  //          </div>
  //          <p>
  //            Embrace really nails it! Creative brilliance, approachable style.
  //            They're the partners you want—artistry meets strategy. Thrilled with
  //            what they achieved!"
  //          </p>
         
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className={`rounded-md  ${getSlideBgColor(3)} p-10 mx-auto`}>
  //         <div className="flex justify-enter mb-4">
  //          <img src={img} alt="" className="rounded w-20 h-20" />
  //            <div className="p-4">
  //              <h4>Amelia Joseph</h4>
  //              <h5>Chief Manager</h5>
  //            </div>
  //          </div>
  //          <p>
  //            Embrace really nails it! Creative brilliance, approachable style.
  //            They're the partners you want—artistry meets strategy. Thrilled with
  //            what they achieved!"
  //          </p>
         
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className={`rounded-md  ${getSlideBgColor(4)} p-10 mx-auto`}>
  //         <div className="flex justify-enter mb-4">
  //          <img src={img} alt="" className="rounded w-20 h-20" />
  //            <div className="p-4">
  //              <h4>Amelia Joseph</h4>
  //              <h5>Chief Manager</h5>
  //            </div>
  //          </div>
  //          <p>
  //            Embrace really nails it! Creative brilliance, approachable style.
  //            They're the partners you want—artistry meets strategy. Thrilled with
  //            what they achieved!"
  //          </p>
         
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <div className={`rounded-md  ${getSlideBgColor(5)} p-10 mx-auto`}>
  //         <div className="flex justify-enter mb-4">
  //          <img src={img} alt="" className="rounded w-20 h-20" />
  //            <div className="p-4">
  //              <h4>Amelia Joseph</h4>
  //              <h5>Chief Manager</h5>
  //            </div>
  //          </div>
  //          <p>
  //            Embrace really nails it! Creative brilliance, approachable style.
  //            They're the partners you want—artistry meets strategy. Thrilled with
  //            what they achieved!"
  //          </p>
         
  //         </div>
  //       </SwiperSlide> 
       
   
        
     
  //     </Swiper>
    // </div>
//   );
// };

// export default Reviews;


const Reviews = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const getSlideBgColor = (index) => {
    return index === activeIndex ? 'bg-sky-600' : 'bg-slate-200';
  };

  const handlePrevSlide = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="my-20 ml-10">
      <div className="flex justify-between">
        <h1 className="text-5xl font-extrabold mb-14">What Our Client Said about us</h1>
      
          <div className="hidden md:flex p-4 mx-6">
            <button className="bg-slate-200 rounded-full w-12 h-12 mr-4 justify-center" onClick={handlePrevSlide}>
              <img src={arrow2} alt="" className="w-12 h-12" />
            </button>
            <button className="bg-sky-600 rounded-full w-12 h-12 mr-24" onClick={handleNextSlide}>
              <img src={arrow1} alt="" className="w-12 h-12" />
            </button>
          </div>
  
      </div>
     
        <div className="block md:hidden">
          <div className={`rounded-md bg-slate-200 p-10 mx-auto my-4`}>
           <div className="flex justify-enter mb-4">
             <img src={img} alt="" className="rounded w-20 h-20" />
             <div className="p-4">
               <h4>Jacob Joshua</h4>
               <h5>Chief Manager</h5>
             </div>
           </div>
           <p>
             I found the digital expertise I needed. Their creative-professional
             balance exceeded expectations. Friendly interactions, exceptional
             outcomes. For digital enchantment, it's got to be Embrace!
           </p>
        
          </div>
        
        
      <div className={`rounded-md  bg-slate-200 p-10 mx-auto  my-4`}>
       <div className="flex justify-enter mb-4">
         <img src={img} alt="" className="rounded w-20 h-20" />
         <div className="p-4">
           <h4>Jacob Joshua</h4>
           <h5>Chief Manager</h5>
         </div>
       </div>
       <p>
         I found the digital expertise I needed. Their creative-professional
         balance exceeded expectations. Friendly interactions, exceptional
         outcomes. For digital enchantment, it's got to be Embrace!
       </p>
    
      </div>
   
          <div className={`rounded-md  bg-slate-200 p-10 mx-auto my-4`}>
          <div className="flex justify-enter mb-4">
           <img src={img} alt="" className="rounded w-20 h-20" />
             <div className="p-4">
               <h4>Amelia Joseph</h4>
               <h5>Chief Manager</h5>
             </div>
           </div>
           <p>
             Embrace really nails it! Creative brilliance, approachable style.
             They're the partners you want—artistry meets strategy. Thrilled with
             what they achieved!"
           </p>
         
          </div>
      
          <div className={`rounded-md bg-slate-200 p-10 mx-auto my-4`}>
          <div className="flex justify-enter mb-4">
           <img src={img} alt="" className="rounded w-20 h-20" />
             <div className="p-4">
               <h4>Amelia Joseph</h4>
               <h5>Chief Manager</h5>
             </div>
           </div>
           <p>
             Embrace really nails it! Creative brilliance, approachable style.
             They're the partners you want—artistry meets strategy. Thrilled with
             what they achieved!"
           </p>
         
          </div>
        
          <div className={`rounded-md  bg-slate-200 p-10 mx-auto my-4`}>
          <div className="flex justify-enter mb-4">
           <img src={img} alt="" className="rounded w-20 h-20" />
             <div className="p-4">
               <h4>Amelia Joseph</h4>
               <h5>Chief Manager</h5>
             </div>
           </div>
           <p>
             Embrace really nails it! Creative brilliance, approachable style.
             They're the partners you want—artistry meets strategy. Thrilled with
             what they achieved!"
           </p>
         
          </div>
       
          <div className={`rounded-md  bg-slate-200 p-10 mx-auto my-4`}>
          <div className="flex justify-enter mb-4">
           <img src={img} alt="" className="rounded w-20 h-20" />
             <div className="p-4">
               <h4>Amelia Joseph</h4>
               <h5>Chief Manager</h5>
             </div>
           </div>
           <p>
             Embrace really nails it! Creative brilliance, approachable style.
             They're the partners you want—artistry meets strategy. Thrilled with
             what they achieved!"
           </p>
         
          </div>
          </div>
    <div className="hidden md:block">
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={50}
  
    slidesPerView={1}
    breakpoints={{
      640: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.5,
      },
    }}
    navigation={{
      prevEl: ".swiper-prev",
      nextEl: ".swiper-next",
    }}
    onSwiper={(swiper) => {
      swiperRef.current = swiper;
      console.log(swiper);
    }}
    onSlideChange={(swiper) => handleSlideChange(swiper)}
  >
       
        <SwiperSlide>
      
          <div className={`rounded-md  ${getSlideBgColor(0)} p-10 mx-auto`}>
           <div className="flex justify-enter mb-4">
             <img src={img} alt="" className="rounded w-20 h-20" />
             <div className="p-4">
               <h4>Jacob Joshua</h4>
               <h5>Chief Manager</h5>
             </div>
           </div>
           <p>
             I found the digital expertise I needed. Their creative-professional
             balance exceeded expectations. Friendly interactions, exceptional
             outcomes. For digital enchantment, it's got to be Embrace!
           </p>
        
          </div>
        </SwiperSlide>
        <SwiperSlide>
      
      <div className={`rounded-md  ${getSlideBgColor(1)} p-10 mx-auto`}>
       <div className="flex justify-enter mb-4">
         <img src={img} alt="" className="rounded w-20 h-20" />
         <div className="p-4">
           <h4>Jacob Joshua</h4>
           <h5>Chief Manager</h5>
         </div>
       </div>
       <p>
         I found the digital expertise I needed. Their creative-professional
         balance exceeded expectations. Friendly interactions, exceptional
         outcomes. For digital enchantment, it's got to be Embrace!
       </p>
    
      </div>
    </SwiperSlide>
        <SwiperSlide>
          <div className={`rounded-md  ${getSlideBgColor(2)} p-10 mx-auto`}>
          <div className="flex justify-enter mb-4">
           <img src={img} alt="" className="rounded w-20 h-20" />
             <div className="p-4">
               <h4>Amelia Joseph</h4>
               <h5>Chief Manager</h5>
             </div>
           </div>
           <p>
             Embrace really nails it! Creative brilliance, approachable style.
             They're the partners you want—artistry meets strategy. Thrilled with
             what they achieved!"
           </p>
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`rounded-md  ${getSlideBgColor(3)} p-10 mx-auto`}>
          <div className="flex justify-enter mb-4">
           <img src={img} alt="" className="rounded w-20 h-20" />
             <div className="p-4">
               <h4>Amelia Joseph</h4>
               <h5>Chief Manager</h5>
             </div>
           </div>
           <p>
             Embrace really nails it! Creative brilliance, approachable style.
             They're the partners you want—artistry meets strategy. Thrilled with
             what they achieved!"
           </p>
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`rounded-md  ${getSlideBgColor(4)} p-10 mx-auto`}>
          <div className="flex justify-enter mb-4">
           <img src={img} alt="" className="rounded w-20 h-20" />
             <div className="p-4">
               <h4>Amelia Joseph</h4>
               <h5>Chief Manager</h5>
             </div>
           </div>
           <p>
             Embrace really nails it! Creative brilliance, approachable style.
             They're the partners you want—artistry meets strategy. Thrilled with
             what they achieved!"
           </p>
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`rounded-md  ${getSlideBgColor(5)} p-10 mx-auto`}>
          <div className="flex justify-enter mb-4">
           <img src={img} alt="" className="rounded w-20 h-20" />
             <div className="p-4">
               <h4>Amelia Joseph</h4>
               <h5>Chief Manager</h5>
             </div>
           </div>
           <p>
             Embrace really nails it! Creative brilliance, approachable style.
             They're the partners you want—artistry meets strategy. Thrilled with
             what they achieved!"
           </p>
         
          </div>
        </SwiperSlide> 
       
   
        
     
      </Swiper>
    </div>
       
   
    </div>
  );
};

export default Reviews;
