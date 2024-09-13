import React from 'react'
import { Timeline } from 'antd'

interface IItem {
  name: string
  content: string
  date: string
  active?: boolean
}

interface TimelineComponentProps {
  items: IItem[] // Define the array of items
}

const TimelineComponent: React.FC<TimelineComponentProps> = ({ items }) => {
  return (
    <Timeline className="mt-4 ml-3 gap-2 flex flex-col ">
      {items.map((item, index) => (
        <Timeline.Item
          key={index}
          color="grey"
          className={`${!item.active ? 'divide-y' : ''}`}
        >
          <div
            className={`flex items-center justify-between   ${
              item.active && 'bg-[#ECEEEF]'
            }  h-[70px] mt-2  px-2 rounded-md`}
          >
            <div className="flex flex-col">
              <span className="font-[600]">{item.name}</span>
              <span className="text-[#A6A8A8] text-[13px]">{item.content}</span>
            </div>
            <span className="text-[12px]">{item.date}</span>
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}

export default TimelineComponent
