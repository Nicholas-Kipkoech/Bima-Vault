import { IoMdMenu } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import VaultLogo from './../assets/VaultLogo.png'

const MENUS = [
  {
    name: 'Dashboard',
    icon: <MdDashboard />,
    active: 'home',
  },
  {
    name: 'My Tasks',
    icon: <MdDashboard />,
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
    name: 'Allocations',
    icon: <MdDashboard />,
    active: 'allocations',
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
      <div className="border max-h-[3.6rem] bg-white flex items-center">
        <IoMdMenu />
        <img src={VaultLogo} height={80} width={100} />
      </div>
      <div className="flex items-center flex-col justify-center gap-1 mt-4">
        {MENUS.slice(0, 3).map((menu, idx) => (
          <div
            className={`flex items-center gap-1 w-full pl-4 h-10 cursor-pointer ${
              pathname === menu.active ? 'bg-slate-400 font-bold' : ''
            }  `}
            key={idx}
          >
            <div>{menu.icon}</div>
            <span>{menu.name}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center flex-col justify-center gap-1 mt-8">
        {MENUS.slice(3, 8).map((menu, idx) => (
          <div
            className={`flex items-center gap-1 w-full pl-4 h-10 cursor-pointer  ${
              pathname === menu.active ? 'bg-slate-400 font-bold' : ''
            }  `}
            key={idx}
          >
            <div>{menu.icon}</div>
            <span>{menu.name}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center flex-col justify-center gap-1 mt-8">
        {MENUS.slice(8).map((menu, idx) => (
          <div
            className={`flex items-center gap-1 w-full pl-4 h-10 cursor-pointer  ${
              pathname === menu.active ? 'bg-slate-400 font-bold' : ''
            }  `}
            key={idx}
          >
            <div>{menu.icon}</div>
            <span>{menu.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
