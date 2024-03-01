import Container from "@/components/Container";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import '@/lib/Gallery.css'
import listIcon from "@/assets/Group 16.png"
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Services = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: componentRef,
    offset: ['0 1','1.2 1']
  });
  const scaleValues = useTransform(scrollYProgress, [0,1],[0.9,1])
  const opacityValues = useTransform(scrollYProgress, [0,0.7],[0.1,1])
  // const scaleValues = useTransform(scrollYProgress, [0,1],[0.9,1])
  const getServices = async () => {
    return await fetch("https://assignment5-server-roan.vercel.app/services").then((res) =>
      res.json()
    );
  };
  const { data } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  console.log(data);

  return (
<Container className="mt-24">
  <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4">Our Services</h1>
  <p className="text-center mb-8 md:mb-14">
    Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
    ornare viverra. Ultrices <br />faucibus neque velit risus ac id
    lorem.
  </p>
  <motion.div
    style={{
      scale: scaleValues,
      opacity: opacityValues
    }}
    ref={componentRef}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-xl px-4"
  >
    {data &&
      data.slice(0, 3).map((service: { _id: Key | null | undefined; Photo: string; description: string; features: string[]; Available: string; name:string }, index: number) => (
        <div
          key={service._id}
          className={`bg-fuchsia-100 rounded-md ${
            // Conditionally apply different background colors based on index
            index === 0
              ? 'bg-fuchsia-100'
              : index === 1
              ? 'bg-gradient-to-r from-fuchsia-100  via-sky-50  to-sky-100'
              : 'bg-gradient-to-r from-fuchsia-100  via-sky-50  to-sky-100'
          }`}
        >
          <div className="relative p-6">
          {service.Photo ? (
            <img
              src={service.Photo}
              alt=""
              className="object-cover w-full h-48 md:h-auto"
            />):( <p className="pb-2">{service.description}</p>)}
            <h1 className="text-xl md:text-3xl font-extrabold pt-5 pb-2">
              {service.name}
            </h1>
           
            <ul className="list-none m-4 py-2">
              {service.features.map((item: string, index: number) => (
                <li key={index} className="flex items-center my-4">
                  <img src={listIcon} alt="Icon" className="w-6 h-6 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
            {/* Render button if service is available */}
            {service.Available && (
              <Button className="rounded-none bg-sky-600 px-10 w-full">
                {service.Available}
              </Button>
            )}
          </div>
        </div>
      ))}
  </motion.div>
</Container>

  );
};

export default Services;
