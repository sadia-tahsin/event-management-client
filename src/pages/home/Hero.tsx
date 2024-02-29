import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import img from "@/assets/hero image.png";
import img2 from "@/assets/Card.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};
const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="max-w-full lg:max-w-2xl mt-8 lg:mt-24 mx-auto lg:mx-0">
          <motion.div variants={intro} initial="hidden" animate="visible">
            <motion.h1
              variants={introChildren}
              className="text-4xl lg:text-6xl font-extrabold text-left lg:text-left"
            >
              Brand New <br /> Event Packages
            </motion.h1>
            <motion.h2
              variants={introChildren}
              className="text-3xl lg:text-5xl font-extrabold pt-2 bg-gradient-to-r from-orange-400 to-indigo-900 text-transparent bg-clip-text text-left lg:text-left"
            >
              For Winter
            </motion.h2>

            <motion.p
              variants={introChildren}
              className="py-8 text-left lg:text-left max-w-[50ch]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              Faucibus nec gravida ipsum pulvinar vel non.
            </motion.p>
            <motion.div
              variants={introChildren}
              className="text-left lg:text-left"
            >
              <Button className="rounded-none bg-sky-600 px-10">Explore</Button>
            </motion.div>
          </motion.div>

          <div className="mt-10 mx-auto">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="lg:block ml-10 mt-2">
          <img src={img} alt="" className="h-[740px] w-[560px]" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
