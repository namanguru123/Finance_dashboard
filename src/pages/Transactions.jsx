import { transactions } from "../services/mockData"
import TransactionItem from "../components/TransactionItem"

const Transactions = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transactions</h1>

      <div className="bg-white p-5 rounded-xl border shadow-sm">
        <div className="flex flex-col gap-4">
          {transactions.map((txn) => (
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

export default Transactions