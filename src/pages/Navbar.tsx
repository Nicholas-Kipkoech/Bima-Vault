import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
            <Avatar className="bg-slate-600 border ">
              <AvatarImage src="https://avatars.githubusercontent.com/u/58167221?v=4" />
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col ml-2">
            <span className="font-bold">Nicholas Kipkoech</span>
            <span className="text-[gray]">Claims Officer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
