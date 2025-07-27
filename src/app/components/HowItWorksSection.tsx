import {
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/20/solid";
import { getImageProps } from "next/image";

export default function HowItWorksSection() {
  const common = { alt: "Art Direction Example", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1600,
    height: 1080,
    src: "/how-it-works.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 1031,
    height: 731,
    src: "/how-it-works-m.png",
  });
  return (
    <div
      id="how-it-works"
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                How we transform your SEO
              </h2>
              <p className="mt-6 text-xl/8 text-gray-700">
                We handle every step for you, from audit to implementation and
                ongoing growth.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <picture>
            <source media="(min-width: 1000px)" srcSet={desktop} />
            <source media="(min-width: 500px)" srcSet={mobile} />
            <img
              {...rest}
              alt="Infographic displaying high SEO performance scores: an On-Page Score of 95, Performance 92, Accessibility 94, SEO 99, and Best Practices 99, illustrating the strong results an SEO agency can achieve."
              className="w-[48rem] max-w-none rounded-xl bg-indigo-700 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </picture>
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
                    <h3 className="font-semibold text-gray-900">
                      We audit your website -
                    </h3>{" "}
                    We uncover every technical, content, and off-page SEO issue
                    holding you back. You see exactly what needs fixing,
                    prioritized for maximum impact.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ClipboardDocumentCheckIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <h3 className="font-semibold text-gray-900">
                      We fix everything -
                    </h3>{" "}
                    Our SEO and development experts fix every issue for you,
                    from technical errors to content gaps. Your site is upgraded
                    and ready to rank in just 7 days.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PresentationChartBarIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <h3 className="font-semibold text-gray-900">
                      You get a growth roadmap -
                    </h3>{" "}
                    We don’t just fix; we help you grow. After the fixes, you
                    will receive a customized SEO playbook with tips on how to
                    sustain growth and outrank competition.
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
