import Table from '../components/Table'

type BuildingRow = {
  id: string
  building: string
  type: string
  locations: number
  paths: number
  updated: string
}

const rows: BuildingRow[] = [
  { id: '01', building: 'Building 10', type: 'General Enquiries', locations: 3, paths: 12, updated: '12-04-2025 | 15:24' },
  { id: '02', building: 'Building 7',  type: 'Multipurpose Hall', locations: 6, paths: 9,  updated: '12-04-2025 | 15:24' },
  { id: '03', building: 'Building 5',  type: 'Campus Security',   locations: 2, paths: 7,  updated: '12-04-2025 | 15:24' },
]

export default function Dashboard() {
  return (
    <section className="space-y-6">
      <header>
        <div className="header-pill text-center">Dashboard</div>
        <p className="text-sm text-gray-500">Overview of buildings and connections.</p>
      </header>

      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { title: 'Total Buildings', value: 23 },
          { title: 'Total Paths', value: 120 },
          { title: 'Active Editors', value: 4 },
        ].map((c, i) => (
          <div key={i} className="bg-white rounded-xl border p-4">
            <div className="text-xs text-gray-500">{c.title}</div>
            <div className="text-2xl font-bold mt-1">{c.value}</div>
          </div>
        ))}
      </div>

      <Table
        columns={[
          { key: 'id', title: 'ID', className: 'w-16' },
          { key: 'building', title: 'Building' },
          { key: 'type', title: 'Building Type' },
          { key: 'locations', title: '# of Locations' },
          { key: 'paths', title: '# of Paths Connected' },
          { key: 'updated', title: 'Last Update' },
        ]}
        data={rows}
      />
    </section>
  )
}