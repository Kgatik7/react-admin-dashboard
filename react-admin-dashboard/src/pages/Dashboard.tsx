import { useState } from "react";
import { FaBuilding, FaUserFriends, FaRoute, FaPlus } from "react-icons/fa";
import Table from "../components/Table";

type BuildingRow = {
  id: string;
  building: string;
  type: string;
  locations: number;
  paths: number;
  updated: string;
};

const rows: BuildingRow[] = [
  { id: "01", building: "Building 10", type: "General Enquiries", locations: 3, paths: 12, updated: "12-04-2025 | 15:24" },
  { id: "02", building: "Building 7",  type: "Multipurpose Hall",  locations: 6, paths: 9,  updated: "12-04-2025 | 15:24" },
  { id: "03", building: "Building 6",  type: "Lecture Hall",       locations: 4, paths: 23, updated: "12-04-2025 | 15:24" },
  { id: "04", building: "Old Gate",     type: "Entrance",           locations: 1, paths: 16, updated: "12-04-2025 | 15:24" },
];

type CardKey = "totalBuildings" | "newBuildings" | "totalPaths" | "totalUsers";

export default function Dashboard() {
  const [active, setActive] = useState<CardKey>("totalBuildings");

  return (
    <section className="space-y-8">
      <div className="header-pill text-center">Dashboard</div>

      {/* Cards behave like tabs */}
      <div role="tablist" aria-label="Dashboard summary" className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<FaBuilding />}
          label="Total Buildings"
          value="20"
          active={active === "totalBuildings"}
          onClick={() => setActive("totalBuildings")}
        />
        <StatCard
          icon={<FaPlus />}
          label="New Buildings"
          value="2"
          active={active === "newBuildings"}
          onClick={() => setActive("newBuildings")}
        />
        <StatCard
          icon={<FaRoute />}
          label="Total Paths"
          value="57"
          active={active === "totalPaths"}
          onClick={() => setActive("totalPaths")}
        />
        <StatCard
          icon={<FaUserFriends />}
          label="Total Users"
          value="324"
          active={active === "totalUsers"}
          onClick={() => setActive("totalUsers")}
        />
      </div>

      {/* Single content area that swaps based on the active card */}
      <div className="card p-6">
        {active === "totalBuildings" && <BuildingsSection />}
        {active === "newBuildings" && <NewBuildingsSection />}
        {active === "totalPaths" && <PathsSection />}
        {active === "totalUsers" && <UsersSection />}
      </div>
    </section>
  );
}

/* ---------- Sections ---------- */

function BuildingsSection() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">Buildings</h3>
          <p className="text-sm">
            <span className="text-emerald-600 font-semibold">+ 2 new buildings</span>{" "}
            <span className="text-gray-500">this month</span>
          </p>
        </div>
        <button className="px-3 py-1.5 rounded-lg border text-gray-600 hover:bg-gray-50">⋮</button>
      </div>

      <Table
        columns={[
          { key: "id", title: "#", className: "w-16" },
          { key: "building", title: "BUILDING" },
          { key: "type", title: "BUILDING TYPE" },
          { key: "locations", title: "# OF LOCATIONS" },
          { key: "paths", title: "# OF PATHS CONNECTED" },
          { key: "updated", title: "LAST UPDATE" },
        ]}
        data={rows}
      />
    </>
  );
}

function NewBuildingsSection() {
  return (
    <>
      <h3 className="font-semibold text-lg mb-2">New Buildings</h3>
      <p className="text-sm text-gray-500 mb-4">Recently added buildings.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { date: "10-04-2025", name: "Building 12", type: "Student Centre" },
          { date: "05-04-2025", name: "Building 14", type: "Engineering Labs" },
          { date: "02-04-2025", name: "Gate 3", type: "Entrance" },
        ].map((b, i) => (
          <div key={i} className="border rounded-xl p-4">
            <div className="text-xs text-gray-500">Added on {b.date}</div>
            <div className="font-medium">{b.name}</div>
            <div className="text-sm text-gray-500">{b.type}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function PathsSection() {
  return (
    <>
      <h3 className="font-semibold text-lg mb-2">Paths Summary</h3>
      <p className="text-sm text-gray-500 mb-4">Recent path activity and stats.</p>
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        <li>9 new paths created this month</li>
        <li>Building 6 now connects to 23 locations</li>
        <li>Average path length: 130m</li>
      </ul>
    </>
  );
}

function UsersSection() {
  return (
    <>
      <h3 className="font-semibold text-lg mb-2">Users Overview</h3>
      <p className="text-sm text-gray-500 mb-4">Active users, roles, and growth.</p>
      <div className="grid sm:grid-cols-3 gap-4">
        <MetricPill label="Active today" value="78" />
        <MetricPill label="Admins" value="4" />
        <MetricPill label="Editors" value="12" />
      </div>
    </>
  );
}

/* ---------- UI bits ---------- */

function StatCard({
  icon,
  label,
  value,
  active,
  onClick,
}: {
  icon: JSX.Element;
  label: string;
  value: string | number;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      role="tab"
      aria-selected={!!active}
      onClick={onClick}
      className={`relative w-full text-left transition ${
        active ? "scale-[1.01]" : "hover:translate-y-[-1px]"
      }`}
    >
      <div
        className={`
          bg-white rounded-2xl border
          px-5 py-4 shadow-[0_8px_0_0_rgba(16,24,40,0.05)]
          flex items-center justify-between
          ${active ? "border-amber-400" : "border-amber-300/70"}
        `}
      >
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-gray-50 text-gray-500">
            <span className="text-lg">{icon}</span>
          </span>
          <span className="text-sm text-gray-500">{label}</span>
        </div>
        <div className="text-2xl font-extrabold text-slate-800">{value}</div>
      </div>
      <div
        className={`absolute -bottom-7 left-3 right-3 h-2 rounded-full ${
          active ? "bg-[#B0E0E6]" : "bg-gray-200/70"
        }`}
      />
    </button>
  );
}

function MetricPill({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white rounded-xl border px-4 py-3">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
