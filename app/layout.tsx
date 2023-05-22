import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Mehdi' blog",
  description: 'create by Mehdi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-slate-800 ${inter.className}`}>
        <Navbar />
        <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
