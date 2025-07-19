"use client";
import { useState } from "react";

const auditFrequencies: string[] = ["monthly", "bimonthly", "weekly"];

const numberOfPages = [50, 200, 350, 500];

export default function PricingMatrixSection() {
  const [pages, setPages] = useState("50");
  const [frequency, setFrequency] = useState("1");

  const calculateAuditPrice = () => {
    const numberOfPages = Number(pages);
    const auditFrequency = Number(frequency);

    let totalAmount = numberOfPages * 10;

    if (auditFrequency === 2) {
      totalAmount = totalAmount * 1.5;
    }

    if (auditFrequency === 3) {
      totalAmount = totalAmount * 2;
    }

    const formattedAmount = totalAmount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formattedAmount;
  };

  return (
    <div id="pricing" className="bg-stone-50">
      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our pricing matrix
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our pricing depends on two things only: your website&apos;s size
              and the audit frequency.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col py-8 gap-y-12">
              <h3 className="text-gray-600 text-base">
                Choose number of pages and audit frequency for your website:
              </h3>
              <div className="flex flex-col gap-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">
                    Number of pages
                  </span>
                  <span className="text-indigo-700">
                    {pages === "500" ? "500+" : pages}
                  </span>
                </div>
                <div className="w-full">
                  <input
                    type="range"
                    min={50}
                    max="500"
                    className="range range-xs range-primary w-full"
                    step="25"
                    onChange={(e) => setPages(e.target.value)}
                    value={pages}
                  />
                  <div className="flex justify-between mt-1 text-xs">
                    {numberOfPages.map((page) => {
                      const isPageRangePassed = Number(pages) >= page;
                      return (
                        <div
                          key={page}
                          className="flex flex-col gap-y-2 items-center"
                        >
                          <span
                            className={
                              isPageRangePassed
                                ? "text-indigo-400 font-bold"
                                : "text-gray-400"
                            }
                          >
                            |
                          </span>
                          <span
                            className={
                              isPageRangePassed
                                ? "text-indigo-600"
                                : "text-gray-600"
                            }
                          >
                            {page === 500 ? "500+" : page}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-semibold">
                    Audit frequency
                  </span>
                  <span className="text-indigo-700 capitalize">
                    {auditFrequencies[Number(frequency) - 1]}
                  </span>
                </div>
                <div className="w-full">
                  <input
                    type="range"
                    min={1}
                    max="3"
                    className="range range-xs range-primary w-full"
                    step="1"
                    onChange={(e) => setFrequency(e.target.value)}
                    value={frequency}
                  />
                  <div className="flex justify-between mt-1 text-xs">
                    {auditFrequencies.map((auditFrequency) => {
                      const isSelected =
                        auditFrequencies[Number(frequency) - 1] ===
                        auditFrequency;
                      return (
                        <div
                          key={auditFrequency}
                          className="flex flex-col gap-y-2 items-center"
                        >
                          <span
                            className={
                              isSelected
                                ? "text-indigo-400 font-bold"
                                : "text-gray-400"
                            }
                          >
                            |
                          </span>
                          <span
                            className={
                              isSelected
                                ? "text-indigo-600 capitalize"
                                : "text-gray-600 capitalize"
                            }
                          >
                            {auditFrequency}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border p-8 rounded-lg">
              <div className="flex flex-col items-center gap-y-4">
                <span className="text-gray-600 text-sm">
                  Your website audit price
                </span>
                <span className="text-gray-900 text-6xl font-semibold">
                  {calculateAuditPrice()}
                </span>
              </div>
              <hr className="mt-10" />
              <div className="flex justify-between mt-4">
                <span className="text-gray-600 font-medium">
                  Number of pages
                </span>
                <span className="text-gray-600">
                  {pages === "500" ? "500+" : pages}
                </span>
              </div>
              <hr className="mt-4" />
              <div className="flex justify-between mt-4">
                <span className="text-gray-600 font-medium">
                  Audit frequency
                </span>
                <span className="text-gray-600 capitalize">
                  {auditFrequencies[Number(frequency) - 1]}
                </span>
              </div>
              <hr className="mt-4" />
              <button
                onClick={() => {}}
                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-4 text-center text-md text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start my SEO audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
