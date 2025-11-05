import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ErrorProvider } from '@/context/ErrorContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DesignFlow Dashboard',
  description: 'Modern admin dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ErrorProvider>
        <body className={inter.className}>{children}</body>
      </ErrorProvider>

    </html>
  )
}