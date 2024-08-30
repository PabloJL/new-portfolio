import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Title(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <h1 className="text-white mb-4 text-3xl lg:text-7xl lg:leading-normal font-extrabold h-[100px] md:h-fit">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-slate-200">
            Hello, I&apos;m
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Pablo",
              1000,
              "Web Developer",
              1000,
              "Software Developer",
              1000,
              "Mobile Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        {props.introMessage}
        {props.buttons}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="col-span-4 place-content-center mt-10 lg:mt-0 mx-auto lg:place-content-start text-center relative inline-block"
      >
        <div className="mx-auto bg-gradient-to-b from-indigo-600 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[390px]  relative overflow-hidden  ">
          {props.image}
        </div>
      </motion.div>
    </div>
  );
}
