'use client'

import React from 'react'
import { ThemeSwitcher } from './theme-switcher'
import { useLayoutStore } from './useLayoutStore'
import { Button } from './ui/button'
import { Edit, PanelLeft, PanelRight, TimerIcon } from 'lucide-react'
import Chat from './chat-ui'

const Dashboard = () => {
  return (
    <div className='w-full p-2'>
      <div className='flex h-full flex-col items-center rounded-[1.5rem] bg-primary-foreground'>
        <TopBar />

        <Chat />
      </div>
    </div>
  )
}

export default Dashboard

const TopBar = () => {
  const { isSidebarOpen, toggleSidebar } = useLayoutStore()
  return (
    <div className='flex w-full justify-between p-2'>
      <div className='-ml-2 flex gap-0'>
        <Button
          variant='ghost'
          size='icon'
          onClick={toggleSidebar}
          className='text-muted-foreground hover:bg-transparent hover:text-primary'
        >
          {isSidebarOpen ? <PanelLeft size={14} /> : <PanelRight size={14} />}
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='text-muted-foreground hover:bg-transparent hover:text-primary'
        >
          <TimerIcon size={14} />
        </Button>
        {/* <Button
          variant='ghost'
          size='icon'
          className='text-muted-foreground hover:bg-transparent hover:text-primary'
        >
          <Edit size={14} />
        </Button> */}
      </div>
      <ThemeSwitcher />
    </div>
  )
}
