import "./App.css";
// import Logo from "./assets/logo.png";

function App() {
  return (
    <div className="flex ">
      <div className="bg-main hover:bg-second h-screen w-1/2 flex justify-center items-center">
        <div>
          <h1 className="text-white font-brand text-7xl font-medium mb-2">
            CODE <br />
            FLUX
          </h1>
          <p className="text-white font-accent text-lg">
            We got something for Everybody
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <form className="flex flex-col w-full justify-center items-center">
          <input
            type="text"
            placeholder="Name"
            className="mb-4 p-4 w-1/2 border-2 border-second rounded-lg outline-main"
          />
          <input
            type="text"
            placeholder="Email"
            className="mb-4 p-4 w-1/2 border-2 border-second rounded-lg outline-main"
          />
          <button className="bg-second p-4 rounded-lg text-white font-brand uppercase font-bold tracking-wider w-1/2 hover:bg-main ease-out transition-all">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
