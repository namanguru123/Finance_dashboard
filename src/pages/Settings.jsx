const Settings = () => {
  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="bg-white p-5 rounded-xl border shadow-sm space-y-4">
        
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full mt-1 p-2 border rounded-lg outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full mt-1 p-2 border rounded-lg outline-none"
          />
        </div>

        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg">
          Save Changes
        </button>

      </div>
    </div>
  )
}

export default Settings