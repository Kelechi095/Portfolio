
import Navbar from "../components/Navbar.tsx";

import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 gap-6 md:gap-1">
        <div className="h-screen">
          <Navbar />
          <section className="mt-8 md:mt-24">
            <p className="text-lg md:text-xl font-semibold lg:text-3xl text-[#fff]">
              Hi there!
            </p>
            <h1 className="max-w-[50%] md:max-w-[80%] text-5xl font-semibold md:text-6xl md:font-bold lg:text-7xl text-[#fff]">
              I am <span className="text-blue-400">Kelechi.</span>
            </h1>

            <p className="max-w-[100%] md:max-w-[80%] text-[#fff] text-sm md:text-[17px] mt-2 md:leading-5">
              I am a{" "}
              <span className="text-blue-200 font-semibold">
                Fullstack Web developer
              </span>{" "}. I am goal-driven, ambitious, and seasoned developer
              with experience in shipping features for large-scale and real-time
              applications, as well as building consumer-facing products.
              
               I am
              actively seeking a frontend or backend role in a growing company
              where I can apply my creativity and keen ability to work on
              diverse projects.
            </p>
            {/* <p className="max-w-[80%] text-[#fff] text-sm md:text-[17px] mt-2"> <span className="text-blue-300 font-semibold"></span></p>
              <p className="max-w-[80%] text-[#fff] text-sm md:text-[17px] mt-2"> <span className="text-blue-300 font-semibold"></span> </p>
              <p className="max-w-[80%] text-[#fff] text-sm md:text-[17px] mt-2"> <span className="text-blue-300 font-semibold"></span> </p>
 */}
            
            <button className="p-4 bg-slate-800 text-white mt-5 text-base font-medium md:text-xl w-[70%] md:w-[40%] rounded hover:bg-slate-700 transition duration-300 font-mono">
              Download Resume
            </button>
          </section>
        </div>
        <div className="hidden md:grid items-center">
          
        </div>
      </div>
    </Wrapper>
  );
}
