import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import {
  EditOrchidBody,
  EditOrchidBodyType
} from '@/schemaValidations/orchid.schema'
import { useEditOrchidMutation, useGetOrhidQuery } from '@/queries/useOrchid'
import { useEffect } from 'react'
import { toast } from '@/hooks/use-toast'

export default function EditOrchid({
  name,
  setName
}: {
  name?: string | undefined
  setName: (value: string | undefined) => void
}) {
  const { data } = useGetOrhidQuery({
    name: name as string,
    enabled: Boolean(name)
  })
  const editOrchidMutation = useEditOrchidMutation()
  const form = useForm<EditOrchidBodyType>({
    resolver: zodResolver(EditOrchidBody),
    defaultValues: {
      Id: '',
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

  useEffect(() => {
    if (data) {
      const {
        name,
        image,
        price,
        description,
        category,
        color,
        origin,
        rating,
        isSpecial,
        Id
      } = data.data[0]
      form.reset({
        name,
        isSpecial,
        image,
        color,
        origin,
        category,
        rating,
        price,
        description,
        Id
      })
    }
  }, [data, form])
  const reset = () => {
    setName(undefined)
  }

  const onSubmit = async (body: EditOrchidBodyType) => {
    if (editOrchidMutation.isPending) return
    try {
      await editOrchidMutation.mutateAsync(body)
      toast({
        description: `Orchid updated successfully`
      })
      reset()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Dialog
      open={Boolean(name)}
      onOpenChange={(value) => {
        if (!value) {
          reset()
        }
      }}
    >
      <DialogContent className='sm:max-w-[600px] max-h-screen overflow-auto'>
        <DialogHeader>
          <DialogTitle>Update orchid</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            noValidate
            className='grid auto-rows-max items-start gap-4 md:gap-8'
            id='edit-orchid-form'
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
          <Button type='submit' form='edit-orchid-form'>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
