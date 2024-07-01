import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.7, delay: delay}
  }
})

const Hero = () => {
  return (
    <div className='pb-48 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-3/4'>
                <div className='flex flex-col items-start lg:items-start'>
                    <motion.h1 
                      variants={container(1)}
                      initial="hidden"
                      animate="visible"
                      className='font-semibold text-7xl lg:text-9xl'>
                        HELLO, I AM
                    </motion.h1>
                    <motion.h1 
                      variants={container(1.2)}
                      initial="hidden"
                      animate="visible"
                      className='font-semibold text-7xl lg:text-9xl'>
                        BENEDIC
                    </motion.h1>
                    <motion.h1 
                      variants={container(1.4)}
                      initial="hidden"
                      animate="visible"
                      className='font-semibold text-7xl lg:text-9xl'>
                        DE GUZMAN
                    </motion.h1>
                    
                    <motion.span 
                      variants={container(1.6)}
                      initial="hidden"
                      animate="visible"
                      className='font-semibold text-4xl'>
                        UI/UX DESIGN | FRONT-END DEVELOPMENT | WEB DESIGN

                    </motion.span>
                    
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Hero
