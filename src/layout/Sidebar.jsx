import { Home, CreditCard, BarChart3, Settings } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">FinDash</h1>

      <nav className="flex flex-col gap-4">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          <Home size={20} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          <CreditCard size={20} />
          <span>Transactions</span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          <BarChart3 size={20} />
          <span>Analytics</span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar