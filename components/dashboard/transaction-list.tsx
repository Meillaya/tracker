"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: "1",
    date: "2024-03-20",
    description: "Grocery Store",
    category: "Food",
    amount: -85.50,
    status: "completed",
  },
  {
    id: "2",
    date: "2024-03-19",
    description: "Monthly Salary",
    category: "Income",
    amount: 3500.00,
    status: "completed",
  },
  {
    id: "3",
    date: "2024-03-19",
    description: "Coffee Shop",
    category: "Entertainment",
    amount: -4.50,
    status: "pending",
  },
  {
    id: "4",
    date: "2024-03-18",
    description: "Phone Bill",
    category: "Utilities",
    amount: -45.00,
    status: "completed",
  },
];

export default function TransactionList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell className={`text-right ${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge variant={transaction.status === "completed" ? "default" : "secondary"}>
                    {transaction.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}