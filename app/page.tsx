import Header from "@/components/dashboard/header";
import Overview from "@/components/dashboard/overview";
import QuickActions from "@/components/dashboard/quick-actions";
import RecentActivity from "@/components/dashboard/recent-activity";
import TransactionList from "@/components/dashboard/transaction-list";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <Header />
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Overview />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <TransactionList />
          <RecentActivity />
        </div>
      </div>
    </main>
  );
}