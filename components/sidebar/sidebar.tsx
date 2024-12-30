'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '../ui/button'
import { AvatarSidebar } from './avatar-sidebar'
import { PAGES_HREF } from '@/constants/urls'
import { usePathname } from 'next/navigation'

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => setIsOpen(prev => !prev)

  return (
    <aside
      className={cn(
        'fixed flex flex-col justify-between h-full border-r-2 border-black bg-slate-700 py-2 px-2 transition-all rounded-r-md',
        isOpen ? 'w-44' : 'w-16'
      )}
    >
      <section className='flex flex-col gap-4 w-full'>
        <Button
          className='self-start'
          variant='ghost'
          onClick={toggleSidebar}
          aria-expanded={isOpen}
        >
          <Menu />
        </Button>

        {PAGES_HREF.map(({ id, href, icon, title }) => (
          <Link
            key={id}
            href={href}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'w-full flex items-center gap-4 justify-start',
              pathname === href ? 'bg-primary' : ''
            )}
          >
            {icon} {isOpen && <span>{title}</span>}
          </Link>
        ))}
      </section>

      <section className={cn(isOpen ? 'self-start' : 'self-center', 'flex items-center w-full')}>
        <Button
          variant='ghost'
          className='w-full flex gap-4 justify-start'
          size='sm'
        >
          <AvatarSidebar />
          {isOpen && <span>Profile</span>}
        </Button>
      </section>
    </aside>
  )
}
