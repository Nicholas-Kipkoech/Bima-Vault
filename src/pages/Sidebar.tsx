import { IoMdMenu } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import VaultLogo from './../assets/VaultLogo.png'
import { Switch } from '@/components/ui/switch'
import { FcParallelTasks } from 'react-icons/fc'

const MENUS = [
  {
    name: 'Dashboard',
    icon: <MdDashboard />,
    active: 'home',
  },
  {
    name: 'My Tasks',
    icon: <FcParallelTasks color="#0000" />,
    active: 'tasks',
  },
  {
    name: 'Document Viewer',
    icon: <MdDashboard />,
    active: 'document-viewer',
  },
  {
    name: 'Calendar',
    icon: <MdDashboard />,
    active: 'calendar',
  },
  {
    name: 'Perfomance',
    icon: <MdDashboard />,
    active: 'perfomance',
  },
  {
    name: 'My Reports',
    icon: <MdDashboard />,
    active: 'reports',
  },
  {
    name: 'My Company',
    icon: <MdDashboard />,
    active: 'company',
  },
  {
    name: 'Settings',
    icon: <MdDashboard />,
    active: 'settings',
  },
]

const Sidebar = () => {
  const pathname = useLocation().pathname.replace('/', '')

  return (
    <div className="bg-white h-screen">
      <div className="flex flex-col justify-between pb-10 h-full">
        <div>
          <div className="border max-h-[3rem] pl-4 bg-white flex items-center">
            <IoMdMenu size={20} />
            <img src={VaultLogo} height={80} width={100} />
          </div>
          <div className="flex items-center flex-col justify-center gap-1  mt-4">
            {MENUS.map((menu, idx) => (
              <div
                className={`flex items-center gap-1 w-full pl-4 h-8 cursor-pointer ${
                  pathname === menu.active ? 'bg-[#EDF5FF] font-bold' : ''
                }  `}
                key={idx}
              >
                <div>{menu.icon}</div>
                <span className="text-[14px]">{menu.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 pl-4">
          <span className="text-[14px]">Light mode</span>
          <Switch />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
