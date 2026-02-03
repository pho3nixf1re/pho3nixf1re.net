import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.scss'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matthew Turney',
  description: 'Homepage for Matthew Turney',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={firaCode.className}>
      <body>{children}</body>
    </html>
  )
}
