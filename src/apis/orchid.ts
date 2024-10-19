import http from '@/lib/http'
import { GetListOrchidsResType } from '@/schemaValidations/orchid.schema'

export const orchidApiRequest = {
  getOrchids: () => http.get<GetListOrchidsResType>('/orchids')
}
