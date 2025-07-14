import Image from "next/image";

export default function FounderVideoSection() {
  return (
    <section id="video-note" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
            }}
          >
            <iframe
              src="https://www.loom.com/embed/8d91e3354ce745dd8d8ca13d5bdcb39f?sid=e2c7582e-e0ab-4cf5-9bfb-52cbe68ca61a"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
          <figcaption className="mt-10">
            <Image
              src="/arslan-khalid.png"
              width={90}
              height={90}
              alt="Arslan Khalid | Founder ButterSync"
              className="mx-auto"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Arslan Khalid</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Founder ButterSync</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
