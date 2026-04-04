import FinanceChart from "../components/FinanceChart"
import StatCard from "../components/StatCard"

const Analytics = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Income" amount={60000} change="+5%" />
        <StatCard title="Total Expenses" amount={35000} change="-2%" />
        <StatCard title="Savings" amount={25000} change="+3%" />
      </div>

      <FinanceChart />

      <div className="bg-white p-5 rounded-xl border shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>

        <div className="flex justify-between items-center">
          <p className="text-gray-600">Income vs Expenses</p>
          <p className="font-semibold">₹60,000 / ₹35,000</p>
        </div>

        <div className="mt-4 w-full bg-gray-200 h-3 rounded-full overflow-hidden">
          <div className="bg-green-500 h-full w-[65%]" />
        </div>
      </div>
    </div>
  )
}

export default Analytics