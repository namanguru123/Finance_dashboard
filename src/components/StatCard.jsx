const StatCard = ({ title, amount, change }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <p className="text-sm text-gray-500">{title}</p>

      <h2 className="text-2xl font-semibold mt-2">₹{amount}</h2>

      <p className="text-sm mt-2 text-green-500">{change}</p>
    </div>
  )
}

export default StatCard