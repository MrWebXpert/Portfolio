import { motion } from "framer-motion";

import { styles } from "../styles";

import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute mt-5 inset-0 top-[100px] mx-auto flex flex-row item-start gap-5 max-w-7xl`}
      >
        <div className="flex flex-col items-center justify-center -mt-72">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 h-40 sm:h-80 bg-gradient-to-b from-violet-500" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi , It's Me. <span className="text-[#915eff] font-semibold">MrHammadSandhu.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            And I'm Full Stack Developer. <br className="hidden sm:block" />{" "}
            and Designer
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute flex items-center justify-center w-full xs:bottom-1 bottom-1">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
