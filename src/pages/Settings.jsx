const Settings = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Profile Section */}
      <div className="bg-white p-5 rounded-xl border shadow-sm space-y-4">
        <h2 className="text-lg font-semibold">Profile</h2>

        <div>
          <label className="text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            placeholder="Naman Sharma"
            className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="naman@example.com"
            className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
      </div>

      {/* Preferences Section */}
      <div className="bg-white p-5 rounded-xl border shadow-sm space-y-4">
        <h2 className="text-lg font-semibold">Preferences</h2>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Dark Mode</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Email Notifications</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white p-5 rounded-xl border shadow-sm space-y-4">
        <h2 className="text-lg font-semibold">Security</h2>

        <div>
          <label className="text-sm text-gray-600">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>
      </div>

      {/* Save Button */}
      <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800">
        Save Changes
      </button>
    </div>
  )
}

export default Settings