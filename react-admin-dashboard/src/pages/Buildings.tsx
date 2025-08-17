import Table from '../components/Table'

type Row = { id: string; name: string; type: string; locations: number; updated: string }
const rows: Row[] = [
  { id: '01', name: 'Building 10', type: 'General Enquiries', locations: 3, updated: '12-04-2025 | 15:24' },
  { id: '02', name: 'Building 7', type: 'Multipurpose Hall', locations: 6, updated: '12-04-2025 | 15:24' },
  { id: '03', name: 'Building 5', type: 'Campus Security', locations: 2, updated: '12-04-2025 | 15:24' },
]

export default function Buildings() {
  return (
    <section className="space-y-6">
      <header>
        <div className="header-pill text-center">Buildings</div>
        <p className="text-sm text-gray-500">Manage campus buildings.</p>
      </header>

      <div className="bg-white rounded-xl border p-4 mb-4">
        <form className="grid sm:grid-cols-5 gap-3 items-end">
          <div className="sm:col-span-2">
            <label className="block text-xs text-gray-500 mb-1">Building Name</label>
            <input className="w-full border rounded-lg px-3 py-2" placeholder="e.g. Building 10" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs text-gray-500 mb-1">Type</label>
            <input className="w-full border rounded-lg px-3 py-2" placeholder="e.g. General Enquiries" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
        </form>
      </div>

      <Table
        columns={[
          { key: 'id', title: 'ID', className: 'w-16' },
          { key: 'name', title: 'Building' },
          { key: 'type', title: 'Type' },
          { key: 'locations', title: '# of Locations' },
          { key: 'updated', title: 'Last Update' },
        ]}
        data={rows}
      />
    </section>
  )
}