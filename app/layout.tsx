import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat ({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oscar Neira | Full Stack Developer',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
