import http from '@/lib/http'
import {
  CreateOrchidBodyType,
  CreateOrchidResType,
  EditOrchidBodyType,
  GetListOrchidsResType
} from '@/schemaValidations/orchid.schema'

export const orchidApiRequest = {
  getOrchids: () => http.get<GetListOrchidsResType>('/orchids'),
  createOrchid: (body: CreateOrchidBodyType) =>
    http.post<CreateOrchidResType>('/orchids', body),
  getOrchid: (name: string) =>
    http.get<GetListOrchidsResType>(`/orchids/?name=${name}`),
  editOrchid: (body: EditOrchidBodyType) =>
    http.put(`/orchids/${body.Id}`, body),
  deleteOrchid: (id: string) => http.delete(`/orchids/${id}`)
}
