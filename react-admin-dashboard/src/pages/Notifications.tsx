import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaInfoCircle } from "react-icons/fa";

export default function Notifications() {
  const nav = useNavigate();

  const [adminAlerts, setAdminAlerts] = useState(true);
  const [emailSummary, setEmailSummary] = useState(false);

  return (
    <section className="space-y-8">
      {/* Header pill with back button */}
      <div className="relative">
        <div className="header-pill text-center">Notifications</div>
        <button
          onClick={() => nav(-1)}
          className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-amber-400 shadow grid place-items-center"
        >
          <FaArrowLeft className="text-white text-xl" />
        </button>
      </div>

      {/* Toggles */}
      <div className="space-y-6">
        <SettingToggle
          label="Admin Alerts"
          description="e.g., when a new building/path is added"
          checked={adminAlerts}
          onChange={setAdminAlerts}
        />
        <SettingToggle
          label="Email summary"
          description="daily/weekly summary on general activity in the app"
          checked={emailSummary}
          onChange={setEmailSummary}
        />
      </div>
    </section>
  );
}

/* Reusable row */
function SettingToggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-xl shadow px-6 py-4">
      <div className="flex items-center gap-4">
        <span className="text-lg font-medium">{label}</span>
        {/* custom toggle switch */}
        <button
          onClick={() => onChange(!checked)}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
            checked ? "bg-brand-teal" : "bg-gray-300"
          }`}
        >
          <div
            className={`h-4 w-4 bg-white rounded-full shadow transform transition ${
              checked ? "translate-x-6" : ""
            }`}
          />
        </button>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 max-w-xs">
        <FaInfoCircle className="text-red-500" />
        <span>{description}</span>
      </div>
    </div>
  );
}
