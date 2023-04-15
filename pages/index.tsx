import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href="./login" className='text-black'>login</a>
      <a href="./signup" className='text-white'>signup</a>
    </main>
  )
}
