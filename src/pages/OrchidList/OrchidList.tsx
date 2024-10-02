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
import { Star } from 'lucide-react'
import { useState } from 'react'

export default function OrchidList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orchids, setOrchids] = useState(listOrchids)
  return (
    <div className='w-full space-y-4'>
      <div className='relative'>
        <span className='absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10'></span>
        <img
          src='/banner.jpg'
          alt='Banner'
          className='absolute top-0 left-0 w-full h-full object-cover z-5'
        />
        <div className='z-20 relative py-10 md:py-20 px-4 sm:px-10 md:px-20'>
          <h1 className='text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold'>
            Orchid Haven
          </h1>
          <p className='text-center text-sm sm:text-base mt-4'>
            Bloom with Elegance, Blossom with Joy
          </p>
        </div>
      </div>
      <section className='space-y-10 py-16'>
        <h2 className='text-center text-2xl font-bold'>
          Various types of flowers
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
          {orchids.map((orchid) => (
            <div className='flex gap-4 w' key={orchid.Id}>
              <div className='flex-shrink-0'>
                <img
                  src={orchid.image}
                  className='object-cover w-[150px] h-[150px] rounded-md'
                />
              </div>
              <div className='space-y-1'>
                <h3 className='text-xl font-semibold'>{orchid.name}</h3>
                <p className=''>
                  <b>Category: </b>
                  {orchid.category}
                </p>
                <p>
                  <b>Origin: </b>
                  {orchid.origin}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant='outline'>Detail</Button>
                  </DialogTrigger>
                  <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                      <DialogTitle>{orchid.name}</DialogTitle>
                      <DialogDescription>Detail of orchid</DialogDescription>
                    </DialogHeader>
                    <div className='grid grid-cols-2 gap-2 py-4'>
                      <div className='grid grid-cols-1'>
                        <img
                          src={orchid.image}
                          className='object-cover w-[150px] h-[150px] rounded-md'
                        />
                      </div>
                      <div className='grid grid-cols-1'>
                        <div>
                          <p className='p-1'>
                            <b>Origin: </b>
                            {orchid.origin}
                          </p>
                          <p className='p-1'>
                            <b>Category: </b>
                            {orchid.category}
                          </p>
                          <p className='p-1'>
                            <b>Color: </b>
                            {orchid.color}
                          </p>
                          <p className='flex p-1'>
                            <b className='mr-2'>Rating: </b>
                            {orchid.rating}
                            <Star className='ml-1 bg-transparent fill-yellow-200 ' />
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
