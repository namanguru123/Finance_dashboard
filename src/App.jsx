import Sidebar from "./layout/Sidebar"
import Header from "./layout/Header"
import StatCard from "./components/StatCard"



function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />


        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Welcome back</h1>

          <div className="grid grid-cols-3 gap-6">
            <StatCard title="Total Balance" amount="45,000" change="+2.5%" />
            <StatCard title="Income" amount="20,000" change="+1.2%" />
            <StatCard title="Expenses" amount="12,000" change="-0.8%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App