'use client'
import React from 'react'
import { useLayoutStore } from './useLayoutStore'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip'
import {
  Box,
  FileText,
  Focus,
  FolderClosed,
  Layers,
  Settings,
  Sparkles,
  SquareMousePointer,
  Unplug
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const buttonConfigTop = [
  { icon: <Sparkles size={14} />, name: 'Sparkles' },
  { icon: <FileText size={14} />, name: 'File' },
  { icon: <Layers size={14} />, name: 'Layers' },
  { icon: <FolderClosed size={14} />, name: 'Folder' },
  { icon: <Focus size={14} />, name: 'Focus' },
  { icon: <SquareMousePointer size={14} />, name: 'Pointer' }
]

const buttonConfigBottom = [
  { icon: <Unplug size={14} />, name: 'Unplug' },
  { icon: <Box size={14} />, name: 'Box' },
  { icon: <Settings size={14} />, name: 'Settings' },
//   {
//     icon: (
//       <Image src='https://github.com/shadcn.png' width={10} height={10} alt='@shadcn'  />
//     ),
//     name: 'shadcn'
//   }
]

const Sidebar = () => {
  const { isSidebarOpen } = useLayoutStore()
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ width: isSidebarOpen ? '140px' : '40px' }}
      animate={{ width: isSidebarOpen ? '140px' : '40px' }}
      transition={{ duration: 0.3 }}
      style={{ width: isSidebarOpen ? '140px' : '40px' }}
      className={` flex-col items-start justify-between bg-primary py-4 pl-2 hidden sm:flex`}
    >
      <div>
        <div className='mb-4'>
          {theme === 'light' ? (
            <Image
              alt='grok-white-logo'
              src='/images/grok-white.png'
              width={30}
              height={30}
            />
          ) : (
            <Image
              alt='grok-black-logo'
              src='/images/grok-logo-black.png'
              width={30}
              height={30}
            />
          )}
        </div>

        <div className='ml-1 flex flex-col'>
          {buttonConfigTop.map((button, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Button
                  size='icon'
                  variant='ghost'
                  className='justify-start text-muted-foreground transition-all duration-300 hover:bg-transparent hover:text-muted'
                >
                  {button.icon}
                  {isSidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isSidebarOpen ? 1 : 0 }}
                      transition={{ duration: 1.2 }}
                      className='ml-2 sm:block hidden'
                    >
                      {button.name}
                    </motion.span>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent side='left' className='rounded-xl' sideOffset={isSidebarOpen ? 95 : 6}>
                {button.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className='ml-1 flex flex-col'>
        {buttonConfigBottom.map((button, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <Button
                size='icon'
                variant='ghost'
                className='justify-start text-muted-foreground transition-all duration-300 hover:bg-transparent hover:text-muted '
              >
                {button.icon}
                {isSidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isSidebarOpen ? 1 : 0 }}
                    transition={{ duration: 1.2 }}
                    className='ml-2'
                  >
                    {button.name}
                  </motion.span>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side='left' className='rounded-xl' sideOffset={isSidebarOpen ? 95 : 6}>
              {button.name}
            </TooltipContent>
          </Tooltip>
        ))}
        {/* <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
      </div>
    </motion.div>
  )
}

export default Sidebar
