import { NavLink, useLocation } from 'react-router-dom'
import { FaTachometerAlt, FaBuilding, FaRoute, FaMapMarkedAlt, FaCog } from 'react-icons/fa'

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
  { to: '/buildings', label: 'Buildings', icon: <FaBuilding /> },
  { to: '/paths', label: 'Paths', icon: <FaRoute /> },
  { to: '/map-preview', label: 'Map Preview', icon: <FaMapMarkedAlt /> },
  { to: '/settings', label: 'Settings', icon: <FaCog /> },
]

export default function Sidebar() {
  const location = useLocation()
  return (
    <aside className="hidden md:block w-[var(--sidebar-width)] bg-[var(--sidebar-bg)] border-r border-gray-200">
      <div className="px-5 py-6 border-b">
        <h1 className="font-bold text-lg">UMP Nav App</h1>
        <p className="text-xs text-white">Admin Panel</p>
      </div>
      <nav className="p-3 space-y-1">
        {nav.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition 
               ${isActive ? 'bg-[var(--sidebar-bg)] text-yellow-400 font-semibold' : 'hover:bg-gray-50'}`
            }
          >
            <span className="text-base">{item.icon}</span>
            <span className="text-[var(--sidebar-text)] font-semibold">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="px-5 py-4 mt-auto text-xs text-gray-400">
        <div>Path: {location.pathname}</div>
      </div>
    </aside>
  )
}