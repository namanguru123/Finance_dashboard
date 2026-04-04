const TransactionItem = ({ title, amount, type }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg border hover:shadow-sm transition">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-gray-500 capitalize">{type}</p>
      </div>

      <p className={`font-medium ${type === "income" ? "text-green-500" : "text-red-500"}`}>
        ₹{amount}
      </p>
    </div>
  )
}

export default TransactionItem