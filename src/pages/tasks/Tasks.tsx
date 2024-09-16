import { Button } from '@/components/ui/button'
import CircularProgress from '@mui/joy/CircularProgress'
import { FaCircleExclamation } from 'react-icons/fa6'
import Tabs from '@mui/joy/Tabs'
import TabList from '@mui/joy/TabList'
import Tab from '@mui/joy/Tab'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import TasksTable from './Table'

const TasksColumns = [
  'All Tasks',
  'Complete',
  'Approved',
  'Declined',
  'Finance',
  'Claim Manager',
]
const Products = [
  'Accident',
  'Motor-Comprehensive',
  'Fire Industrial',
  'Other Classes',
]
const Tasks = () => {
  return (
    <div>
      <div className="flex justify-between">
        <span className="font-bold text-[28px]">My Tasks</span>
        <Button className="bg-[#cb7529] h-[2rem]">My Reports</Button>
      </div>
      <div className="h-[5rem] bg-white w-full rounded-md flex gap-2 items-center p-2 justify-between">
        <div className="flex gap-2 items-center">
          <CircularProgress
            determinate
            value={65}
            thickness={3}
            size="lg"
            color="neutral"
            sx={{ '--CircularProgress-size': '70px' }}
          >
            <FaCircleExclamation size={20} />
          </CircularProgress>
          <div className="flex flex-col">
            <span className="font-bold">Information</span>
            <span className="text-[12px]">
              Your perfomance status for this month is complete by 65%
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[12px]">Total tasklist</span>
            <span className="font-bold">22</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px]">Deadline</span>
            <span className="font-bold">22 September 2025</span>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <Tabs defaultValue={0} sx={{ width: 400 }}>
          <TabList>
            {TasksColumns.map((task, index) => (
              <Tab
                style={{ fontSize: 14 }}
                key={index}
                sx={{
                  flex: 'none',
                  scrollSnapAlign: 'start',
                }}
              >
                {task}
              </Tab>
            ))}
          </TabList>
        </Tabs>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Product" />
          </SelectTrigger>
          <SelectContent>
            {Products.map((product, index) => (
              <SelectItem value={product} key={index}>
                {product}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <TasksTable />
      </div>
    </div>
  )
}

export default Tasks
