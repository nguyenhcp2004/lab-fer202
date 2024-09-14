import { Link } from 'react-router-dom'

const menuItems = [
  {
    title: 'Danh sách',
    href: '/'
  },
  {
    title: 'Đơn hàng',
    href: '/'
  },
  {
    title: 'Đăng nhập',
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
