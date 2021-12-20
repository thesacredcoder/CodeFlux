import './App.css'
import Logo from './assets/logo.png'

import leftbg1 from './assets/leftbg1.svg'

function App() {
  return (
    <div className='flex justify-center items-center'>
      <div className='left w-0 hover:bg-second h-screen sm:w-1/2  lg:w-2/5 flex flex-col justify-center items-center'>
        <img src={Logo} alt='' />
        <p className='text-white font-accent text-lg'>
          We got something for everybody
        </p>
      </div>
      <div className='flex flex-col justify-center items-center w-4/5 sm:w-1/2 lg:w-3/5'>
        <div className='flex flex-col justify-center items-center mb-16'>
          {/* <h1 className='title text-black font-brand text-7xl font-medium mb-2'>
            CODE <br />
            FLUX
          </h1> */}
          <div className='mb-0'>
            {/* <img src={Logo} alt="" /> */}
            <img src={leftbg1} height='300px' width='300px' alt='' />
          </div>

        </div>
          <p className='regis mb-8 font-lg text-main font-brand uppercase font-bold'>
            Come join us!
          </p>
        <form className='flex flex-col w-full justify-center items-center'>
          <input
            type='text'
            placeholder='Name'
            className='mb-4 p-4 w-full md:w-4/5 lg:w-3/5 border-2 rounded-lg outline-main'
          />
          <input
            type='text'
            placeholder='Email'
            className='mb-4 p-4 w-full md:w-4/5 lg:w-3/5 border-2 rounded-lg outline-main'
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
