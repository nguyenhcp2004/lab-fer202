import MainLayout from '@/layouts/MainLayout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Login from '@/pages/Login'
import Manage from '@/pages/Manage/Manage'
import Natural from '@/pages/Natural'
import OrchidDetail from '@/pages/OrchidDetail'
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
    },
    {
      path: '/login',
      element: (
        <MainLayout>
          <Login />
        </MainLayout>
      )
    },
    {
      path: '/about',
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      )
    },
    {
      path: '/orchid/:id',
      element: (
        <MainLayout>
          <OrchidDetail />
        </MainLayout>
      )
    },
    {
      path: '/natural',
      element: (
        <MainLayout>
          <Natural />
        </MainLayout>
      )
    },
    {
      path: '/manage',
      element: (
        <MainLayout>
          <Manage />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
