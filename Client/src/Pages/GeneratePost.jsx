import React, { useState } from 'react'
import { preview } from '../assets/index.js'
import { getRandomPrompt } from '../helpers'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'flowbite-react'
import Form from '../components/Form.jsx';
import Loading from '../components/Loading.jsx';

export default function GeneratePost() {

  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', prompt: '', photo: '' })
  const [generatingImage, setGeneratingImage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState('')

  function handleSubmit() { }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSurpriseMe() {
    setForm({ ...form, prompt: getRandomPrompt(form.prompt) })
  }

  async function generateImage() {
    if (form.prompt) {
      try {
        setGeneratingImage(true)
        const response = await fetch(
          'http://localhost:5000/api/v1/main',
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({ prompt: form.prompt })
          }
        );
        const data = await response.json()
        setForm({ ...form, photo: `data:image/jpeg:b64,${data.photo}` })
      } catch (error) {
        setAlert('Generation or connection error')
        setTimeout(() => setAlert(''), 2000)
        console.log(error);
      } finally {
        setGeneratingImage(false)
      }
    }
    else {
      setAlert('Choose a prompt first!!!')
      setTimeout(() => setAlert(''), 2000)
    }
  }

  return <main className='max-w-7xl mx-auto pb-10'>

    <div className={`fixed bottom-8 right-8 z-50 max-w-sm transition-all duration-500 ${alert ? 'opacity-100' : 'opacity-0'} `}>
      <div className={`bg-black flex items-center justify-center w-fit rounded-3xl`}>
        <div className="px-4 py-5 text-sm text-white rounded-3xl bg-red-800 ">
          ALERT
        </div>
        <div className={`${alert ? 'pl-3 pr-5' : 'opacity-100'} line-clamp-3 text-sm`}>
          {alert}
        </div>
      </div>
    </div>




    <h1 className='text-3xl font-extrabold pb-2'>Generate Images</h1>
    <p className='opacity-50'>Generate amazing fictional and visually stunning images right now and share them with our community</p>

    <form className='pt-6 max-w-4xl' onSubmit={handleSubmit}>
      <section className='flex flex-col gap-3 pb-8'>
        <Form
          label="Your Name"
          type="text"
          name="name"
          placeholder="Kareem Ezzat"
          value={form.name}
          handleChange={handleChange}
        />
        <Form
          label="Prompt"
          type="text"
          name="prompt"
          placeholder="an astronaut lounging in a tropical resort in space, vaporwave"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
        />

      </section>

      <div className='w-full flex flex-col items-center justify-center'>
        <div className='relative  border-2 text-sm rounded-3xl border-rose-900 focus:border-rose-600 duration-500 focus:shadow-rose-700 shadow-md focus:ring-0 outline-none p-3 w-64 flex justify-center items-center'>
          {
            form.photo
              ? <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain' />
              : <img src={preview} alt={preview} className='w-9/12 h-9/12 object-contain opacity-60' />
          }
          {
            generatingImage && <div className='absolute inset-0 bg-opacity-50 bg-black rounded-3xl flex justify-center items-center'>
              <Loading />
            </div>
          }

        </div>

        <button type='button' onClick={generateImage} className='w-full bg-rose-700 rounded-3xl py-2 px-4 right-1.5 mt-4'>
          {generatingImage ? 'Generating.....' : 'Generate'}
        </button>

        <div className='w-full'>
          <p className='opacity-50 pl-2 mt-8'>Now you can share your amazing generated image with other. Sumbit it now</p>
        </div>
        <button type='submit' onClick={generateImage} className='w-full bg-violet-900 rounded-3xl py-2 px-4 right-1.5 mt-2'>
          {loading ? 'Sharing.....' : 'Share Now'}
        </button>
      </div>

    </form>

  </main>
}
