import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaInfoCircle } from "react-icons/fa";

export default function SecuritySettings() {
  const nav = useNavigate();
  const [timeoutEnabled, setTimeoutEnabled] = useState(true);

  return (
    <section className="space-y-8">
      {/* Header pill with back button */}
      <div className="relative">
        <div className="header-pill text-center">Security Settings</div>
        <button
          onClick={() => nav(-1)}
          className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-amber-400 shadow grid place-items-center"
        >
          <FaArrowLeft className="text-white text-xl" />
        </button>
      </div>

      <div className="flex items-center justify-between bg-gray-100 rounded-xl shadow px-6 py-4">
        <div className="flex items-center gap-4">
          <span className="text-lg font-medium">Session Timeout</span>
          {/* Toggle switch */}
          <button
            onClick={() => setTimeoutEnabled(!timeoutEnabled)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              timeoutEnabled ? "bg-brand-teal" : "bg-gray-300"
            }`}
          >
            <div
              className={`h-4 w-4 bg-white rounded-full shadow transform transition ${
                timeoutEnabled ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaInfoCircle className="text-red-500" />
          <span>auto-logout after 10 mins of inactivity</span>
        </div>
      </div>
    </section>
  );
}
