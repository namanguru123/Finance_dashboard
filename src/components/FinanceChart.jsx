import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

import { transactions } from "../services/mockData"

const barData = [
  { name: "Jan", income: 20000, expense: 12000 },
  { name: "Feb", income: 18000, expense: 9000 },
  { name: "Mar", income: 22000, expense: 14000 },
]

const categoryData = transactions
  .filter((t) => t.type === "expense")
  .reduce((acc, curr) => {
    const existing = acc.find((item) => item.name === curr.category)

    if (existing) {
      existing.value += curr.amount
    } else {
      acc.push({ name: curr.category, value: curr.amount })
    }

    return acc
  }, [])

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#eab308",
]

const FinanceChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl border shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="income" fill="#22c55e" />
            <Bar dataKey="expense" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

      </div>
    </div>
  )
}

export default FinanceChart