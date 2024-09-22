import { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

function Button({children, className, ...rests}:ButtonProps) {
  return (
    <button className={className+ ' bg-slate-600 px-3 py-1 rounded-md '} {...rests}>{children}</button>
  )
}

export default Button