import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { PopoverContent } from '@radix-ui/react-popover'
import { FaBell } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className="h-auto border bg-white">
      <div className="flex items-center justify-between ml-1 p-1">
        <div className="flex  items-center h-[2rem] w-[40rem] rounded-md">
          <IoIosSearch size={20} color="#444745" />
          <input className="outline-none w-full ml-2" placeholder="Search..." />
        </div>
        <div className="flex items-center">
          <FaBell className="mx-5 " color="#444745" />
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="bg-slate-600 border">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/58167221?v=4" />
                  <AvatarFallback>NK</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col   bg-white rounded-md  p-3 text-[14px] w-[12rem]">
                  <div className="h-8 hover:bg-[#EDF4FE] flex items-center rounded-md pl-2">
                    <span>Settings</span>
                  </div>
                  <div className="h-8 hover:bg-[#EDF4FE] flex items-center rounded-md pl-2">
                    <span>Support</span>
                  </div>
                  <div className="h-8 hover:bg-[#EDF4FE] flex items-center rounded-md pl-2">
                    <span>Connected Account</span>
                  </div>
                  <div className="h-8 hover:bg-[#EDF4FE] flex items-center rounded-md pl-2">
                    <span>Sign Out</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col ml-2">
            <span className="font-bold text-[14px]">Nicholas Kipkoech</span>
            <span className="text-[gray] text-[12px]">Claims Officer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
