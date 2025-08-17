import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaInfoCircle } from "react-icons/fa";

export default function AccessibilitySettings() {
  const nav = useNavigate();

  const [largeLabels, setLargeLabels] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [voiceHints, setVoiceHints] = useState(false);

  return (
    <section className="space-y-8">
      {/* Header pill with back button */}
      <div className="relative">
        <div className="header-pill text-center">Accessibility</div>
        <button
          onClick={() => nav(-1)}
          className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-amber-400 shadow grid place-items-center"
        >
          <FaArrowLeft className="text-white text-xl" />
        </button>
      </div>

      {/* Toggle rows */}
      <div className="space-y-6">
        <SettingToggle
          label="Large labels & icons"
          description="Increase text size and icon size for better visibility"
          checked={largeLabels}
          onChange={setLargeLabels}
        />
        <SettingToggle
          label="High-contrast mode"
          description="Stronger color contrast for improved readability"
          checked={highContrast}
          onChange={setHighContrast}
        />
        <SettingToggle
          label="Voice hints for directions"
          description="Enable spoken cues during navigation"
          checked={voiceHints}
          onChange={setVoiceHints}
        />
      </div>
    </section>
  );
}

/* Reusable toggle row (shared with Map/Security/Notifications) */
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
        {/* Toggle switch */}
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
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <FaInfoCircle className="text-red-500" />
        <span>{description}</span>
      </div>
    </div>
  );
}
