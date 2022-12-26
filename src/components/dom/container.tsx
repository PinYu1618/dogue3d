import { ReactNode } from 'react'

type ContainerProps = {
  children?: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className='container mx-auto md:px-5 pt-16 md:pt-32'>{children}</div>
}
