import { z } from 'zod'

const configSchema = z.object({
  VITE_API_ENDPOINT: z.string()
})

const configProject = configSchema.safeParse({
  VITE_API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT
})

if (!configProject.success) {
  console.error(configProject.error.errors)
  throw new Error(`Các khai báo biến môi trường không hợp lệ`)
}

const envConfig = configProject.data

export default envConfig
