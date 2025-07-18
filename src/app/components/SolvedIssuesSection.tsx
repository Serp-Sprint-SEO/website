import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

import {
  CheckCircleIcon
} from "@heroicons/react/24/solid";

const features = [
  {
    title: "Technical SEO errors",
    description:
      "We ensure your site is crawlable, indexable, fast, secure, and error-free.",
    list: [
      "4XX, 3XX, 5XX errors",
      "Broken redirects",
      "XML sitemap problems",
      "Noindex and nofollow errors",
      "Canonical tag errors",
      "HTTP status errors",
      "Site speed & core web vitals failures",
      "Mobile responsiveness errors",
      "Pagination & hreflang setup errors",
      "Missing or invalid schema",
      "Orphan pages",
      "Excessive redirects",
    ],
    icon: CloudArrowUpIcon,
  },
  {
    title: "On-page SEO issues",
    description:
      "We improve individual pages’ relevance, keyword targeting, and content quality.",
    list: [
      "Thin or duplicate content",
      "Keyword cannibalization",
      "Missing or broken meta titles and descriptions",
      "Missing or poorly optimized header tags",
      "Unoptimized or missing alt attributes on images",
      "Non-descriptive or missing internal anchor text",
      "Missing or incorrect schema markup",
      "Poor URL structures",
      "Content not optimized for AI search",
      "Uncompressed images",
      "Pages with only one or no internal links",
      "Noindex tags on important pages",
    ],
    icon: LockClosedIcon,
  },
  {
    title: "Off-page SEO errors",
    description:
      "We manage external signals and link profile health influencing site authority.",
    list: [
      "Toxic or low-quality backlinks",
      "Lack of quality backlinks",
      "Unclaimed or poorly optimized Google My Business profile",
      "Review gaps for local SEO",
      "Lack of an external link acquisition strategy",
      "Competitor backlink & keyword benchmarking",
      "Spam backlinks & negative SEO attacks",
    ],
    icon: ArrowPathIcon,
  },
  {
    title: "Design, HTML, and UX Flaws",
    description:
      "We give feedback on site architecture, code quality, and user experience for SEO.",
    list: [
      "Poor site architecture & navigation",
      "Slow page load affecting UX",
      "Render-blocking HTML, CSS, JavaScript",
      "Excessive code bloat (unused CSS/JS)",
      "Incomplete or incorrect HTML markup",
      "UX problems affecting engagement & bounce rates",
      "Security warnings and missing HTTPS lock icon",
    ],
    icon: FingerPrintIcon,
  },
];

export default function SolvedIssuesSection() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What issues are covered in our SEO audit?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We find and fix everything that’s holding your SEO efforts back.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.title} className="relative border rounded-2xl p-8 bg-white shadow-xl">
                <dt className="flex flex-col gap-4 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
                <ul className="flex flex-col gap-4 mt-8">
                  {feature.list.map((item) => (
                    <li key={item} className="flex gap-2 items-center">
                        <CheckCircleIcon className="h-6 w-6 text-green-500" />
                        <span className="text-gray-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
