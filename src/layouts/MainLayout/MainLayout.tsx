import Header from '@/components/Header'

interface Props {
  children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <div className='flex min-h-screen w-full flex-col relative'>
      <Header />
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
        {children}
      </main>
    </div>
  )
}
