import React, { useState } from 'react'
import SettingsNav from './SettingsNav'
import { SettingsMenu } from './SettingsMenu'
import { FaAngleRight } from 'react-icons/fa'
import { Separator } from '@/components/ui/separator'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { Button } from '@/components/ui/button'

const Settings: React.FC<{}> = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <div className="h-screen">
      <div className="bg-white h-[80px] top-0">
        <SettingsNav />
      </div>
      <div className="flex mt-[4rem] md:mx-[6rem] 2xl:mx-[20rem] gap-2 ">
        <div className=" 2xl:w-[15%] md:w-[20%]">
          <span className="font-bold text-[20px]">Account Settings</span>

          <div className="md:mt-5 2xl:mt-12 flex flex-col gap-2">
            {SettingsMenu.map((menu, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center justify-between gap-4 p-1 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                  <span className="font-medium text-gray-700">{menu.name}</span>
                  {menu.submenus.length > 0 && (
                    <FaAngleRight
                      className="text-gray-500 cursor-pointer"
                      size={20}
                      onClick={() => setActiveMenu(!activeMenu)}
                    />
                  )}
                </div>
                {activeMenu
                  ? menu.submenus.length > 0 && (
                      <div className="ml-6 mt-2 flex flex-col gap-1">
                        {menu.submenus.map((submenu, subIndex) => (
                          <span
                            key={subIndex}
                            className="text-gray-600 hover:text-gray-800 hover:bg-[#E5ECF5] h-[30px] flex px-2 rounded-md items-center transition-colors"
                          >
                            {submenu.name}
                          </span>
                        ))}
                      </div>
                    )
                  : ''}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[90%]">
          <div className="border  h-auto bg-white rounded-md p-5">
            <span className="font-[500]  2xl:text-[40px] md:text-[30px]">
              Overview
            </span>

            <Separator className="mt-10 mb-5" />
            <div className="flex items-center gap-2">
              <img
                src="https://avatars.githubusercontent.com/u/58167221?v=4"
                className="border md:h-[60px] md:w-[60px] 2xl:h-[100px] 2xl:w-[100px] rounded-[50%] p-1"
              />
              <div className="flex justify-between gap-2 w-full">
                <div>
                  <div className="flex gap-4">
                    <span className="font-bold">Nicholas Kipkoech</span>
                    <span className="h-[22px] rounded-md flex items-center px-2 bg-[#EDF4FE]">
                      Claims
                    </span>
                  </div>
                  <span>kipkoech@iconsoft.co</span>
                </div>
                <div className="flex flex-col">
                  <span className="flex justify-end font-bold">
                    Enterprise Account
                  </span>
                  <span className="text-slate-600">
                    Activated on Dec 09, 2025
                  </span>
                </div>
              </div>
            </div>
            <Separator className="mt-5 mb-5" />
            <div className="">
              <span className="font-bold">Company</span>
              <div className="flex flex-col gap-2 w-[400px]  mt-2">
                <div className="flex justify-between">
                  <span className="font-[500]">Contact phone</span>
                  <span className="text-slate-500">+254 722 765 467</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-[500]">Country</span>
                  <span className="text-slate-500">Kenya</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-[500]">Time Zone</span>
                  <span className="text-slate-500">
                    East Africa Time (GMT+3)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mt-[20px] p-5 rounded-md">
            <span className="font-[500]  2xl:text-[40px] md:text-[30px]">
              Sign in method
            </span>
            <Separator className="mt-10 mb-5" />

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span>Email Address</span>
                <span className="text-slate-600">Kipkoech@iconsoft.co</span>
              </div>
              <Button className="bg-transparent border-2 border-black text-black  hover:bg-transparent">
                Change email
              </Button>
            </div>
            <Separator className="mt-8 mb-5" />
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span>Password</span>
                <span className="text-slate-600">*************</span>
              </div>
              <Button className="bg-transparent border-2 border-black text-black  hover:bg-transparent">
                Change password
              </Button>
            </div>
            <Separator className="mt-8 mb-5" />
            <div className="bg-[#F6F6F6] mt-2 p-5 rounded-md">
              <div className="flex gap-2">
                <MdOutlineVerifiedUser size={30} />
                <span className="font-[500]">Secure Your Account</span>
              </div>
              <div className="ml-9 flex justify-between gap-4">
                <p className=" text-slate-500">
                  Two-factor authentication adds an extra layer of security to
                  your account.To log in, in addition you'll need to provide a 6
                  digit code. Learn more
                </p>
                <Button className="">Enable</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
