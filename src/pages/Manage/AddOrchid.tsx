import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from 'lucide-react'

import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {
  CreateOrchidBody,
  CreateOrchidBodyType
} from '@/schemaValidations/orchid.schema'
import { useCreateOrchidMutation } from '@/queries/useOrchid'
import { toast } from '@/hooks/use-toast'

export default function AddOrchid() {
  const [open, setOpen] = useState(false)
  const createOrchidMutation = useCreateOrchidMutation()
  const form = useForm<CreateOrchidBodyType>({
    resolver: zodResolver(CreateOrchidBody),
    defaultValues: {
      name: '',
      isSpecial: false,
      image: '',
      color: '',
      origin: '',
      category: '',
      rating: 0,
      price: 0,
      description: ''
    }
  })
  const reset = () => {
    form.reset()
  }

  const onSubmit = async (body: CreateOrchidBodyType) => {
    if (createOrchidMutation.isPending) return
    try {
      const result = await createOrchidMutation.mutateAsync(body)
      toast({
        description: `Orchid ${result.data.name} added successfully`
      })
      reset()
      setOpen(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Dialog
      onOpenChange={(value) => {
        if (!value) {
          reset()
        }
        setOpen(value)
      }}
      open={open}
    >
      <DialogTrigger asChild>
        <Button size='sm' className='h-7 gap-1'>
          <PlusCircle className='h-3.5 w-3.5' />
          <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
            Add orchid
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px] max-h-screen overflow-auto'>
        <DialogHeader>
          <DialogTitle>Add orchid</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            noValidate
            className='grid auto-rows-max items-start gap-4 md:gap-8'
            id='add-orchid-form'
            onSubmit={form.handleSubmit(onSubmit)}
            onReset={reset}
          >
            <div className='grid gap-4 py-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
                      <Label htmlFor='name'>Orchid name:</Label>
                      <div className='col-span-3 w-full space-y-2'>
                        <Input id='name' className='w-full' {...field} />
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='color'
                render={({ field }) => (
                  <FormItem>
                    <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
                      <Label htmlFor='color'>Color:</Label>
                      <div className='col-span-3 w-full space-y-2'>
                        <Input id='color' className='w-full' {...field} />
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <FormItem>
                    <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
                      <Label htmlFor='image'>Image:</Label>
                      <div className='col-span-3 w-full space-y-2'>
                        <Input id='image' className='w-full' {...field} />
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='origin'
                render={({ field }) => (
                  <FormItem>
                    <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
                      <Label htmlFor='origin'>Orgin:</Label>
                      <div className='col-span-3 w-full space-y-2'>
                        <Input id='origin' className='w-full' {...field} />
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='category'
                render={({ field }) => (
                  <FormItem>
                    <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
                      <Label htmlFor='category'>Category:</Label>
                      <div className='col-span-3 w-full space-y-2'>
                        <Input id='category' className='w-full' {...field} />
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='rating'
                render={({ field }) => (
                  <FormItem>
                    <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
                      <Label htmlFor='rating'>Rating:</Label>
                      <div className='col-span-3 w-full space-y-2'>
                        <Input
                          type='number'
                          min={1}
                          max={5}
                          id='rating'
                          className='w-full'
                          {...field}
                        />
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
                      <Label htmlFor='description'>Description:</Label>
                      <div className='col-span-3 w-full space-y-2'>
                        <Input id='description' className='w-full' {...field} />
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='price'
                render={({ field }) => (
                  <FormItem>
                    <div className='grid grid-cols-4 items-center justify-items-start gap-4'>
                      <Label htmlFor='price'>Price:</Label>
                      <div className='col-span-3 w-full space-y-2'>
                        <Input
                          type='number'
                          id='price'
                          className='w-full'
                          {...field}
                        />
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <DialogFooter>
          <Button type='submit' form='add-orchid-form'>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
