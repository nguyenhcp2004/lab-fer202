import { listOrchids } from '@/shared/ListOfOrchids'

export default function OrchidList() {
  return (
    <div className='w-full space-y-4'>
      <div className='relative'>
        <span className='absolute top-0 left-0 w-full h-full bg-black opacity-10 z-10'></span>
        <img
          src='/banner.jpg'
          alt='Banner'
          className='absolute top-0 left-0 w-full h-full object-cover'
        />
        <div className='z-20 relative py-10 md:py-20 px-4 sm:px-10 md:px-20'>
          <h1 className='text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold'>
            Orchid Shop
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
          {listOrchids.map((orchid) => (
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
