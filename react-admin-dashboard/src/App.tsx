import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Buildings from './pages/Buildings'
import Paths from './pages/Paths'
import MapPreview from './pages/MapPreview'
import Settings from './pages/Settings'
import PersonalInfo from "./pages/PersonalInfo";
import MapSettings from "./pages/MapSettings";
import AccessibilitySettings from "./pages/AccessibilitySettings";
import Notifications from "./pages/Notifications";
import SecuritySettings from "./pages/SecuritySettings";

export default function App() {
  return (
    <div className="flex min-h-screen text-gray-800">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/buildings" element={<Buildings />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="/map-preview" element={<MapPreview />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<div className="text-sm text-gray-500">Not found</div>} />
          <Route path="/settings/personal" element={<PersonalInfo />} />
          <Route path="/settings/notifications" element={<Notifications />} />
          <Route path="/settings/map" element={<MapSettings />} />
          <Route path="/settings/accessibility" element={<AccessibilitySettings />} />
          <Route path="/settings/security" element={<SecuritySettings />} />
        </Routes>
      </main>
    </div>
  )
}