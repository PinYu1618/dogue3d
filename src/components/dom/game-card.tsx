import Image from 'next/image'
import Link from 'next/link'

const defaultThumbnail = '/dogue.jpg'

type GameCardProps = {
  title: string
  href: string
  description?: string
  thumbnail?: string
}

export function GameCard({
  title,
  href,
  description,
  thumbnail = defaultThumbnail
}: GameCardProps) {
  return (
    <div className='w-64 h-72 bg-gray-600'>
      <div className='relative'>
        {/*<Image src={thumbnail} alt='' fill sizes='' style={{ objectFit: 'cover' }} />*/}
        card image
      </div>
      <Link href={href}>{title} thumbnail</Link>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
