import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
      <p className='text-xs text-gray-500 dark:text-gray-400'>
        © 2024 Orchid Haven. All rights reserved.
      </p>
      <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
        <a className='text-xs hover:underline underline-offset-4' href='#'>
          Terms of Service
        </a>
        <a className='text-xs hover:underline underline-offset-4' href='#'>
          Privacy Policy
        </a>
        <div className='flex gap-4'>
          <a
            href='https://www.facebook.com/nguyenhcp2004/?locale=vi_VN'
            aria-label='Facebook'
          >
            <Facebook className='h-4 w-4 text-gray-500 hover:text-pink-600' />
          </a>
          <a
            href='https://www.instagram.com/hyunn_2707/?hl=vi'
            aria-label='Instagram'
          >
            <Instagram className='h-4 w-4 text-gray-500 hover:text-pink-600' />
          </a>
        </div>
      </nav>
    </footer>
  )
}
