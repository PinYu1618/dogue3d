import { ReactNode } from 'react'

type ContainerProps = {
  children?: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className='container mx-auto py-4 min-h-screen relative'>{children}</div>
}
