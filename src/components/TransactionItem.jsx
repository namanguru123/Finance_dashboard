const TransactionItem = ({ title, amount, type }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg border">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{type}</p>
      </div>

      <p className={type === "income" ? "text-green-500" : "text-red-500"}>
        ₹{amount}
      </p>
    </div>
  )
}

export default TransactionItem