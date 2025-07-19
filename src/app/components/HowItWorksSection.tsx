import {
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/20/solid";

export default function HowItWorksSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                How it works
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                From SEO audits to optimization, we handle everything for you
                from start to finish.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Problem image"
            width={1600}
            height={1080}
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <GlobeAltIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Your website is audited -
                    </strong>{" "}
                    We conduct a deep-dive SEO audit using industry-leading
                    tools and proven methods. Every technical, on-page, and
                    off-page issue is uncovered, with clear prioritization to
                    show what’s holding your site back from better rankings.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ClipboardDocumentCheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      We fix all the issues for you -
                    </strong>{" "}
                    Our experts roll up their sleeves and resolve every problem
                    identified in the audit. You don’t have to hire developers,
                    juggle freelancers, or worry about implementation. Our team
                    of experts will implement all the fixes in just 7 days.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PresentationChartBarIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      You get actionable SEO tips -
                    </strong>{" "}
                    Beyond the fixes, we deliver clear tips and strategies to
                    sustain your site’s growth and outperform competitors. We
                    don’t just fix; we help you grow. You’ll receive a
                    customized list of easy-to-follow SEO tips to attract more
                    visitors.
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
