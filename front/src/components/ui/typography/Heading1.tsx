import { HTMLAttributes, ReactNode } from 'react'

interface HeadProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode
}

function Heading1({children, ...rests}: HeadProps) {
  return (
    <h1 className='font-semibold text-3xl' {...rests}>{children}</h1>
  )
}

export default Heading1