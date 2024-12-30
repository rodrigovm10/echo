import { CreateGroup } from './create-group'

export function Header() {
  return (
    <header className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white py-2'>
      <section className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <h1 className='text-2xl font-bold'>Messages</h1>
        <CreateGroup />
      </section>
    </header>
  )
}
