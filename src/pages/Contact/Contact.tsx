import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <Card className='w-[600px]'>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Your email</Label>
              <Input placeholder='name@flowbite.com' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Subject</Label>
              <Input placeholder='Let us know how we can help you' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Your message</Label>
              <Textarea placeholder='Leave a comment...' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}
