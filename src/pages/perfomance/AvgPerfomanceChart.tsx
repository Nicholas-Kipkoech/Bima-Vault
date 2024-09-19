"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A horizontal bar chart"

const chartData = [
  { month: "Accounting", desktop: 4 },
  { month: "Claims Team", desktop: 6 },
  { month: "Reinsurance", desktop: 8 },
  { month: "Finance", desktop: 10 },
  { month: "Upper Management", desktop: 4 },
  
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function AvgPerfomanceChart() {
  return (
    <Card className="w-full">
         <div className="flex justify-between p-2 ml-[20px]">
        <span className="text-[14px] font-bold">Average Performance</span>
        <span className="text-[14px]">This Month</span>
      </div>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 40,
            }}
          >
            <XAxis type="number" dataKey="desktop"  />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
             
            />
          

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Bar dataKey="desktop" fill="#092332" barSize={10} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
