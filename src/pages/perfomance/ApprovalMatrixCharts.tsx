"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "Finance", Approved: 186, Rejected: 80 },
  { month: "Reinsurance", Approved: 305, Rejected: 200 },
  { month: "Claims", Approved: 237, Rejected: 120 },
  { month: "Accounting", Approved: 73, Rejected: 190 },
  { month: "Upper Management", Approved: 209, Rejected: 130 },
];

const chartConfig = {
  Approved: {
    label: "Approved",
    color: "hsl(var(--chart-1))",
  },
  Rejected: {
    label: "Rejected",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ApprovalMatrixChart() {
  return (
    <Card className="w-full ">
      <div className="flex justify-between p-2 ml-[20px]">
        <span className="text-[14px] font-bold">Approval Matrix</span>
        <div className="flex gap-2">
          <div className="flex gap-2 items-center">
            <span className="h-[10px] w-[10px] bg-green-600 border"></span>
            <span className="text-[14px]">Approved</span>
          </div>
           <div className="flex gap-2 items-center">
            <span className="h-[10px] w-[10px] bg-red-600 border"></span>
            <span className="text-[14px]">Rejected</span>
          </div>
        </div>
      </div>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Rejected" fill="red" barSize={10} />
            <Bar dataKey="Approved" fill="green" barSize={10} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
