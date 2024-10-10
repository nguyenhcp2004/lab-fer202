import { listOrchids } from '@/shared/ListOfOrchids'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Search, Star } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function OrchidList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orchids, setOrchids] = useState(listOrchids)
  return (
    <motion.div
      className='w-full space-y-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='relative h-64 md:h-96 overflow-hidden'>
        <motion.img
          src='/banner.jpg'
          alt='Banner'
          className='absolute top-0 left-0 w-full h-full object-cover'
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5 }}
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10'></div>
        <div className='z-20 relative flex flex-col items-center justify-center h-full px-4 sm:px-10 md:px-20'>
          <motion.h1
            className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Orchid Haven
          </motion.h1>
          <motion.p
            className='text-center text-lg sm:text-xl text-white'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Bloom with Elegance, Blossom with Joy
          </motion.p>
        </div>
      </div>
      <section className='space-y-10 py-16 px-4 sm:px-6 lg:px-8'>
        <h2 className='text-center text-3xl font-bold'>Explore Our Orchids</h2>

        <div className='relative max-w-md mx-auto'>
          <input
            type='text'
            placeholder='Search orchids...'
            className='w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary'
          />
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        </div>

        <AnimatePresence>
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
            layout
          >
            {orchids.map((orchid, index) => (
              <motion.div
                key={orchid.Id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      className='flex flex-col bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <img
                        src={orchid.image}
                        alt={orchid.name}
                        className='w-full h-48 object-cover'
                      />
                      <div className='p-4 flex-grow'>
                        <h3 className='text-xl text-black font-semibold mb-2'>
                          {orchid.name}
                        </h3>
                        <p className='text-sm text-gray-600 mb-2'>
                          <b>Category: </b>
                          {orchid.category}
                        </p>
                        <p className='text-sm text-gray-600 mb-2'>
                          <b>Origin: </b>
                          {orchid.origin}
                        </p>
                        <div className='flex justify-between items-center mt-4'>
                          <span className='font-bold text-black text-lg'>
                            ${orchid.price.toFixed(2)}
                          </span>
                          <div className='flex items-center'>
                            <Star className='w-5 h-5 text-yellow-400 fill-current' />
                            <span className='ml-1 text-sm text-black font-semibold'>
                              {orchid.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                      <DialogTitle>{orchid.name}</DialogTitle>
                      <DialogDescription>Detail of orchid</DialogDescription>
                    </DialogHeader>
                    <div className='grid gap-4 py-4'>
                      <img
                        src={orchid.image}
                        alt={orchid.name}
                        className='w-full h-64 object-cover rounded-lg'
                      />
                      <p>{orchid.description}</p>
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <p>
                            <b>Origin: </b>
                            {orchid.origin}
                          </p>
                          <p>
                            <b>Category: </b>
                            {orchid.category}
                          </p>
                        </div>
                        <div>
                          <p>
                            <b>Color: </b>
                            {orchid.color}
                          </p>
                          <p className='flex items-center'>
                            <b className='mr-2'>Rating: </b>
                            {orchid.rating}
                            <Star className='ml-1 w-5 h-5 text-yellow-400 fill-current' />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <Link to={`/orchid/${orchid.Id}`}>
                        <Button className='w-full'>View Details</Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </motion.div>
  )
}
