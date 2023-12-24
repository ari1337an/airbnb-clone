import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb | Vacation rentals, cabins, beach houses, & more',
  description: 'Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with airbnb.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
