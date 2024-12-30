import { Button } from '../ui/button'

export function Chats() {
  return (
    <section className='px-4 py-2'>
      <h3 className='font-bold text-lg'>Chats</h3>
      <div className='mt-4 space-y-2'>
        <p className='text-sm'>Delete all the messages and clear the chats from your history.</p>
        <Button
          variant='destructive'
          size={'sm'}
        >
          Delete chats
        </Button>
      </div>
    </section>
  )
}
