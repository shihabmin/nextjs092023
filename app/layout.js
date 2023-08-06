import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-gray-100">
        <Navbar />
        <div className='m-2'>
        {children}
        </div>
      </body>
    </html>
  )
}
