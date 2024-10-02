import TeamMemberCard from '@/components/team-member-card'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <div>
      <div className='flex flex-col items-center space-y-4 text-center'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none '>
            About Orchid Haven
          </h1>
          <p className='mx-auto max-w-[700px] text-gray-400 md:text-xl'>
            Welcome to Orchid Haven, your premier destination for exquisite
            orchids. We're passionate about bringing the beauty and elegance of
            these stunning flowers into your home and life.
          </p>
        </div>
      </div>
      <section className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container px-4 md:px-6'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12'>
            Our Story
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <p className='text-gray-400 mb-4'>
                Orchid Haven was born from a lifelong passion for these
                extraordinary flowers. Our journey began over two decades ago
                when our founder, Emily Chen, received her first orchid as a
                gift. That single plant sparked a love affair with orchids that
                has only grown stronger over time.
              </p>
              <p className='text-gray-400 mb-4'>
                What started as a hobby soon blossomed into a thriving business.
                Today, we're proud to offer a wide variety of orchid species,
                from popular Phalaenopsis to rare and exotic varieties. Our
                mission is to share the joy and wonder of orchids with
                enthusiasts and beginners alike.
              </p>
              <p className='text-gray-400'>
                At Orchid Haven, we believe that everyone should have the
                opportunity to experience the magic of growing and caring for
                these beautiful plants. That's why we not only sell top-quality
                orchids but also provide expert advice and support to ensure
                your orchids thrive.
              </p>
            </div>
            <div className='relative h-[400px] rounded-lg overflow-hidden'>
              <img
                src='https://caygiong.info/wp-content/uploads/2019/12/100-loai-hoa-lan-rung-768x512.jpg?v=1577264744'
                alt='colorful orchids'
                className='absolute inset-0 object-cover w-full h-full'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32 '>
        <div className='container px-4 md:px-6'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 '>
            Our Team
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <TeamMemberCard
              name='Nguyen Huynh'
              role='Founder & Lead Orchid Specialist'
              bio="With over 20 years of experience in orchid cultivation, Nguyen's expertise and passion drive Orchid Haven's mission."
              imageUrl='https://i.pinimg.com/736x/e6/8b/8e/e68b8ee27259d02f16fcd0f3fbf513a3.jpg'
            />
            <TeamMemberCard
              name='Huy Nguyen'
              role='Head of Horticulture'
              bio='Huy ensures that every orchid we sell is of the highest quality, overseeing our growing facilities with meticulous care.'
              imageUrl='https://i.pinimg.com/736x/f5/8b/b5/f58bb570a30b2347f70605750d71a2da.jpg'
            />
            <TeamMemberCard
              name='Thong Le'
              role='Customer Care Manager'
              bio='Thong leads our customer support team, ensuring that every Orchid Haven customer receives expert advice and assistance.'
              imageUrl='https://i.pinimg.com/736x/88/1f/ef/881fef2f46bb7ddb331d55d7f71e6bf4.jpg'
            />
            <TeamMemberCard
              name='Hoang Nguyen'
              role='Customer Care Manager'
              bio='Hoang leads our customer support team, ensuring that every Orchid Haven customer receives expert advice and assistance.'
              imageUrl='https://i.pinimg.com/736x/d0/76/0c/d0760c38c8816ad8f152c9c8849f8299.jpg'
            />
          </div>
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container px-4 md:px-6 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 '>
            Our Commitment
          </h2>
          <p className='mx-auto max-w-[700px] text-gray-400 md:text-xl mb-12'>
            At Orchid Haven, we're committed to sustainability, ethical
            sourcing, and promoting biodiversity. We work closely with reputable
            growers and participate in orchid conservation efforts to ensure
            these beautiful species continue to thrive for generations to come.
          </p>
          <Button>Explore Our Collection</Button>
        </div>
      </section>
    </div>
  )
}
