import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { listOrchids } from '@/shared/ListOfOrchids'
import {
  DropletIcon,
  HeartIcon,
  ShoppingCartIcon,
  SunIcon,
  ThermometerIcon
} from 'lucide-react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function OrchidDetail() {
  const params = useParams()
  const orchid = listOrchids.filter((orchid) => orchid.Id === params.id)[0]

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div>
      <div className='grid md:grid-cols-2 gap-8 '>
        <div className='space-y-4'>
          <div className='relative w-[600px] h-[600px] overflow-hidden rounded-lg'>
            <img
              src={orchid.image}
              alt='Phalaenopsis Orchid'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='w-[600px] grid grid-cols-4 gap-4'>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className='relative aspect-square overflow-hidden rounded-md'
              >
                <img
                  src={orchid.image}
                  alt={`Phalaenopsis Orchid view ${i}`}
                  className='object-cover w-full h-full'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='space-y-6'>
          <div>
            <h1 className='text-3xl font-bold'>{orchid.name}</h1>
            <p className='text-xl font-semibold mt-2'>${orchid.price}</p>
          </div>
          <p className='text-gray-400'>{orchid.description}</p>
          <div className='flex items-center space-x-4'>
            <Label htmlFor='quantity' className='font-medium'>
              Quantity:
            </Label>
            <Input id='quantity' type='number' min='1' className='w-20' />
          </div>
          <div className='flex space-x-4'>
            <Button className='flex-1'>
              <ShoppingCartIcon className='w-4 h-4 mr-2' />
              Add to Cart
            </Button>
            <Button variant='outline' className='flex-1'>
              <HeartIcon className='w-4 h-4 mr-2' />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue='details' className='mt-12'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='details'>Details</TabsTrigger>
          <TabsTrigger value='care'>Care Instructions</TabsTrigger>
        </TabsList>
        <TabsContent value='details'>
          <Card>
            <CardHeader>
              <CardTitle>Orchid Details</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p>
                <strong>Scientific Name:</strong> {orchid.name}
              </p>
              <p>
                <strong>Color:</strong> {orchid.color}
              </p>
              <p>
                <strong>Origin:</strong> {orchid.origin}
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='care'>
          <Card>
            <CardHeader>
              <CardTitle>Care Instructions</CardTitle>
              <CardDescription>
                Follow these guidelines to keep your orchid healthy and blooming
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <SunIcon className='w-8 h-8 text-yellow-500' />
                <div>
                  <p className='font-semibold'>Light</p>
                  <p>Bright, indirect light. Avoid direct sunlight.</p>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <DropletIcon className='w-8 h-8 text-blue-500' />
                <div>
                  <p className='font-semibold'>Water</p>
                  <p>Water thoroughly once the potting medium is nearly dry.</p>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <ThermometerIcon className='w-8 h-8 text-red-500' />
                <div>
                  <p className='font-semibold'>Temperature</p>
                  <p>Ideal range: 65°F to 80°F (18°C to 27°C)</p>
                </div>
              </div>
              <div>
                <Label htmlFor='humidity' className='font-semibold'>
                  Humidity
                </Label>
                <p className='mb-2'>Maintain humidity between 50-70%</p>
                <Slider id='humidity' defaultValue={[60]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
