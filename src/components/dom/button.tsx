import Link from 'next/link'

type ButtonProps = {
  text: string
  href: string
}

export default function Button({ text, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className='h-11 w-fit flex justify-center items-center bg-sky-400 px-4 py-2 rounded-md shadow font-bold'
    >
      {text}
    </Link>
  )
}
