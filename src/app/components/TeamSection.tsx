const people = [
  {
    name: "Zakki Sohail",
    role: "Co-Founder / CEO",
    description:
      "With nearly a decade of hands-on SEO experience, Zakki has orchestrated SEO turnarounds for hundreds of brands – from startups to well-established companies. He’s cracked Google’s core updates for multiple clients, driving organic traffic surges. His audit frameworks are battle-tested against thousands of pages. Specializing in advanced SEO audits and content optimization, he combines data-driven strategies with practical execution to deliver measurable results.",
    imageUrl:
      "/zakki-sohail.png",
  },
  {
    name: "Arslan Khalid",
    role: "Co-Founder / CTO",
    description:
      "Bringing more than 7 years of expertise in development and design, Arslan rebuilds websites that Google loves. His hybrid dev-SEO approach slashes load times while crushing Core Web Vitals. Arslan ensures that technical SEO issues are resolved seamlessly while enhancing site performance and user experience. His deep knowledge of web technologies provides a full-spectrum solution that optimizes both search engine rankings and website usability.",
    imageUrl:
      "/arslan-khalid.png",
  },
];

export default function TeamSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-7xl flex flex-col gap-10 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-center sm:text-4xl">
            Meet your SEO sprinters
          </h2>
          <p className="mt-6 text-lg/8 sm:text-center text-gray-600">
            At SERP Sprint, we combine deep SEO and technical expertise to
            deliver real results. You get hands-on attention, proven strategies,
            and a dedicated team focused on helping your site climb the
            rankings.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex flex-col items-start gap-y-6">
                <div className="shrink-0 flex flex-row items-start gap-x-6">
                  <img
                    alt={`${person.name} image`}
                    src={person.imageUrl}
                    className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm/6 text-gray-700">
                    {person.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
