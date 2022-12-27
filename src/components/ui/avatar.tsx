import Image from 'next/image'

const defaultAlt = ''
const defaultPicture = '/dogue.png'

type AvatarProps = {
  name?: string
  picture?: string
}

export default function Avatar({ name = defaultAlt, picture = defaultPicture }: AvatarProps) {
  return (
    <div className='flex items-center'>
      <Image priority src={picture} className='rounded-full' height={108} width={108} alt={name} />
    </div>
  )
}
