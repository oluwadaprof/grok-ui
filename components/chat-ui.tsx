import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useState } from 'react'

import { Input } from './ui/input'
import { Button } from './ui/button'
import {
  Box,
  CircleDashed,
  MessageCircleDashed,
  Paperclip,
  Sparkle,
  WandSparkles,
  Zap
} from 'lucide-react'
import { Textarea } from './ui/textarea'

const buttonData = [
  { icon: <Zap className='text-green-500' />, label: 'Fast' },
  {
    icon: <MessageCircleDashed className='text-yellow-700' />,
    label: 'In depth'
  },
  { icon: <WandSparkles className='text-blue-400' />, label: 'Magic AI' },
  { icon: <Box className='text-purple-700' />, label: 'Hollistic' }
]

const Chat = () => {
  const { theme } = useTheme()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [switchLogo, setSwitchLogo] = useState(false)

  return (
    <div className='flex flex-col items-center'>
      <div className='mt-40'>
        {theme === 'dark' ? (
          <Image
            alt='grok-white-logo'
            src='/images/grok-white.png'
            width={55}
            height={55}
          />
        ) : (
          <Image
            alt='grok-black-logo'
            src='/images/grok-logo-black.png'
            width={55}
            height={55}
          />
        )}
      </div>
      <h1 className='mb-1 text-3xl font-bold text-primary'>
        Hey! I'm SuperGrok
      </h1>
      <p className='mb-4 text-primary'>Tell me everything you need</p>

      <div className='relative h-[10rem] w-[40rem] rounded-3xl border-[1px] border-muted-foreground p-2 shadow-lg'>
        <Textarea
          className='h-28 resize-none border-[2px] border-none border-transparent text-muted-foreground shadow-none'
          placeholder='Ask me anything'
        />

        <div className='absolute bottom-4 ml-3 flex w-[94%] justify-between'>
          <div className='flex gap-2'>
            <Button
              size='icon'
              className='h-6 w-6 rounded-lg bg-muted-foreground transition-all duration-300'
            >
              <Paperclip />
            </Button>
            <Button
              size='icon'
              className='h-6 w-auto rounded-lg bg-muted-foreground px-2 transition-all duration-300'
            >
              <CircleDashed /> Deep Search
            </Button>
            <Button
              size='icon'
              className='h-6 w-auto rounded-lg bg-muted-foreground px-2 transition-all duration-300'
            >
              <Sparkle /> Think
            </Button>
          </div>
          <Button
            size='icon'
            onMouseEnter={() => setSwitchLogo(true)}
            onMouseLeave={() => setSwitchLogo(false)}
            className='h-6 w-auto rounded-lg border-[1px] border-transparent bg-muted-foreground px-2 transition-all duration-300 hover:border-[1px] hover:border-primary hover:bg-transparent hover:text-primary'
          >
            {switchLogo && theme !== 'dark' ? (
              <Image
                alt='grok-black-logo'
                src='/images/grok-logo-black.png'
                width={17}
                height={17}
              />
            ) : (
              <Image
                alt='grok-white-logo'
                src='/images/grok-white.png'
                width={17}
                height={17}
              />
            )}

            <span>Grok 3</span>
          </Button>
        </div>
      </div>

      <div className='mt-4 flex w-full justify-center gap-2'>
        {buttonData.map((button, index) => (
          <Button
            key={index}
            size='icon'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`h-6 w-auto rounded-lg border-muted bg-transparent px-2 text-muted-foreground ${hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm filter transition-all duration-300' : 'transition-all duration-300'} border-muted-foreground hover:border-primary-foreground hover:bg-transparent`}
          >
            {button.icon}
            <span>{button.label}</span>
          </Button>
        ))}
      </div>

      <div className='absolute bottom-6 justify-center'>
        <p className='text-xs text-muted-foreground'>
          SuperGrok can make mistakes. Check for important info
        </p>
      </div>
    </div>
  )
}

export default Chat
