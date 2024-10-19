import { orchidApiRequest } from '@/apis/orchid'
import { useQuery } from '@tanstack/react-query'

export const useGetOrchids = () => {
  return useQuery({
    queryKey: ['orchids'],
    queryFn: orchidApiRequest.getOrchids
  })
}
