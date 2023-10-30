
import { Providers } from '@/lib/providers'

/* Instruments */
import type { Metadata } from "next"

import './globals.css'

import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "BirdoApp",
  description: "Bird sightings",
  icons: {
    icon: "/favicom-114x.png",
  },
  openGraph: {
    images: ['/main-logo-trans-original.webp']
  }
}

const inter = Inter({ subsets: ["latin"] })
const bodyBasicStyle: string = `${inter.className} bg-white`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
      <body className={bodyBasicStyle}>
        {/*  */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
    </Providers>
  )
}
