'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { themeColors } from './theme-switcher'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { theme } = useTheme()

  return (
    <NextThemesProvider {...props}>
      <motion.div
        className='theme-transition'
        style={{
          backgroundColor: themeColors[theme as keyof typeof themeColors]
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </NextThemesProvider>
  )
}
