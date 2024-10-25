"use client";

import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Finance Dashboard</h1>
        <p className="text-muted-foreground">Track your finances and expenses</p>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}