import { Link } from 'react-router-dom'

const menuItems = [
  {
    title: 'Order',
    href: '/'
  },
  {
    title: 'Login',
    href: '/'
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
