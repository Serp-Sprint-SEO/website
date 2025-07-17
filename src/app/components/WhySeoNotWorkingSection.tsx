import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Unresolved technical issues",
    description:
      "Technical errors like broken links, crawl blockages, and slow pages prevent search engines from properly indexing your site and can drag down your rankings, even if your content is great. You can't rely on tools only. You need expert developers to investigate deeper technical concerns.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Unoptimized web content",
    description:
      "If your content isn’t targeting the right keywords, doesn’t answer user intent, or is not updated for AI-powered and voice searches, you’ll struggle to stand out in today’s competitive results pages. Most SEO audits cannot identify subjective issues with the content, which can hold your site back.",
    icon: LockClosedIcon,
  },
  {
    name: "Incomplete SEO implementation",
    description:
      "Even the best audit is useless if recommendations aren’t fully implemented. Most teams lack the expertise to resolve technical and non-technical issues uncovered in the audits. This is why they fall short of implementing every fix, causing the expected gains never to materialize.",
    icon: ArrowPathIcon,
  },
  {
    name: "Lack of a strategic plan",
    description:
      "Without a prioritized, actionable roadmap, you can end up focusing on low-impact tasks while missing the important updates that can bring measurable results. Ongoing, data-driven adjustments are essential to fuel continuous SEO growth, and that's exactly what most websites miss.",
    icon: FingerPrintIcon,
  },
];

export default function WhySeoNotWorkingSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why your SEO efforts are not bringing results?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tired of tweaking your website but still not seeing the rankings or
            traffic you expect? Here’s what could be holding you back:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
