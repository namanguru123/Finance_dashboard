import { formatCurrency } from "../utils/formatCurrency"

const StatCard = ({ title, amount, change }) => {
  const isPositive = change.includes("+")

  return (
    <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition hover:scale-[1.02]">
      <p className="text-sm text-gray-500">{title}</p>

      <h2 className="text-2xl font-semibold mt-2">
        {formatCurrency(amount)}
      </h2>

      <p className={`text-sm mt-2 ${isPositive ? "text-green-500" : "text-red-500"}`}>
        {change}
      </p>
    </div>
  )
}

export default StatCard