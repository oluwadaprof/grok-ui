'use client'

import React from 'react'
import { ThemeSwitcher } from './theme-switcher'
import { useLayoutStore } from './useLayoutStore'
import { Button } from './ui/button'
import {
  Edit,
  Edit2,
  Edit2Icon,
  PanelLeft,
  PanelRight,
  TimerIcon
} from 'lucide-react'

const Dashboard = () => {
  return (
    <div className='w-full p-2'>
      <div className='h-full rounded-[1.5rem] bg-primary-foreground'>
        <TopBar />
      </div>
    </div>
  )
}

export default Dashboard

const TopBar = () => {
  const { isSidebarOpen, toggleSidebar } = useLayoutStore()
  return (
    <div className='flex w-full justify-between p-2'>
      <div>
        <Button
          variant='ghost'
          onClick={toggleSidebar}
          className='text-primary hover:bg-transparent hover:text-primary'
        >
          {isSidebarOpen ? <PanelLeft size={14} /> : <PanelRight size={14} />}
        </Button>
        <Button
          variant='ghost'
          onClick={toggleSidebar}
          className='text-primary hover:bg-transparent hover:text-primary'
        >
          <TimerIcon size={14} />
        </Button>
        <Button
          variant='ghost'
          className='text-primary hover:bg-transparent hover:text-primary'
        >
          <Edit size={14} />
        </Button>
      </div>
      <ThemeSwitcher />
    </div>
  )
}
