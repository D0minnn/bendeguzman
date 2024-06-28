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

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl font-semibold">
            TECHNOLOGIES
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <ImHtmlFive2 className="text-5xl text-orange-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandCss3 className="text-5xl text-blue-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoJavascript className="text-5xl text-yellow-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFigma className="text-5xl text-"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-5xl text-orange-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-5xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-5xl text-cyan-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-5xl text-violet-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-5xl text-red-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-5xl text-blue-500"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies

