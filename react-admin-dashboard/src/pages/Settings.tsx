import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaBell, FaSignOutAlt, FaMap } from "react-icons/fa";
import { MdAccessibilityNew } from "react-icons/md";  // or FaUniversalAccess

const SettingCard = ({
  icon, color, label, onClick,
}: { icon: JSX.Element; color: string; label: string; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-4 px-6 py-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition"
  >
    <span className={`text-3xl p-3 rounded-full ${color}`}>{icon}</span>
    <span className="text-xl text-brand-teal font-medium">{label}</span>
  </button>
);

export default function Settings() {
  const nav = useNavigate();
  return (
    <section className="space-y-6">
      <div className="header-pill text-center">Settings</div>

      <div className="grid md:grid-cols-2 gap-8">
        <SettingCard icon={<FaUser />} color="bg-yellow-400 text-white" label="Personal Info"
          onClick={() => nav("/settings/personal")} />
        <SettingCard icon={<FaLock />} color="bg-orange-500 text-white" label="Security Settings"
          onClick={() => nav("/settings/security")} />
        <SettingCard icon={<FaBell />} color="bg-green-500 text-white" label="Notifications"
          onClick={() => nav("/settings/notifications")} />
        <SettingCard icon={<FaSignOutAlt />} color="bg-orange-500 text-white" label="Log Out"
          onClick={() => nav("/settings/logout")} />
        <SettingCard icon={<FaMap />} color="bg-sky-500 text-white" label="Map & Navigation" 
          onClick={() => nav("/settings/map")} />
        <SettingCard icon={<MdAccessibilityNew />} color="bg-purple-500 text-white" label="Accessibility" 
          onClick={() => nav("/settings/accessibility")} />
      </div>
    </section>
  );
}
