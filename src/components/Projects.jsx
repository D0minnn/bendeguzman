import { proj } from "../assets/assets"
import { animate, motion, transform } from "framer-motion";


const Projects = () => {
  return (
    <div className="py-32">
      <motion.h2 
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5}}
        className="my-20 text-center text-4xl font-semibold">Projects
      </motion.h2>
      <div className="">
        {proj.map((proj, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5}}
                  className="w-full lg:w-1/3 pr-8">
                    <img src={proj.image} width={500} height={500} alt={proj.title} className="mb-6 rounded"/>
                </motion.div>
                <motion.div 
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.7}}
                  className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {proj.title}
                    </h6>
                    <p className="mb-4 text-neutral-700">
                        {proj.desc}
                    </p>
                    {proj.technologies.map((technologies, index) => (
                        <span key={index} className="mr-2 rounded bg-neutral-300 px-2 py-1 text-sm font-medium text-sky-700">
                            {technologies}
                        </span>
                    ))}
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
