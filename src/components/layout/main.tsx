import { ReactNode } from 'react'

type MainProps = {
  children?: ReactNode
}

/* TODO: css */
export default function Main({ children }: MainProps) {
  return <main className=''>{children}</main>
}
