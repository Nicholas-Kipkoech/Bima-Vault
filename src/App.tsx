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
      <div className="border bg-white w-full mt-2 p-5 rounded-md flex items-center justify-between">
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
      <div className="border rounded-md mt-4 py-4 px-2 bg-white">
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
    </div>
  )
}

export default App
