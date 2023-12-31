'use client';
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'


import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Assignment-module-12-blog',
  description: 'Generated by Indrajit Das',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <Navigation />
          <main className="content">
            <ProgressBar
              height="4px"
              color="#fffd00"
              options={{ showSpinner: false }}
              shallowRouting
            />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
