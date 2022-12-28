type LogoProps = {
  size: 'small' | 'large'
}

// large:
// sm:h-96 h-16
// small:
// h-24
export default function Logo({ size }: LogoProps) {
  return (
    <>
      <div className={'bg-cyan-600 text-center h-24 w-24 sm:h-96 sm:w-96'}>D</div>
    </>
  )
}
