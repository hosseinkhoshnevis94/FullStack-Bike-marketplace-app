import React from 'react'
import { Button } from '@nextui-org/react';

export default function HeroSetion() {
    return (
        <div className="flex flex-col md:flex-row  py-16 px-4 md:px-12">

          <div className="md:w-1/2 md:pr-12 flex gap-7 flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Ride</h1>
            
            <p className="text-lg mb-6">Explore a wide selection of bikes for every need and budget. Whether you're a beginner or an experienced cyclist, we've got you covered.</p>
            <Button color="primary" className='w-28' variant="shadow">Start Browsing</Button>
            <span className="font-medium text-2xl ml-5  font-['Licorice'] absolute top-[73%] left-[53%]">Your next BIKE...</span>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/here-bg.png"
              alt="Picture of the author"

            />
          </div>
        </div>
      );
}
