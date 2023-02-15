import React from 'react'
import { download } from '../assets/index.js'
import { downloadImage } from '../helpers/index.js'

export default function ImageCard({ _id, name, prompt, photo }) {

  return <section className='rounded-3xl dark relative group shadow-card hover:shadow-cardhover card h-fit'>
    <img src={photo} alt={prompt} className='w-full h-auto object-contain rounded-3xl' />
    <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-black opacity-90 m-2 p-4 rounded-md'>
      <p className='text-rose-50 text-md overflow-y-auto'>{prompt}
      </p>
      <div className='mt-5 flex justify-between items-center gap-2'>
        <div className='flex items-center gap-2'>
          <div className='w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-rose-50 text-xs font-bold' >
            {name[0]}
          </div>
          <p className='text-rose-50 text-sm'>{name}</p>
        </div>
        <button type='button' onClick={()=>downloadImage(_id,photo)} className='outline-none bg-transparent border-none'>
          <img src={download} alt='download' className='w-6 h-6 object-cover invert' />
        </button>
      </div>

    </div>
  </section>
}
