import Table from '../components/Table'

type Row = { id: string; from: string; to: string; distance: string; updated: string }
const rows: Row[] = [
  { id: '01', from: 'Building 10', to: 'Building 7', distance: '120m', updated: '12-04-2025 | 15:24' },
  { id: '02', from: 'Building 5', to: 'Building 7', distance: '80m', updated: '12-04-2025 | 15:24' },
]

export default function Paths() {
  return (
    <section className="space-y-6">
      <header>
        <div className="header-pill text-center">Paths</div>
        <p className="text-sm text-gray-500">Define connections between buildings.</p>
      </header>

      <div className="bg-white rounded-xl border p-4 mb-4">
        <form className="grid sm:grid-cols-6 gap-3 items-end">
          <div className="sm:col-span-2">
            <label className="block text-xs text-gray-500 mb-1">From</label>
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Building A" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs text-gray-500 mb-1">To</label>
            <input className="w-full border rounded-lg px-3 py-2" placeholder="Building B" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Distance</label>
            <input className="w-full border rounded-lg px-3 py-2" placeholder="e.g. 120m" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
        </form>
      </div>

      <Table
        columns={[
          { key: 'id', title: 'ID', className: 'w-16' },
          { key: 'from', title: 'From' },
          { key: 'to', title: 'To' },
          { key: 'distance', title: 'Distance' },
          { key: 'updated', title: 'Last Update' },
        ]}
        data={rows}
      />
    </section>
  )
}