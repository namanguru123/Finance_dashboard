import { NavLink } from "react-router-dom"
import { Home, CreditCard, BarChart3, Settings } from "lucide-react"

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 p-2 rounded-lg transition"

  return (
    <div className="w-64 bg-gray-900 text-white p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">FinDash</h1>

      <nav className="flex flex-col gap-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-gray-800" : "hover:bg-gray-800"}`
          }
        >
          <Home size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-gray-800" : "hover:bg-gray-800"}`
          }
        >
          <CreditCard size={20} />
          <span>Transactions</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-gray-800" : "hover:bg-gray-800"}`
          }
        >
          <BarChart3 size={20} />
          <span>Analytics</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? "bg-gray-800" : "hover:bg-gray-800"}`
          }
        >
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>

      </nav>
    </div>
  )
}

export default Sidebar