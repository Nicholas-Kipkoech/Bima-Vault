import { FaFileInvoiceDollar, FaRegCalendarCheck } from 'react-icons/fa'
import './App.css'

import { Button } from './components/ui/button'
import TimelineComponent from './components/ui/Timeline'

function App() {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-[30px] font-bold">Good Morning, Nicholas </span>
          <span className="text-[#969696] text-[14px]">
            Here's what's going on with your Claims Department{' '}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[20px] font-bold">Friday</span>
          <span className="text-[#969696] text-[14px]">15 Aug 2024</span>
        </div>
      </div>
      <div className="border-[#919CA2] border-2 bg-white w-full mt-2 p-5 rounded-md flex items-center justify-between">
        <div className="flex gap-2">
          <div className="border bg-[#EDF5FF] w-[50px] h-[50px] flex items-center justify-center rounded-[50px]">
            <img src="" height={20} width={20} />
          </div>
          <div className="flex flex-col">
            <span>My Documents</span>
            <span className="text-[#969696]">Let's Edit...</span>
          </div>
        </div>
        <Button className="bg-[#cb7529] h-[30px]">Get Started</Button>
      </div>
      <div className="flex w-full gap-2 mt-4">
        <div className="border rounded-md py-4 px-2 bg-white w-[70%]">
          <span className="font-bold ml-3">Things to do</span>
          <TimelineComponent
            items={[
              {
                name: 'New Claim Documents',
                content: 'You have 4 new claims to review and approve',
                date: `Today`,
                active: true,
              },
              {
                name: 'Send Reminder',
                content:
                  'Oops, you missed the original deadline for the 24/02/2021 - 24/03/2021 claim no cm99102 period. Thats okay, you can review it now',
                date: ` ${new Date(Date.now()).toDateString()}`,
              },
              {
                name: 'New claims',
                content: 'hello',
                date: ` ${new Date(Date.now()).toDateString()}`,
              },
            ]}
          />
        </div>
        <div className="border w-[30%]  p-4 bg-white rounded-md">
          <span className=" ml-3 font-bold">Suggested</span>
          <div className="border-2 border-[#8F9BA2] p-2 rounded-md">
            <div className="flex items-center justify-between px-2">
              <div className="border bg-[#ECEEEF] w-[50px] h-[50px] flex items-center justify-center rounded-[50px]">
                <FaFileInvoiceDollar size={25} />
              </div>
              <span>X</span>
            </div>
            <div className="px-2 mt-2">
              <span className="font-bold">Reminder</span>
              <p className="text-gray-500 text-[14px]">
                2-step verification is the best way to keep your company's
                account safe
              </p>
              <span className="mt-2 text-[14px]">
                Enable 2 step verification &gt;{' '}
              </span>
            </div>
          </div>

          <div className="mt-2">
            <span className="font-bold">Upcoming</span>
            <div className="divide-y flex flex-col gap-4 mt-2">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-[14px]">Today</span>
                <p className="text-[12px]">Complete tasklist by 4:00pm EAT</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-[14px]">
                  Monday, 22 Mar 2021
                </span>
                <p className="text-[12px]">Complete tasklist by 4:00pm EAT</p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              {' '}
              <FaRegCalendarCheck color="gray" />
              <span className="font-[500]">Add reminder to your calendar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
