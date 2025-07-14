import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "I work at a home service company. How can I convince my boss?",
    description:
      "Glad that you notice that there is a problem in how the business operates. Let's talk, we will provide you all the material to convince your boss.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Can you help us pick the right software?",
    description:
      "What a great question! Choosing the right software can save you from a lot of fires. Yes, we do provide consultation services for picking the right software for your home service business.",
    icon: LockClosedIcon,
  },
  {
    name: "Does your agency build custom integrations?",
    description:
      "Yes, sometimes a no-code workflow does not fit the customer needs. We are always open to exploring and building integrations that work for your business.",
    icon: ArrowPathIcon,
  },
  {
    name: "We are not a home service business. Can we still work with you?",
    description:
      "Unfortunately, we are focused on home service businesses. But, we would love to connect with you the right partner. Let's connect.",
    icon: FingerPrintIcon,
  },
];

export default function FaqSection() {
  return (
    <div id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:max-w-md">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
              Frequently asked questions
            </p>
            <p className="mt-4 text-base font-light leading-7 text-gray-600">
              Got more questions? We love answering them. Send us all of your queries at and we will
              be happy to answer them.
            </p>
          </div>
          <div>
            <dl className="mt-12 lg:mmt-0 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative lg:pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base font-light leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
