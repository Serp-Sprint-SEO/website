import Image from "next/image";

export default function SuperchargeWebsiteSeoCtaSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-teal-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Supercharge your website with SERP Sprint SEO
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Stop struggling with incomplete fixes and wasted efforts on SEO.
              Let our experts handle your comprehensive SEO audit and optimize
              every aspect, including technical, content, and strategic
              elements, to unlock your site’s true ranking potential and drive
              lasting growth.
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started Now
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
