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

export const CreateOrchidBody = z.array(
  z.object({
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

export type CreateOrchidBodyType = z.TypeOf<typeof CreateOrchidBody>
