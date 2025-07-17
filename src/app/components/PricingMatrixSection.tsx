type RowDataKey = "frequency" | "monthly" | "bimonthly" | "weekly";

interface ColumnData {
  header: string;
  key: RowDataKey;
}

const columns: ColumnData[] = [
  {
    header: "Audit frequency",
    key: "frequency",
  },
  {
    header: "Monthly",
    key: "monthly",
  },
  {
    header: "Bimonthly",
    key: "bimonthly",
  },
  {
    header: "Weekly",
    key: "weekly",
  },
];

const rows: Record<RowDataKey, string>[] = [
  {
    frequency: "<50 pages",
    monthly: "$500",
    bimonthly: "$750",
    weekly: "$1000",
  },
  {
    frequency: "50-75 pages",
    monthly: "$750",
    bimonthly: "$1125",
    weekly: "$1500",
  },
  {
    frequency: "75-100 pages",
    monthly: "$1000",
    bimonthly: "$1500",
    weekly: "$2000",
  },
  {
    frequency: "100-150 pages",
    monthly: "$1500",
    bimonthly: "$2250",
    weekly: "$3000",
  },
  {
    frequency: "150-200 pages",
    monthly: "$2000",
    bimonthly: "$3000",
    weekly: "$4000",
  },
  {
    frequency: "200-250 pages",
    monthly: "$2500",
    bimonthly: "$3750",
    weekly: "$5000",
  },
  {
    frequency: "250-300 pages",
    monthly: "$3000",
    bimonthly: "$4500",
    weekly: "$6000",
  },
  {
    frequency: "300-400 pages",
    monthly: "$3500",
    bimonthly: "$5250",
    weekly: "$7000",
  },
  {
    frequency: "400-500 pages",
    monthly: "$4000",
    bimonthly: "$6000",
    weekly: "$8000",
  },
  {
    frequency: "500+ pages",
    monthly: "Custom Quote",
    bimonthly: "Custom Quote",
    weekly: "Custom Quote",
  },
];

export default function PricingMatrixSection() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stop overpaying for DIY SEO
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See exactly how much time, money, and stress you save with us.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <table className="table-fixed">
              <thead>
                <tr>
                  <th className="border bg-gray-50"></th>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="text-gray-900 w-1/4 border p-4 text-left  bg-gray-50"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={`pm-${index}`}>
                    {index === 0 && (
                      <td
                        rowSpan={rows.length}
                        className="text-gray-900 border p-4 font-bold bg-gray-50"
                      >
                        No. of pages
                      </td>
                    )}
                    {columns.map((column: ColumnData) => (
                      <td
                        className="text-gray-900 border p-4"
                        key={`${column.key}-${index}`}
                      >
                        {row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
