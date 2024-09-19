"use client"

import { Label, Pie, PieChart } from "recharts"

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

export const description = "A donut chart with text"

const chartData = [
  { browser: "Accounting", visitors: 275, fill: "green" },
  { browser: "Finance Manager", visitors: 200, fill: "#092332" },
  { browser: "Upper Management", visitors: 287, fill: "#FC0000" },
  { browser: "Reinsurance", visitors: 173, fill: "gray" },
 
]

const chartConfig = {
  Accounting: {
    label: "Accounting",
  },
  "Finance Manager": {
    label: "Finance Manager",
    color: "hsl(var(--chart-1))",
  },

  "Upper Management": {
    label: "Upper Management",
    color: "hsl(var(--chart-3))",
  },
  Reinsurance: {
    label: "Reinsurance",
    color: "hsl(var(--chart-4))",
  },

} satisfies ChartConfig

export function DepartmentCharts() {
 

  return (
    <Card className="flex flex-col border-none">
      <CardContent className="flex-1 pb-0 h-[100px]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={4}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy)}
                          className="fill-muted-foreground"
                        >
                       Total Claims
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                           y={(viewBox.cy || 0) + 20}
                          className="fill-foreground text-[28px] font-bold"
                        >
                          350.5 K
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
