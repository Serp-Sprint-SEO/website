import {
  ShieldCheckIcon,
  PresentationChartLineIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/20/solid";

export default function BenefitsSection() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-50 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Benefits of a comprehensive SEO audit
              </h2>
              <p className="mt-6 text-xl/8 text-gray-700">
                Where most SEO audit services hand you a PDF, we eliminate every
                SEO issue – not just find it.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Problem image"
            width={1600}
            height={1080}
            src="/serp-2.jpeg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ShieldCheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <h3 className="font-semibold text-gray-900">
                      Spot hidden SEO issues -
                    </h3>{" "}
                    A detailed SEO audit uncovers technical glitches, broken
                    links, slow-loading pages, and content gaps that may be
                    invisible but seriously impact your search engine
                    performance.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PresentationChartLineIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <h3 className="font-semibold text-gray-900">
                      Get a growth roadmap -
                    </h3>{" "}
                    An audit delivers prioritized, actionable recommendations
                    that help you fix existing problems. It also optimizes your
                    site for long-term SEO success while also making it
                    future-proof.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CursorArrowRippleIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <h3 className="font-semibold text-gray-900">
                      Focus on high-impact fixes -
                    </h3>{" "}
                    Instead of guessing, you invest time and resources in the
                    exact fixes and strategies that will improve rankings,
                    increase traffic, and drive conversions for your business
                    efficiently.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
