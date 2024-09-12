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
    <Timeline className="mt-4 ml-3 ">
      {items.map((item, index) => (
        <Timeline.Item key={index} color="gray">
          <div
            className={`flex items-center justify-between ${
              item.active && 'bg-[#ECEEEF]'
            }  h-[54px] mt-2  px-2 rounded-md`}
          >
            <div className="flex flex-col">
              <span className="font-bold">{item.name}</span>
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
