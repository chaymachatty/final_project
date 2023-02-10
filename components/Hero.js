import React from 'react'

const Hero = () => {
  return (
    <div className='relative' >
               <img className='absolute top-24 left-14' src="/assets/dot.svg" alt="dot" />
        <div className=" container mx-auto flex justify-between flex-col lg:flex-row md:flex-nowrap items-center flex-wrap">
            <div className="flex flex-col gap-4">
                <p className='text-5xl text-black font-bold'>Le conseil, l'étude <br /> et l'installation photovoltaique <br /> C'est notre mission!</p>
                <p className='text-base text-black '>Ecosolutions Tunisie créée en 2020 par des jeunes originaires <br /> des régions intérieures Kasserine et Gafsa afin de promouvoir<br /> l'utilisation des énergies renouvelables dans ces régions</p>
                <div className="flex gap-5 items-center">
                    <button className='btn btn-primary rounded-full'>Our Service</button>
                    <button className='btn  bg-gray-700 rounded-full' >Contacter Nous</button>
                </div>
            </div>
            <img className='h-[550px]' src="/assets/hero.svg" alt="" />
        </div>
    </div>
  )
}

export default Hero