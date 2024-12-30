import { MessageCircle, Phone, Settings, Users } from 'lucide-react'

export const PAGES_HREF = [
  { id: 1, href: '/messages', icon: <MessageCircle size={20} />, title: 'Messages' },
  { id: 2, href: '/contacts', icon: <Users size={20} />, title: 'Contacts' },
  { id: 3, href: '/calls', icon: <Phone size={20} />, title: 'Calls' },
  { id: 4, href: '/settings', icon: <Settings size={20} />, title: 'Settings' },
]
