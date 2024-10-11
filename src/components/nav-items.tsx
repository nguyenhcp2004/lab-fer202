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
    href: '/login'
  }
]

export default function NavItems({ className }: { className?: string }) {
  return menuItems.map((item) => {
    return (
      <Link to={item.href} key={item.title} className={className}>
        {item.title}
      </Link>
    )
  })
}
