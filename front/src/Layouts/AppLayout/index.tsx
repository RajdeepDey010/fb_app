import { ReactNode } from 'react'
import TopNav from './components/TopNav'

function AppLayout({children}:{children: ReactNode}) {
  return (
    <div className='flex flex-col h-full'>
      <TopNav />
      <div className='max-w-[1920px] w-full mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default AppLayout