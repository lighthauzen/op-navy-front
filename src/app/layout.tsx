import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './_components/header/Header'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'One Piece Navy',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <Header />
        {children}
      </body>
    </html>
  )
}
