"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tooltip } from "antd";

export const description = "A horizontal bar chart";

const chartData = [
  { month: "Accounting", desktop: 4 },
  { month: "Claims Team", desktop: 6 },
  { month: "Reinsurance", desktop: 8 },
  { month: "Finance", desktop: 10 },
  { month: "Upper Management", desktop: 4 },
  { month: "Upper Management", desktop: 4 },
  { month: "Upper Management", desktop: 4 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function AvgPerfomanceChart2() {
  return (
    <Card className="w-full">
      <div className="flex justify-between p-2 ml-[20px]">
        <span className="text-[14px] font-bold">Average Performance</span>
        <span className="text-[14px]">This Month</span>
      </div>
      <CardContent className="flex">
        <ChartContainer config={chartConfig} className="h-[230px] w-[80%]">
          <BarChart width={730} height={250} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
             <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Tooltip />
            <Bar dataKey="desktop" fill="#092332" barSize={10} />
          </BarChart>
          
        </ChartContainer>
        <div className="flex flex-col items-center w-[20%]">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col">
            <span className="font-bold">$ 3,575</span>
            <span className="text-gray-500">Avg. Claim</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">85.0 %</span>
            <span className="text-gray-500">Claim Paid</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">$ 24,500</span>
            <span className="text-gray-500">Total Payout</span>
        </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
