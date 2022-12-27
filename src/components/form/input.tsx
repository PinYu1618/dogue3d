import { HTMLInputTypeAttribute } from 'react'

type InputProps = {
  type?: HTMLInputTypeAttribute
  placeholder?: string
}

export function Input({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
      placeholder={placeholder}
    />
  )
}
