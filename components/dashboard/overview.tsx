"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", amount: 2400 },
  { month: "Feb", amount: 1398 },
  { month: "Mar", amount: 9800 },
  { month: "Apr", amount: 3908 },
  { month: "May", amount: 4800 },
  { month: "Jun", amount: 3800 },
];

export default function Overview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="expenses">
          <TabsList>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
          </TabsList>
          <TabsContent value="expenses" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="hsl(var(--primary))" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="income" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="hsl(var(--chart-2))" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}