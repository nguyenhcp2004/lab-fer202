import { z } from 'zod'

export const GetListOrchidsRes = z.array(
  z.object({
    Id: z.string(),
    name: z.string(),
    rating: z.number(),
    isSpecial: z.boolean(),
    image: z.string(),
    color: z.string(),
    origin: z.string(),
    category: z.string(),
    price: z.number(),
    description: z.string()
  })
)

export type GetListOrchidsResType = z.TypeOf<typeof GetListOrchidsRes>
export type OrchidsItem = GetListOrchidsResType[0]

export const CreateOrchidBody = z
  .object({
    name: z.string().min(1, { message: 'Name must be at least 1 character' }),
    rating: z.coerce
      .number()
      .min(0, { message: 'Rating from 0 to 5' })
      .max(5, { message: 'Rating from 0 to 5' }),
    isSpecial: z.boolean(),
    image: z.string().min(1),
    color: z.string().min(1),
    origin: z.string().min(1),
    category: z.string().min(1),
    price: z.coerce.number().nonnegative({ message: 'Price must be positive' }),
    description: z.string().min(1)
  })
  .strict()

export type CreateOrchidBodyType = z.TypeOf<typeof CreateOrchidBody>

export const CreateOrchidRes = z.object({
  Id: z.string(),
  name: z.string(),
  rating: z.number(),
  isSpecial: z.boolean(),
  image: z.string(),
  color: z.string(),
  origin: z.string(),
  category: z.string(),
  price: z.number(),
  description: z.string()
})

export type CreateOrchidResType = z.TypeOf<typeof CreateOrchidRes>

export const EditOrchidBody = z
  .object({
    Id: z.string(),
    name: z.string().min(1, { message: 'Name must be at least 1 character' }),
    rating: z.coerce
      .number()
      .min(0, { message: 'Rating from 0 to 5' })
      .max(5, { message: 'Rating from 0 to 5' }),
    isSpecial: z.boolean(),
    image: z.string().min(1),
    color: z.string().min(1),
    origin: z.string().min(1),
    category: z.string().min(1),
    price: z.coerce.number().nonnegative({ message: 'Price must be positive' }),
    description: z.string().min(1)
  })
  .strict()

export type EditOrchidBodyType = z.TypeOf<typeof EditOrchidBody>
