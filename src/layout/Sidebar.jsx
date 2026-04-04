import { Home, CreditCard, BarChart3, Settings } from "lucide-react"
import { Link } from "react-router-dom"


const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">FinDash</h1>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800">
            <Home size={20} />
            <span>Dashboard</span>
            </Link>

            <Link to="/analytics" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800">
            <BarChart3 size={20} />
            <span>Analytics</span>
            </Link>

            <Link to="/transactions" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800">
            <CreditCard size={20} />
            <span>Transactions</span>
            </Link>

            <Link to="/settings" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800">
            <Settings size={20} />
            <span>Settings</span>
            </Link>
      </nav>
    </div>
  )
}

export default Sidebar