import React from 'react'
import ScrollBasedMarquee from "../Animations/ScrollBasedMarquee";

const Page2 = () => {
  return (
    <div className='min-h-[100vh]  font-[Aux-Mono] w-full'>
      <div className="w-full absolute scale-[105%] -mt-10 bg-[#9D2117] rotate-4 py-4">
          <ScrollBasedMarquee speed={300} /> {/* Reduced speed to reasonable value */}
      </div>
     <div className="w-full absolute scale-[105%] -mt-10 bg-[#9D2117] -rotate-4 py-4">
          <ScrollBasedMarquee speed={300} reverse={true} />
      </div>

      <div className='py-[20vh] min-h-[100vh] w-full'>
        <h1 className="text-center uppercase text-[#9D2117] text-6xl">
          What's <span className='text-white'>Exquisite</span> About us
        </h1>
      </div>
    </div>
  )
}

export default Page2