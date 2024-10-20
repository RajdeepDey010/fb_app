import { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

function Button({children, className, ...rests}:ButtonProps) {
  return (
    <button className={className+ ' bg-slate-600 rounded-md '} {...rests}>{children}</button>
  )
}

export default Button

/**
 * ButtonProps extends HTMLAttributes<HTMLButtonElement> , ekhane eta "HTMLAttributes<HTMLButtonElement>" kivabe pelam?
 */