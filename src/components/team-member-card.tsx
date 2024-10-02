import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function TeamMemberCard({
  name,
  role,
  bio,
  imageUrl
}: {
  name: string
  role: string
  bio: string
  imageUrl: string
}) {
  return (
    <Card className='overflow-hidden'>
      <CardHeader className='p-0'>
        <div className='h-52 overflow-hidden'>
          <img
            src={imageUrl}
            alt={name}
            className='w-full h-full object-cover'
          />
        </div>
      </CardHeader>
      <CardContent className='p-6'>
        <CardTitle className='text-xl font-semibold'>{name}</CardTitle>
        <CardDescription className='text-gray-400 font-medium'>
          {role}
        </CardDescription>
        <p className='mt-2 text-gray-400'>{bio}</p>
      </CardContent>
    </Card>
  )
}
