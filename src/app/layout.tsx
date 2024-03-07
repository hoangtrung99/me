import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import './globals.css'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'htdev',
  description:
    'Personal blog of Hoang Trung. Software engineer, web developer, and open-source contributor.'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
