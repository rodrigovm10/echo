import { SideBar } from '@/components/sidebar/sidebar'

export default function ChatLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SideBar />
      <main className='pl-20'>{children}</main>
    </>
  )
}
