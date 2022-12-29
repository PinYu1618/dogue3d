type ButtonProps = {
  text: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ text, type }: ButtonProps) {
  return (
    <button
      className='h-11 w-fit flex justify-center items-center bg-sky-400 px-4 py-2 rounded-md shadow font-bold'
      type={type}
    >
      {text}
    </button>
  )
}
