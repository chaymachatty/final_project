import React from 'react'

const Footer = () => {
  return (
    
    <div className='container mx-auto py-10'>
      
        <div className="grid lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-5 items-start">
            <img className='h-10' src="/assets/LOGO.png" alt="" />
            <p className='text-black w-[300px]'> Growfy is a template highly suitable for modern marketing agencies, digital studios, startups and businesses. The design is made in the dark style, which makes the site memorable and you can easily adapt it to your brand.</p>
            <img src="/assets/social.svg" alt="" />
            </div>

            <div className="flex flex-col gap-5">
                <p className='text-black font-semibold text-xl'>Pages</p>
                <p className='text-black text-sm cursor-pointer'>Home</p>
                <p className='text-black text-sm cursor-pointer'>Article</p>
                <p className='text-black text-sm cursor-pointer'>Projets</p>
                <p className='text-black text-sm cursor-pointer'>Services</p>
                <p className='text-black text-sm cursor-pointer'>A propos</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className='text-black  font-semibold text-xl'>Pages Utiles</p>
                <p className='text-black text-sm cursor-pointer'>Formulaire de devis</p>

            </div>
            <div className="flex gap-5 flex-col">
              <p className='text-black  font-semibold text-xl'> Siége Social GAFSA : Avenue El Hakim Gafsa -Z1 -2100 .</p>
              <p className='text-black'> ✉ Adresse e-mail </p>
              <p className='text-black'> ☎️ 58176730 </p>
              <p className='text-black'>Localistion de la société</p>
            </div>
        </div>
    </div>
  )
}

export default Footer