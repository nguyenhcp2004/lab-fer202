import MainLayout from '@/layouts/MainLayout'
import Contact from '@/pages/Contact'
import OrchidList from '@/pages/OrchidList'
import { useRoutes } from 'react-router-dom'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <OrchidList />
        </MainLayout>
      )
    },
    {
      path: '/contact',
      element: (
        <MainLayout>
          <Contact />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
