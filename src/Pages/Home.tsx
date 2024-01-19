
import Navbar from "../components/Navbar.tsx";

import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 gap-6 md:gap-1">
        <div className="h-screen">
          <Navbar />
          <section className="mt-12 md:mt-16">
            <p className="text-lg md:text-xl font-semibold lg:text-3xl text-[#fff]">
              Hi there!
            </p>
            <h1 className="max-w-[50%] md:max-w-[80%] text-5xl font-semibold md:text-6xl md:font-bold lg:text-7xl text-[#fff]">
              I am <span className="text-blue-400">Kelechi.</span>
            </h1>
            <h1 className="max-w-[50%] md:max-w-[80%] text-5xl hidden md:inline-block md:text-6xl md:font-semibold lg:text-7xl text-[#fff]">
              Fullstack Web Developer
            </h1>

            <p className="max-w-[100%] md:max-w-[60%] text-[#fff] text-sm md:text-[17px] mt-2">
              
              <span className="text-blue-200 md:hidden inline-block font-semibold">
                I am a Fullstack Web Developer. 
              </span> I am a results-oriented, ambitious, and experienced developer with a track record of delivering features for large-scale and real-time applications, in addition to constructing consumer-facing products. I am actively pursuing a frontend or backend position within a progressive company, where I can leverage my creativity and adeptness in handling diverse projects.
            </p>
            <p className="font-semibold text-white mt-2 text-sm md:text-[17px]">Email: <span className="text-blue-200 font-normal">awomskelechi@gmail.com</span></p>
            <p className="font-semibold text-white text-sm md:text-[17px] mt-1">Phone: <span className="text-blue-200 font-normal">+2348137031311</span></p>
          
            {/* <p className="max-w-[80%] text-[#fff] text-sm md:text-[17px] mt-2"> <span className="text-blue-300 font-semibold"></span></p>
              <p className="max-w-[80%] text-[#fff] text-sm md:text-[17px] mt-2"> <span className="text-blue-300 font-semibold"></span> </p>
              <p className="max-w-[80%] text-[#fff] text-sm md:text-[17px] mt-2"> <span className="text-blue-300 font-semibold"></span> </p>
 */}
            
            <button className="p-4 bg-slate-800 text-white mt-5 text-base font-medium md:text-xl w-[70%] md:w-[40%] rounded hover:bg-slate-700 transition duration-300 font-mono">
              Download Resume
            </button>
          </section>
        </div>
        
      </div>
    </Wrapper>
  );
}
