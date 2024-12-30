import { UserPlus } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function CreateGroup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost'>
          <UserPlus className='size-10' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a group chat</DialogTitle>
          <DialogDescription>Create a chat with more than 2 people.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
