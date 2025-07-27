import { getImageProps } from "next/image";
import Link from "next/link";

export default function WorkWithUsCtaSection() {
  const common = { alt: "Art Direction Example", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1600,
    height: 722,
    src: "/work-with-us.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 789,
    height: 522,
    src: "/work-with-us-m.png",
  });
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Work with us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ready to boost your rankings and leave SEO headaches behind? Let
              SERP Sprint SEO handle your audit and fixes for one simple price.
              Take the first step toward dominating the search results today.
            </p>
            <div className="mt-10">
              <Link
                href="book-seo-audit"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book an SEO audit
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <picture>
              <source media="(min-width: 1000px)" srcSet={desktop} />
              <source media="(min-width: 500px)" srcSet={mobile} />
              <img
                {...rest}
                alt="A diverse group of five smiling professionals collaborating around a table with laptops and documents, depicting teamwork and a positive work environment at an SEO agency."
                className="absolute left-0 top-0 w-[35rem] sm:w-[57rem] max-w-none rounded-md bg-white/5"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
