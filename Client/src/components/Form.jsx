import React from 'react'

export default function Form({
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe
}) {
  return <div>
    <label className='text-sm pl-2' htmlFor={name}>
      {label}
    </label>
    <div className='relative flex items-center'>
      <input
        className={`w-full mt-1 rounded-3xl bg-black border-2 border-rose-900 focus:border-rose-600 duration-500 focus:shadow-rose-700 shadow-md focus:ring-0 outline-none ${isSurpriseMe && 'pr-24'}`}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
      {
        isSurpriseMe && <button type='button' onClick={handleSurpriseMe} className='bg-rose-700 rounded-3xl py-2 px-3 text-xs absolute right-1.5 mt-1'>
          Surprise Me
        </button>
      }
    </div>
  </div>
}
