import React, { ReactElement } from "react";
import Image from "next/image";

const titleRows: string[] = [
  "Audit Tools",
  "SEO Consultant",
  "Content Fixes",
  "Developer Fixes",
  "Management",
  "Maintenance",
  "Total Monthly Cost",
];

interface TableData {
  header: string | ReactElement;
  items: Record<string, string>;
}

const data: TableData[] = [
  {
    header: "DIY",
    items: {
      "Audit Tools": "Ahrefs/SEMrush ($100-$1,000)",
      "SEO Consultant": "5+ hours @ $100/hr = $500",
      "Content Fixes": "10+ hours @ $75/hr = $750",
      "Developer Fixes": "10+ hours @ $75/hr = $750",
      Management: "2 hrs of your time = $200",
      Maintenance: "$200/mo to resolve recurring issues between audits",
      "Total Monthly Cost": "$2,500-$3,400+",
    },
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
    items: {
      "Audit Tools":
        "Professional tools included with live dashboard access so you track every update in real time.",
      "SEO Consultant": "You get expert analysis on the SEO audit.",
      "Content Fixes":
        "We fix every content error and optimize for search & user intent.",
      "Developer Fixes":
        "Our developers resolve every technical error flagged in the audit.",
      Management: "We handle everything while you relax.",
      Maintenance:
        "Our team monitors your site 24/7, instantly fixing any new issues at no extra charge.",
      "Total Monthly Cost": "$500",
    },
  },
];

export default function WhyUsSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-2 py-24 sm:py-32 lg:px-8">
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
                <th className="text-gray-900 px-4 border h-20 whitespace-nowrap w-1/2 text-left">
                  {data[0].header}
                </th>
                <th className="text-gray-900 px-4 border h-20 whitespace-nowrap w-1/2 text-left bg-green-50">
                  {data[1].header}
                </th>
              </tr>
            </thead>
            <tbody>
              {titleRows.map((titleRow, index) => (
                <React.Fragment key={`tr-${index}`}>
                  <tr>
                    <td
                      colSpan={2}
                      className="text-gray-900 font-semibold p-4 border bg-gray-100"
                    >
                      {titleRow}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`text-gray-900 p-4 border min-w-24 sm:min-w-none ${
                        index === titleRows.length - 1
                          ? "font-semibold text-center"
                          : ""
                      }`}
                    >
                      {data[0].items[titleRow]}
                    </td>
                    <td
                      className={`text-gray-900 p-4 border bg-green-50 min-w-72 sm:min-w-none ${
                        index === titleRows.length - 1
                          ? "font-semibold text-center"
                          : ""
                      }`}
                    >
                      {data[1].items[titleRow]}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
