import { exp } from "../assets/assets"
import { animate, motion, transform } from "framer-motion";

const Exp = () => {
  return (
    <div 
        className="py-36">
        <motion.h2
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5}}
            className="my-20 text-center text-4xl font-semibold">
            Experience
        </motion.h2>
        <div>
            {exp.map((exp, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <motion.p 
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5}}
                            className="mb-2 text-md text-neutral-700">{exp.year}
                        </motion.p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <motion.h6 
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.7}}
                            className="mb-2 font-semibold">
                            {exp.role} - <span className="text-sm ">{exp.company}</span>
                        </motion.h6>
                        <motion.p 
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1}}
                            className="mb-4 text-neutral-800">
                            {exp.description}
                        </motion.p>
                        {exp.technologies.map((tech, index) => (
                            <motion.span 
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.9}}
                                key={index} className="mr-2 mt-4 rounded bg-neutral-300 px-2 py-1 text-sm font-medium text-sky-700">{tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Exp
