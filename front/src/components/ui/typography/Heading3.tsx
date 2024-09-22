import { HTMLAttributes, ReactNode } from 'react'

interface HeadProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode
}

function Heading3({children, ...rests}: HeadProps) {
  return (
    <h1 className='font-light text-xl' {...rests}>{children}</h1>
  )
}

export default Heading3