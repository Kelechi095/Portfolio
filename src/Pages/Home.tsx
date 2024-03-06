import { useEffect, useState } from "react";
import Animation1 from "../components/Animation1";
import Wrapper from "../components/Wrapper";
import resume from "../public/resume.pdf";

export default function Home() {
  const [skillIndex, setSkillIndex] = useState(0);

  const skills = [
    "Mobile/responsive design",
    "Cross browser compatibility",
    "Great web accessibility",
    "Beautiful user interface",
    "Functional user experience",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      if (skillIndex < 4) {
        setSkillIndex((prev) => prev + 1);
      } else {
        setSkillIndex(0);
      }
    }, 3000);
    return () => clearTimeout(id);
  }, [skillIndex]);

  return (
    <Wrapper>
      <Animation1 />
      <div className="mt-16 md:mt-24">
        <p className="text-5xl md:text-6xl font-bold lg:text-7xl text-[#fff] w-auto text-[12vw]">
          Hi,
        </p>
        <h1 className=" text-5xl font-bold md:text-6xl md:font-bold lg:text-7xl text-[#fff] whitespace-nowrap w-auto text-[12vw]">
          I'm <span className="text-blue-400 mt-2 inline-block">Kelechi,</span>
        </h1>
        <h1 className=" text-5xl md:text-6xl font-bold inline-block lg:text-7xl text-[#fff] mt-2 whitespace-nowrap w-auto text-[11vw] ">
          Web Developer
        </h1>
      </div>

      <div>
        <p
          className="max-w-[100%] md:max-w-[70%] text-white text-base text-justify md:text-[18px] mt-4 leading-[22px] md:leading-[24px]
"
        >
          I'm a skilled web developer with experience in building responsive and
          user-friendly websites for individuals and companies. I can create and
          integrate APIs into web apps and also provide continous support for
          existing projects which may include fixes, updates and development of
          additional functionality or features. I have built stable
          websites with:
        </p>
        <p className="mt-2 font-semibold text-lg md:text-xl text-blue-400">
          - {skills[skillIndex]}
        </p>
      </div>

      <div>
        <a href={resume} download="resume" target="_blank">
          <button className="p-4 bg-slate-800 text-white mt-5 text-lg md:text-xl w-[70%] md:w-fit rounded hover:bg-slate-700 transition duration-300 whitespace-nowrap">
            Download Resume
          </button>
        </a>
      </div>
    </Wrapper>
  );
}
