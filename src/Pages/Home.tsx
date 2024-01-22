import Animation1 from "../components/Animation1";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Animation1 />
        <div className="mt-24">
          <p className="text-5xl md:text-6xl font-bold lg:text-7xl text-[#fff] w-auto text-[12vw]">
            Hi,
          </p>
          <h1 className=" text-5xl font-bold md:text-6xl md:font-bold lg:text-7xl text-[#fff] whitespace-nowrap w-auto text-[12vw]">
            I'm{" "}
            <span className="text-blue-400 mt-2 inline-block">Kelechi,</span>
          </h1>
          <h1 className=" text-5xl md:text-6xl font-bold lg:text-7xl text-[#fff] mt-2 whitespace-nowrap w-auto text-[12vw] ">
            Web Developer
          </h1>
        </div>

        <div>
          <p className="max-w-[100%] md:max-w-[70%] text-white text-sm md:text-[18px] mt-4 leading-[16px] md:leading-[24px]
">
            {/*  I build simple, accessible and mobile responsive websites for individuals and companies. I also create and integrate APIs into web apps that help keep data in sync, automate tasks and enhance productivity. Additionally, I provide continous support for existing projects which may include fixes, updates and development of additional functionality or features.
             */}{" "}
            I'm a skilled web developer with experience in building responsive
            and user-friendly websites. I have the technical expertise to bring
            dynamic and visually appealing interfaces to life. I have built
            stable, elegant, secure and reliable websites with:
          </p>
        </div>
        {/* <p className="font-semibold text-white mt-2 text-sm md:text-[17px]">Email: <span className="text-blue-200 font-normal">awomskelechi@gmail.com</span></p>
            <p className="font-semibold text-white text-sm md:text-[17px] mt-1">Phone: <span className="text-blue-200 font-normal">+2348137031311</span></p>
           */}

        <div>
          <button className="p-4 bg-slate-800 text-white mt-5 text-lg md:text-xl w-[70%] md:w-fit rounded hover:bg-slate-700 transition duration-300 whitespace-nowrap">
            Download Resume
          </button>
        </div>
      
    </Wrapper>
  );
}
