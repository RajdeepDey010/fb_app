import { HTMLAttributes, ReactNode } from 'react'

interface HeadProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode
}

function Heading2({children, ...rests}: HeadProps) {
  return (
    <h1 className='font-normal text-2xl' {...rests}>{children}</h1>
  )
}

export default Heading2