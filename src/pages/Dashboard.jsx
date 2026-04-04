import StatCard from "../components/StatCard"
import TransactionItem from "../components/TransactionItem"
import { transactions } from "../services/mockData"


const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome back</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Balance" amount={45000} change="+2.5%" />
        <StatCard title="Income" amount={20000} change="+1.2%" />
        <StatCard title="Expenses" amount={12000} change="-0.8%" />
      </div>


      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="flex flex-col gap-4">
          {transactions.slice(0, 5).map((txn) => (
            <TransactionItem
              key={txn.id}
              title={txn.title}
              amount={txn.amount}
              type={txn.type}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard