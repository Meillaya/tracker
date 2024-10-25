"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowDownLeft, ArrowUpRight, Coffee, ShoppingCart, Smartphone } from "lucide-react";

const activities = [
  {
    icon: ShoppingCart,
    name: "Grocery Shopping",
    amount: "-$85.50",
    timestamp: "2 hours ago",
    type: "expense",
  },
  {
    icon: ArrowDownLeft,
    name: "Salary Deposit",
    amount: "+$3,500.00",
    timestamp: "5 hours ago",
    type: "income",
  },
  {
    icon: Coffee,
    name: "Coffee Shop",
    amount: "-$4.50",
    timestamp: "8 hours ago",
    type: "expense",
  },
  {
    icon: Smartphone,
    name: "Phone Bill",
    amount: "-$45.00",
    timestamp: "1 day ago",
    type: "expense",
  },
];

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="rounded-full bg-muted p-2">
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.name}</p>
                  <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
                </div>
                <p className={activity.type === "expense" ? "text-red-500" : "text-green-500"}>
                  {activity.amount}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}