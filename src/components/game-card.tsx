import Image from 'next/image'
import Link from 'next/link'

type GameCardProps = {
  title: string
  href: string
  description?: string
  //thumbnail?: string
}

export function GameCard({ title, href, description }: GameCardProps) {
  return (
    <li>
      {/*<Image src={thumbnail} alt='' width={300} height={300} />*/}
      <Link href={href}>{title} thumbnail</Link>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}
