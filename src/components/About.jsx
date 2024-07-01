import Gradpic from "../assets/Gradpic.jpeg"
import { About_me, educ1 } from "../assets/assets"
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-64 pb-24">
      <motion.h1 
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5}}
        className="my-20 text-start font-semibold text-5xl">About Me
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p 
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8}}
              className="font-medium text-justify text-xl">
              {About_me}
            </motion.p>
          </div>
          {/* <div className="px-2 py-1 border rounded-lg border-neutral-800">
            <button>
              My CV
            </button>
          </div> */}
          <div className="py-20"> 
            <motion.h2 
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5}}
              className="flex lg:justify-start font-semibold text-2xl py-14">
                Education
            </motion.h2>
            <div className="py-4">
              <motion.span 
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5}}
                className="flex lg:justify-start font-semibold">
                Bachelor of Science in Computer Science, Specializing in Intelligent Systems
              </motion.span>
              <motion.span 
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5}}
                className="flex lg:justify-start">
                De La Salle University – Dasmariñas
              </motion.span>
              <motion.span 
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5}}
                className="flex lg:justify-start">
                2020 - 2024
              </motion.span>
            </div>
            <div className="py-4">
              <motion.span 
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5}}
                className="flex lg:justify-start font-semibold">
                Strand: Science, Technology, Engineering and Mathematics (STEM)
              </motion.span>
              <motion.span 
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5}}
                className="flex lg:justify-start">
                Lyceum of the Philippines University – International School Cavite
              </motion.span>
              <motion.span 
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5}}
                className="flex lg:justify-start">
                2018 - 2020
              </motion.span>
            </div>
          </div>
        </div>
        <motion.div 
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8}}
          className="w-full lg:w-2/5 lg:pl-12">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={Gradpic}/>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
