import Image from "next/image";

export default function SimpleOfferCtaSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-indigo-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
              If you can do simple maths, SERP Sprint&apos;s offer is a
              no-brainer
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              You can spend thousands and waste weeks doing SEO the hard way. Or
              you can let our experts audit your site and fix every issue for
              just $500, in 7 days. It&apos;s simple math: less money, less hassle,
              better rankings.
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Audit my site
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              src="/CTA-image.png"
              width={1600}
              height={722}
              alt="CTA"
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
