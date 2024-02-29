; // Import your container component
import Container from '@/components/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Newsfeed = () => {
  return (
    <Container className='mt-16 py-16 mx-auto'>
       <h1 className="text-5xl font-extrabold text-center mb-5">
       Venture into Our Latest Posts
      </h1>
     <div className='hidden md:block'>
     <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="bg-gray-100 rounded-md p-6 ">
            <h2 className="text-lg font-bold mb-2">Slide 1</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 rounded-md p-6 ">
            <h2 className="text-lg font-bold mb-2">Slide 2</h2>
            <p className="text-gray-700">Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 rounded-md p-6">
            <h2 className="text-lg font-bold mb-2">Slide 3</h2>
            <p className="text-gray-700">Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="bg-gray-100 rounded-md p-6">
            <h2 className="text-lg font-bold mb-2">Slide 3</h2>
            <p className="text-gray-700">Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 rounded-md p-6">
            <h2 className="text-lg font-bold mb-2">Slide 4</h2>
            <p className="text-gray-700">Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 rounded-md p-6">
            <h2 className="text-lg font-bold mb-2">Slide 5</h2>
            <p className="text-gray-700">Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
     </div>
     <div className='block md:hidden'>
     
          <div className="bg-gray-100 rounded-md p-6 my-4">
            <h2 className="text-lg font-bold mb-2">Slide 1</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
        
          <div className="bg-gray-100 rounded-md p-6 my-4">
            <h2 className="text-lg font-bold mb-2">Slide 2</h2>
            <p className="text-gray-700">Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
       
          <div className="bg-gray-100 rounded-md p-6 my-4">
            <h2 className="text-lg font-bold mb-2">Slide 3</h2>
            <p className="text-gray-700">Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
        
          <div className="bg-gray-100 rounded-md p-6 my-4">
            <h2 className="text-lg font-bold mb-2">Slide 4</h2>
            <p className="text-gray-700">Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
       
          <div className="bg-gray-100 rounded-md p-6 my-4">
            <h2 className="text-lg font-bold mb-2">Slide 5</h2>
            <p className="text-gray-700">Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
   
          <div className="bg-gray-100 rounded-md p-6">
            <h2 className="text-lg font-bold mb-2">Slide 6</h2>
            <p className="text-gray-700">Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          </div>
        
     </div>
    </Container>
  );
}

export default Newsfeed;
