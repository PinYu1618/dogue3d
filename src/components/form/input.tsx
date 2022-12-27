import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

type InputProps = {
  type?: HTMLInputTypeAttribute
  name?: string
  placeholder?: string
  required?: boolean
  value?: string | number | readonly string[] | undefined
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export function Input({ type, name, placeholder, required, value, onChange }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  )
}
