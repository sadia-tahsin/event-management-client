import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import img from "@/assets/hero image.png";
import icon1 from "@/assets/Icons (2).png";
import icon2 from "@/assets/Icons.png";
import icon3 from "@/assets/Icons (1).png";
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
        <div className="max-w-full lg:max-w-2xl mt-8 lg:mt-24 mx-auto lg:mx-0 font-roboto">
          <motion.div variants={intro} initial="hidden" animate="visible">
            <motion.h1
              variants={introChildren}
              className="text-5xl lg:text-6xl font-extrabold font-roboto text-left lg:text-left"
            >
              Brand New <br /> Event Packages
            </motion.h1>
            <div>
              <motion.h2
                variants={introChildren}
                className="text-4xl lg:text-5xl font-extrabold pt-2 
                text-left lg:text-left font-roboto"
                style={{color:'rgba(87, 1, 203,1)'}}
              >
                <span style={{color:'rgba(254, 137, 0, 1)'}}>For W</span>inter
              </motion.h2>
            </div>

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
            <div className="grid grid-cols-3 gap-5">
              <div
                className="rounded-3xl border-2 border-slate-50"
                style={{ backgroundColor: "hsl(211, 54%, 70%, 10%)" }}
              >
                <div
                  style={{ backgroundColor: "hsl(245, 58%, 60%, 35%)" }}
                  className="rounded-full h-10 w-10 
             ml-3 mt-4 mb-8 
             flex items-center justify-center"
                >
                  <img src={icon1} alt="" />
                </div>
                <div
                  className="ml-2 mb-4 p-2 text-sm leading-5 font-light font-sans"
                  style={{ color: "hsl(0, 0%, 20%)" }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus imperdiet sed id.
                  </p>
                </div>
              </div>
              <div
                className="rounded-3xl border-2 border-slate-50"
                style={{ backgroundColor: "hsl(211, 54%, 70%, 10%)" }}
              >
                <div
                  style={{ backgroundColor: "hsl(45, 86%, 62%, 35%)" }}
                  className="rounded-full h-10 w-10 
             ml-3 mt-4 mb-8 
             flex items-center justify-center"
                >
                  <img src={icon2} alt="" />
                </div>
                <div
                  className="ml-2 mb-4 p-2 text-sm leading-5 font-light font-sans"
                  style={{ color: "hsl(0, 0%, 20%)" }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus imperdiet sed id.
                  </p>
                </div>
              </div>
              <div
                className="rounded-3xl border-2 border-slate-50"
                style={{ backgroundColor: "hsl(211, 54%, 70%, 10%)" }}
              >
                <div
                  style={{ backgroundColor: "hsl(211, 54%, 70%, 25%)" }}
                  className="rounded-full h-10 w-10 
             ml-3 mt-4 mb-8 
             flex items-center justify-center"
                >
                  <img src={icon3} alt="" />
                </div>
                <div
                  className="ml-2 mb-4 p-2 text-sm leading-5 font-light font-sans"
                  style={{ color: "hsl(0, 0%, 20%)" }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus imperdiet sed id.
                  </p>
                </div>
              </div>
            </div>
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
