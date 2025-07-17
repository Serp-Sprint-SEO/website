import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Understand your needs",
    description:
      "We come in and understand your current state of the business end-to-end",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Identify cracks",
    description:
      "We identify cracks to fix leaky buckets and potential opportunities to reduce manual work",
    icon: LockClosedIcon,
  },
  {
    name: "Build workflows",
    description:
      "We build workflows to fix the cracks and leaks in your business using the software solutions",
    icon: ArrowPathIcon,
  },
  {
    name: "Autopilot mode on!",
    description:
      "It's time to reap the rewards. Happy team, happier customers and happiest you!",
    icon: FingerPrintIcon,
  },
];

export default function SolutionSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Making software work for you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We move your business forward by making software row together. We build systems,
            integrations and workflows specific to your business needs. We connect your existing
            software solutions to help you run your business instead of managing software.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
