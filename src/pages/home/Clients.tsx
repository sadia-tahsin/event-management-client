import c1 from '@/assets/company_logo.jpg'
import c2 from '@/assets/Company logo (1).jpg'
import c3 from '@/assets/Company logo (2).jpg'
import c4 from '@/assets/Company logo (3).jpg'
import c5 from '@/assets/Company logo (4).jpg'
import c6 from '@/assets/Company logo (5).jpg'
import c7 from '@/assets/Company logo (6).jpg'
import c8 from '@/assets/Company logo (7).jpg'
import c9 from '@/assets/Company logo (8).jpg'
import c10 from '@/assets/Company logo (9).jpg'
import Container from '@/components/Container'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
const Clients = () => {
    const componentRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
    target: componentRef,
    offset: ['0 1','1.2 1']
  });
//   const scaleValues = useTransform(scrollYProgress, [0,1],[0.9,1])
//   const opacityValues = useTransform(scrollYProgress, [0,1],[0.1,1])
  const xValue = useTransform(scrollYProgress,[0,0.75],[-700,0.5])
    return (
        <Container className='mt-16 py-16'>
            <h1 className='text-6xl text-center font-extrabold mb-20'>Our Valuable Clients</h1>
            <motion.div 
              style={{
                x:xValue
            }} 
            ref = {componentRef}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-20 mx-auto max-w-screen-xl px-10 sm:px-28">
               
                <img src={c1} alt="" className='h-12'/>
                <img src={c2} alt="" className='h-12'/>
                <img src={c3} alt="" className='h-12'/>
                <img src={c4} alt="" className='h-12'/>
                <img src={c5} alt="" className='h-12'/>
                <img src={c6} alt="" className='h-12'/>
                <img src={c7} alt="" className='h-12'/>
                <img src={c8} alt="" className='h-12'/>
                <img src={c9} alt="" className='h-12'/>
                <img src={c10} alt="" className='h-12'/>
            </motion.div>
        </Container>
    );
};

export default Clients;