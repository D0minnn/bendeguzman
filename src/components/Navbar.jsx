import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="ml-16 flex flex-shrink-0 items-center">
            <motion.h4 
              initial={{ x: -100, opacity: 0}}
              animate={{ x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 1.8}}
              className="font-semibold">
                Benedic de Guzman
            </motion.h4>
        </div>
        <motion.div 
          initial={{ x: 100, opacity: 0}}
          animate={{ x: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 1.8}}
          className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/benedicdgzmn/" className="">
              <FaLinkedin />
            </a>
            <a href="https://github.com/D0minnn">
              <FaGithub />
            </a>
        </motion.div>

    </nav>
  )
}

export default Navbar
