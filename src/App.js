import "./App.css";

import NewLogo from "./assets/NewLogo.png";
import leftbg1 from "./assets/leftbg1.svg";

function App() {
  return (
    <div className="main flex justify-center items-center">
      <div className="left w-0 hover:bg-second h-screen md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center">
        <img src={NewLogo} alt="" className="h-96 w-96" />
        <p className="tagline text-white font-accent text-2xl -mt-14">
          Coding Made Simple!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-4/5 sm:w-3/5 md:w-1/2 lg:w-3/5">
        <div className="flex flex-col justify-center items-center mb-16">
          <img className="fixed top-5 h-24 md:hidden" src={NewLogo} alt="" />
          <div className="mb-0 h-[250px] w-[300px] lg:h-[250px] lg:w-[300px] md:h-[200px] md:w-[250px]">
            <img src={leftbg1} alt="" />
          </div>
        </div>
        <p className="regis mb-8 font-lg text-main font-brand uppercase font-bold">
          Come join us!
        </p>
        <div>
          <a
            href="https://forms.gle/KUmcGHqrgzH1uHyR8"
            rel="noreferrer"
            target="_blank"
            class="relative inline-block text-lg group"
          >
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-purple-800 transition-colors duration-300 ease-out border-2 border-purple-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-purple-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-purple-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">Register Here</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-purple-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
