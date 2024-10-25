"use client";

import { Plus, ArrowUpRight, ArrowDownLeft, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AddTransactionDialog from "./add-transaction-dialog";
import { useState } from "react";

export default function QuickActions() {
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button onClick={() => setShowAddTransaction(true)} className="w-full justify-start bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
          <Button variant="outline" className="w-full justify-start hover:bg-accent hover:text-accent-foreground">
            <ArrowUpRight className="mr-2 h-4 w-4" />
            Transfer Money
          </Button>
          <Button variant="outline" className="w-full justify-start hover:bg-accent hover:text-accent-foreground">
            <ArrowDownLeft className="mr-2 h-4 w-4" />
            Request Money
          </Button>
          <Button variant="outline" className="w-full justify-start hover:bg-accent hover:text-accent-foreground">
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </CardContent>
      </Card>
      <AddTransactionDialog open={showAddTransaction} onOpenChange={setShowAddTransaction} />
    </>
  );
}