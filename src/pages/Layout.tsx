import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex">
        <div className="w-[14%] h-screen border fixed sm:hidden md:block">
          <Sidebar />
        </div>
        <div className="md:w-[86%] sm:w-full  flex flex-col md:ml-[14%] sm:ml-0">
          <Navbar />
          <div className="px-2">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Layout
