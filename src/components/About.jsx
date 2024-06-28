import Gradpic from "../assets/Gradpic.jpeg"
import { About_me, educ1 } from "../assets/assets"

const About = () => {
  return (
    <div className="pt-64">
      <h1 className="my-20 text-start font-semibold text-5xl">About Me</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="font-medium text-justify text-2xl">
              {About_me}
            </p>
          </div>
          <div className="py-20"> 
            <h2 className="flex lg:justify-start font-semibold text-2xl py-14">Education</h2>
            <div className="py-4">
              <span className="flex lg:justify-start font-semibold">
                Bachelor of Science in Computer Science, Specializing in Intelligent Systems
              </span>
              <span className="flex lg:justify-start">
                De La Salle University – Dasmariñas
              </span>
              <span className="flex lg:justify-start">
                2020 - 2024
              </span>
            </div>
            <div className="py-4">
              <span className="flex lg:justify-start font-semibold">
                Strand: Science, Technology, Engineering and Mathematics (STEM)
              </span>
              <span className="flex lg:justify-start">
                Lyceum of the Philippines University – International School Cavite
              </span>
              <span className="flex lg:justify-start">
                2018 - 2020
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 lg:pl-12">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={Gradpic}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
