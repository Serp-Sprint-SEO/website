import Image from "next/image";

const columns = [
  {
    header: "SEO Expenses (50-Page Site)",
    items: [
      "Audit Tools",
      "SEO Consultant",
      "Content Fixes",
      "Developer Fixes",
      "Management",
      "Maintenance",
      "Total Monthly Cost",
    ],
  },

  {
    header: "DIY",
    items: [
      "Ahrefs/SEMrush ($100-$1,000)",
      "5+ hours @ $100/hr = $500",
      "10+ hours @ $75/hr = $750",
      "10+ hours @ $75/hr = $750",
      "2 hrs of your time = $200",
      "$200/mo to resolve recurring issues between audits",
      "$2,500-$3,400+",
    ],
  },
  {
    header: (
      <Image
        src="/serp-sprint-logo.png"
        width={150}
        height={25.63}
        alt="SERP Sprint Logo"
      />
    ),
    items: [
      "Professional tools included with live dashboard access so you track every update in real time.",
      "You get expert analysis on the SEO audit.",
      "We fix every content error and optimize for search & user intent.",
      "Our developers resolve every technical error flagged in the audit.",
      "We handle everything while you relax.",
      "Our team monitors your site 24/7, instantly fixing any new issues at no extra charge.",
      "$500",
    ],
  },
];

export default function WhyUsSection() {
  return (
    <div
      id="problem"
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stop overpaying for DIY SEO
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See exactly how much time, money, and stress you save with us.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none overflow-auto">
          <table className="table-fixed">
            <thead>
              <tr>
                <th className="text-gray-900 px-4 border h-20 whitespace-nowrap w-1/3 text-left">
                  {columns[0].header}
                </th>
                <th className="text-gray-900 px-4 border h-20 whitespace-nowrap w-1/3 text-left">
                  {columns[1].header}
                </th>
                <th className="text-gray-900 px-4 border h-20 whitespace-nowrap w-1/3 text-left bg-green-50">
                  {columns[2].header}
                </th>
              </tr>
            </thead>
            <tbody>
              {columns[0].items.map((item, index) => (
                <tr key={`tr-${index}`}>
                  <td className="text-gray-900 p-4 border font-semibold">
                    {item}
                  </td>
                  <td className="text-gray-900 p-4 border min-w-48 sm:min-w-none">
                    {columns[1].items[index]}
                  </td>
                  <td className="text-gray-900 p-4 border bg-green-50 min-w-72 sm:min-w-none">
                    {columns[2].items[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
