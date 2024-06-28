import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3 } from "react-icons/tb";
import { BiLogoJavascript } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { animate, motion, transform } from "framer-motion";

const iconVar = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
});

const Technologies = () => {
  return (
    <div 
        className="pt-4 pb-24">
        <motion.h2 
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5}}
            className="my-20 text-center text-4xl font-semibold">
            Technologies
        </motion.h2>
        <motion.div 
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVar(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <ImHtmlFive2 className="text-5xl text-orange-500"/>
            </motion.div>
            <motion.div 
                variants={iconVar(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandCss3 className="text-5xl text-blue-600"/>
            </motion.div>
            <motion.div 
                variants={iconVar(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoJavascript className="text-5xl text-yellow-500"/>
            </motion.div>
            <motion.div 
                variants={iconVar(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFigma className="text-5xl text-"/>
            </motion.div>
            <motion.div 
                variants={iconVar(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-5xl text-orange-600"/>
            </motion.div>
            <motion.div 
                variants={iconVar(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                variants={iconVar(5.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-5xl text-cyan-500"/>
            </motion.div>
            <motion.div 
                variants={iconVar(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-5xl text-violet-700"/>
            </motion.div>
            <motion.div 
                variants={iconVar(6.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-5xl text-red-500"/>
            </motion.div>
            <motion.div 
                variants={iconVar(7)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-5xl text-blue-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies

