import Link from 'next/link'

type ButtonProps = {
  text: string
  href: string
}

export default function Button({ text, href }: ButtonProps) {
  return (
    <Link href={href} className='block bg-sky-400 px-4 py-2 rounded-md shadow font-bold'>
      {text}
    </Link>
  )
}
