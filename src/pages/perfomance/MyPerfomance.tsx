import { Button } from '@/components/ui/button'
import { GoArrowDownRight, GoArrowUpRight } from 'react-icons/go'

import React from 'react'
import { DepartmentCharts } from './Charts'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AvgPerfomanceChart } from './AvgPerfomanceChart'
import { ApprovalMatrixChart } from './ApprovalMatrixCharts'

interface IPerfomanceCustomCard {
  name: string
  count: number | string
  percentage: string | number
}

const CustomCard: React.FC<IPerfomanceCustomCard> = ({
  name,
  count,
  percentage,
}) => {
  const color = String(percentage).startsWith('-') ? 'red' : '#1EAD41'
  return (
    <div className="bg-white p-2 px-4 w-[15.2rem] h-[5rem] rounded-md">
      <div className="flex flex-col justify-between gap-6">
        <span className="font-[500] text-[14px]">{name}</span>
        <div className="flex justify-between">
          <span className="font-bold">{count}</span>
          <div className="flex gap-1 items-center">
            <span style={{ color: color }} className="text-[12px]">
              {percentage}
            </span>
            {String(percentage).startsWith('-') ? (
              <GoArrowDownRight
                color="white"
                style={{ backgroundColor: color }}
                size={12}
              />
            ) : (
              <GoArrowUpRight
                color="white"
                style={{ backgroundColor: color }}
                size={12}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const MyPerfomance = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[28px] font-bold">Peformance Dashboard</span>
          <span className="text-[14px]">
            Heres what s going on with your tasks
          </span>
        </div>
        <Button className="bg-[#cb7529] h-[33px]">Download</Button>
      </div>
      <div className="flex justify-between mt-4">
        <CustomCard name="Rejected Claims" count={245} percentage={'-9.98%'} />
        <CustomCard
          name="Approved Claims"
          count={'$826'}
          percentage={'+6.28%'}
        />
        <CustomCard
          name="Avg. wait Time"
          count={'1 d, 3 hr'}
          percentage={'-1.18%'}
        />
        <CustomCard name="Kpi's" count={'85.45%'} percentage={'+2.67%'} />
      </div>
      <div className="bg-white mt-4 rounded-md p-2">
        <span className="font-bold text-[14px]">Documents Per Department</span>
        <div className="flex gap-10">
          <DepartmentCharts />
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px] ">Department</TableHead>
                  <TableHead>New</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="flex items-center gap-2">
                    <span className="h-[10px] border w-[10px] bg-green-500"></span>
                    <span>Account</span>
                  </TableCell>
                  <TableCell>12,202</TableCell>
                  <TableCell>55.2k</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="flex items-center gap-2">
                    <span className="h-[10px] border w-[10px] bg-[#092332]"></span>
                    <span>Finance Manager</span>
                  </TableCell>
                  <TableCell>12,202</TableCell>
                  <TableCell>55.2k</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="flex items-center gap-2">
                    <span className="h-[10px] border w-[10px] bg-[#FC0000]"></span>
                    <span>Upper Management</span>
                  </TableCell>
                  <TableCell>12,202</TableCell>
                  <TableCell>55.2k</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="flex items-center gap-2">
                    <span className="h-[10px] border w-[10px] bg-gray-700"></span>
                    <span>Reinsurance</span>
                  </TableCell>
                  <TableCell>12,202</TableCell>
                  <TableCell>55.2k</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2 ">
        <AvgPerfomanceChart />
        <ApprovalMatrixChart />
      </div>
    </div>
  )
}

export default MyPerfomance
