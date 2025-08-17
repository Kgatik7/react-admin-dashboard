export default function Settings() {
  return (
    <section className="space-y-6">
      <div className="header-pill">Settings</div>
      
      <div className="bg-white rounded-xl border p-4 space-y-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Theme</label>
          <select className="border rounded-lg px-3 py-2">
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Editor Role</label>
          <select className="border rounded-lg px-3 py-2">
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Save Changes</button>
      </div>
    </section>
  )
}