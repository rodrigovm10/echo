import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function AvatarSidebar() {
  return (
    <Avatar className='size-5'>
      <AvatarImage
        src='https://avatars.githubusercontent.com/u/104101668?v=4'
        alt='user'
      />
      <AvatarFallback>RV</AvatarFallback>
    </Avatar>

    // <DropdownMenu>
    //   <DropdownMenuTrigger
    //     asChild
    //     className='cursor-pointer'
    //   >

    //   </DropdownMenuTrigger>justify-start
    //   <DropdownMenuContent>
    //     <DropdownMenuLabel>Settings</DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuGroup>
    //       <DropdownMenuSub>
    //         <DropdownMenuSubTrigger>
    //           <Pen />
    //           <span>Personalization</span>
    //         </DropdownMenuSubTrigger>
    //         <DropdownMenuPortal>
    //           <DropdownMenuSubContent>
    //             <DropdownMenuItem>
    //               <span>Color theme</span>
    //               <ThemeToggle />
    //             </DropdownMenuItem>
    //           </DropdownMenuSubContent>
    //         </DropdownMenuPortal>
    //       </DropdownMenuSub>
    //       <DropdownMenuSub>
    //         <DropdownMenuSubTrigger>
    //           <MessageCircleMore />
    //           <span>Chats</span>
    //         </DropdownMenuSubTrigger>
    //         <DropdownMenuPortal>
    //           <DropdownMenuSubContent>
    //             <Chats />
    //           </DropdownMenuSubContent>
    //         </DropdownMenuPortal>
    //       </DropdownMenuSub>
    //       <DropdownMenuSub>
    //         <DropdownMenuSubTrigger>
    //           <User />
    //           <span>Profile</span>
    //         </DropdownMenuSubTrigger>
    //         <DropdownMenuPortal>
    //           <DropdownMenuSubContent>
    //             <Profile />
    //           </DropdownMenuSubContent>
    //         </DropdownMenuPortal>
    //       </DropdownMenuSub>
    //       <DropdownMenuItem></DropdownMenuItem>
    //     </DropdownMenuGroup>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  )
}
