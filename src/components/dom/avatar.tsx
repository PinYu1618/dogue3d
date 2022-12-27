import Image from 'next/image'
import Link from 'next/link'

type AvatarProps = {}

export default function Avatar({}: AvatarProps) {
  return (
    <Link href='/'>
      <Image
        priority
        src='/images/dogue.jpg'
        className='rounded-full'
        height={108}
        width={108}
        alt=''
      />
    </Link>
  )
}
