import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "One-stop SEO solution",
    description:
      "SERP Sprint offers an all-inclusive SEO solution. We don’t just audit your website; we identify issues and implement every fix, technical and non-technical. We also give expert insights to boost the organic taffic of your website.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Flat-rate pricing",
    description:
      "You don't need to spend thousands of dollars on SEO tools and hiring experts. With no hidden fees, hourly billing, or confusing packages, SERP Sprint offers one clear, flat-rate pricing that covers your audit and all fixes.",
    icon: LockClosedIcon,
  },
  {
    name: "Expert driven results",
    description:
      "Your project is handled by seasoned SEO specialists with extensive hands-on experience across various industries. If you find an issue that came back within 30 days of our audit, we’ll fix it free. No questions asked.",
    icon: ArrowPathIcon,
  },
  {
    name: "AI & future-proof optimization",
    description:
      "Your site is optimized for how people and search engines work today. SERP Sprint provides a clear, actionable plan to rewire your content for SGE visibility, ChatGPT answers, and featured snippets. Don’t let Google’s update bury you.",
    icon: FingerPrintIcon,
  },
];

export default function WhyPartnerSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why partner with SERP Sprint?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            If you&apos;re website owner drowning in piecemeal SEO costs, our
            service is for you.
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
