import Link from 'next/link'

const defaultThumbnail = '/dogue.jpg'

type CardProps = {
  title: string
  href: string
  description?: string
  thumbnail?: string
}

export default function Card({
  title,
  href,
  description,
  thumbnail = defaultThumbnail
}: CardProps) {
  return (
    <div className='w-64 h-72 bg-[#f3e9dd] rounded-lg shadow-md font-sans'>
      <Link href={href}>
        <div className='relative w-64 h-44'>
          <img src={thumbnail} alt='' className='w-full h-full object-cover rounded-t-lg' />
        </div>
        <div className='px-4 py-2'>
          <h3 className='font-medium pb-1 pt-2'>{title}</h3>
          <p className='text-sm text-slate-500'>{description}</p>
        </div>
      </Link>
    </div>
  )
}
