import { useState } from "react"
import { transactions } from "../services/mockData"
import TransactionItem from "../components/TransactionItem"

const Transactions = () => {
  const [search, setSearch] = useState("")

  const filteredTransactions = transactions.filter((txn) =>
    txn.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transactions</h1>

      <input
        type="text"
        placeholder="Search transactions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-lg outline-none"
      />

      <div className="bg-white p-5 rounded-xl border shadow-sm">
        <div className="flex flex-col gap-4">
          {filteredTransactions.length === 0 ? (
            <p className="text-gray-500">No transactions found</p>
          ) : (
            filteredTransactions.map((txn) => (
              <TransactionItem
                key={txn.id}
                title={txn.title}
                amount={txn.amount}
                type={txn.type}
                category={txn.category}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Transactions