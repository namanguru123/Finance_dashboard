import Sidebar from "./layout/Sidebar"
import Header from "./layout/Header"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import Transactions from "./pages/Transactions"
import Settings from "./pages/Settings"

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App