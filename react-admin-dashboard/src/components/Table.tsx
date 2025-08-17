type Col<T> = { key: keyof T; title: string; className?: string }
type Props<T> = { columns: Col<T>[]; data: T[] }

export default function Table<T extends Record<string, any>>({ columns, data }: Props<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            {columns.map(c => (
              <th key={String(c.key)} className={"px-4 py-3 text-left font-semibold " + (c.className ?? '')}>
                {c.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t">
              {columns.map(c => (
                <td key={String(c.key)} className={"px-4 py-3 " + (c.className ?? '')}>
                  {String(row[c.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}