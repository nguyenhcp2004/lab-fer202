import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
      {/* Contact Form */}
      <Card className='w-full'>
        <CardHeader>
          <CardTitle className='text-2xl'>Contact Us</CardTitle>
          <CardDescription>
            Fill out the form below to get in touch with us.
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' name='name' placeholder='Enter your name' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='Enter your email'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='subject'>Subject</Label>
              <Input
                id='subject'
                name='subject'
                placeholder='Enter the subject'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                id='message'
                name='message'
                placeholder='Enter your message'
                className='min-h-[100px]'
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type='submit' className='w-full'>
              <Send className='w-4 h-4 mr-2' />
              Send Message
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* Map and Info */}
      <div className='space-y-8'>
        <Card>
          <CardHeader>
            <CardTitle className='text-xl'>Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='w-full h-64 bg-muted rounded-md flex items-center justify-center'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125381.25129741947!2d106.71832140837017!3d10.875120221267586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3174d8a6b19d6763%3A0x143c54525028b2e!2zTMawdSBI4buvdSBQaMaw4bubYyBUw6JuIEzhuq1wLCBLaHUgcGjhu5EsIETEqSBBbiwgQsOsbmggRMawxqFuZw!3m2!1d10.8751312!2d106.8007233!5e0!3m2!1svi!2s!4v1727834055132!5m2!1svi!2s'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
            <div className='mt-4 space-y-2'>
              <p className='flex items-center'>
                <MapPin className='w-4 h-4 mr-2' /> Di An, Binh Duong
              </p>
              <p className='flex items-center'>
                <Phone className='w-4 h-4 mr-2' /> 0 123 456 789
              </p>
              <p className='flex items-center'>
                <Mail className='w-4 h-4 mr-2' /> orchid@company.com
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className='text-xl'>
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  What are your business hours?
                </AccordionTrigger>
                <AccordionContent>
                  Our business hours are Monday to Friday, 9 AM to 5 PM.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>
                  How long will the shipping process take?
                </AccordionTrigger>
                <AccordionContent>
                  Normally in Ho Chi Minh city areas it is 24 - 48 hours
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>
                  Do you offer international services?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we provide services internationally. Please contact us
                  for more details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
