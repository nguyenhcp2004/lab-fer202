import { useAppContext } from '@/contexts/AppProvider'
import { Link } from 'react-router-dom'

const menuItems = [
  {
    title: 'Contact',
    href: '/contact'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Natural',
    href: '/natural'
  },
  {
    title: 'Login',
    href: '/login',
    hideWhenLogin: true
  }
]

export default function NavItems({ className }: { className?: string }) {
  const { profile } = useAppContext()
  return menuItems.map((item) => {
    if (item.hideWhenLogin && profile) {
      return null
    }
    return (
      <Link to={item.href} key={item.title} className={className}>
        {item.title}
      </Link>
    )
  })
}
