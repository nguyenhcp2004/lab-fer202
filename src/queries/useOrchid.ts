import { orchidApiRequest } from '@/apis/orchid'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useGetOrchids = () => {
  return useQuery({
    queryKey: ['orchids'],
    queryFn: orchidApiRequest.getOrchids
  })
}

export const useCreateOrchidMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: orchidApiRequest.createOrchid,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orchids'] })
    }
  })
}

export const useGetOrhidQuery = ({
  name,
  enabled
}: {
  name: string
  enabled: boolean
}) => {
  return useQuery({
    queryKey: ['orchid', name],
    queryFn: () => orchidApiRequest.getOrchid(name),
    enabled
  })
}

export const useEditOrchidMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: orchidApiRequest.editOrchid,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orchids'] })
    }
  })
}

export const useDeleteOrchidMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: orchidApiRequest.deleteOrchid,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orchids'] })
    }
  })
}
