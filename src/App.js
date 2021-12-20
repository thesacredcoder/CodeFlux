import './App.css'
import Logo from "./assets/logo.png";

function App() {
  return (
    <div className='flex justify-center items-center'>
      <div className='left w-0 hover:bg-second h-screen sm:w-1/2 flex justify-center items-center'>
        <img src={Logo} alt="" />
      </div>
      <div className='flex flex-col justify-center items-center w-4/5 sm:w-1/2'>
        <div className='flex flex-col justify-center items-center mb-16'>
          <h1 className='text-black font-brand text-7xl font-medium mb-2'>
            CODE <br />
            FLUX
          </h1>
          <p className='text-black font-accent text-lg'>
            We got something for Everybody
          </p>
        </div>
        <form className='flex flex-col w-full justify-center items-center'>
          <img src='../public/android-chrome-512x512.png' alt='' />
          <input
            type='text'
            placeholder='Name'
            className='mb-4 p-4 w-full md:w-4/5 lg:w-3/5 border-2 border-second rounded-lg outline-main'
          />
          <input
            type='text'
            placeholder='Email'
            className='mb-4 p-4 w-full md:w-4/5 lg:w-3/5 border-2 border-second rounded-lg outline-main'
          />
          <button className='button bg-second p-4 rounded-lg text-white font-brand uppercase font-bold tracking-wider w-full md:w-4/5 lg:w-3/5 ease-out transition-all'>
            {/* <button className="button p-4 rounded-lg text-white font-brand uppercase font-bold tracking-wider w-1/2 ease-out transition-all"> */}
            Register Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
