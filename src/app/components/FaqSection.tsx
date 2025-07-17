import {
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  AccordionContent,
} from "@/app/components/common/Accordion";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Why SEO audit is important?",
    answer: "An SEO audit identifies technical and content issues holding your site back, helping you improve rankings, increase traffic, and boost conversions."
  },
  {
    question: "How many times should you audit your site for SEO?",
    answer: "We recommend auditing your site at least once a month or whenever you launch major updates to stay ahead of SEO issues."
  },
  {
    question: "How much does an SEO audit cost?",
    answer: "At SERP Sprint SEO, full audits plus fixes start at just $500—saving you thousands compared to DIY costs."
  },
  {
    question: "What is an SEO audit report?",
    answer: "It’s a detailed analysis showing SEO issues on your site with prioritized recommendations for fixes and growth."
  },
  {
    question: "What is included in an SEO audit?",
    answer: "We audit technical SEO, content quality, on-page optimization, site structure, mobile usability, and more."
  },
  {
    question: "How to conduct a technical SEO site audit?",
    answer: "By using expert tools and processes to scan your site for crawl errors, broken links, speed issues, and security flaws."
  },
  {
    question: "Does SERP Sprint provide professional SEO audit services any website?",
    answer: "Yes, we audit and fix sites of all sizes and industries, tailoring solutions to your needs."
  },
  {
    question: "Can SERP Sprint do a local SEO audit?",
    answer: "Absolutely—we optimize your site and listings to enhance local search visibility."
  },
  {
    question: "What SEO audit tools does SERP Sprint use?",
    answer: "We use top industry tools like Ahrefs, SEMrush, Google Search Console, and proprietary methods for thorough audits."
  },
  {
    question: "Can SERP Sprint audit large or complex sites with thousands of pages?",
    answer: "Yes, we handle SEO audits and fixes for large, complex websites efficiently."
  },
  {
    question: "How does SERP Sprint handle sensitive data and maintain client confidentiality?",
    answer: "We follow strict data security protocols and never share your information with third parties."
  },
  {
    question: "What factors determine the cost of an SEO audit?",
    answer: "Site size, complexity, and scope of fixes affect pricing; our base plan covers up to 100 pages and all identified issues."
  },
  {
    question: "Is there a money-back guarantee or satisfaction promise?",
    answer: "Yes, we stand by our work and offer satisfaction assurance to ensure you get real results."
  },
  {
    question: "How soon can I expect to see results after implementing suggested fixes?",
    answer: "Most clients see improvements within weeks to a few months, depending on site condition and competition."
  },
  {
    question: "How long does an SEO audit take to complete?",
    answer: "Our typical audit and fixes delivery timeframe is 7–30 days."
  },
  {
    question: "What ongoing support or consultation is available after the audit is done?",
    answer: "We provide actionable SEO tips and consultation to help you sustain and grow your rankings."
  },
  {
    question: "Will SERP Sprint help me implement the recommended changes, or is it audit-only?",
    answer: "We do both audit and full implementation of all fixes—no need to manage multiple teams yourself."
  },
  {
    question: "What deliverables will I receive from the audit?",
    answer: "A comprehensive audit report, fixed site issues, and tailored SEO growth recommendations."
  },
  {
    question: "How will SERP Sprint communicate the audit findings and recommendations?",
    answer: "We provide clear, easy-to-understand reports and offer direct consultation calls as needed."
  },
  {
    question: "Can I see a sample audit report before buying?",
    answer: "Yes, we offer sample reports to help you understand our thorough audit process."
  },
  {
    question: "Why can't I just use a free SEO audit tool?",
    answer: "Free tools provide limited insights without fixes or expert guidance—our full-service audit solves issues end-to-end for real growth."
  }
];

export default function FaqSection() {
  return (
    <div id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:max-w-md relative">
            <div className="lg:sticky lg:top-4">
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base font-light leading-7 text-gray-600">
                Find answers to the question we get asked the most
              </p>
            </div>
          </div>
          <div>
            <AccordionRoot
              type="multiple"
              className="mt-12 lg:mmt-0 grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  value={faq.question}
                  key={faq.question}
                  className="relative lg:pl-16"
                >
                  <AccordionTrigger className="accordion-trigger flex items-center justify-between gap-10 w-full">
                    <p className="text-base font-semibold leading-7 text-gray-900">
                      {faq.question}
                    </p>
                    <ChevronUpIcon className="chevron-up-icon w-5 h-5 text-gray-900" />
                    <ChevronDownIcon className="chevron-down-icon w-5 h-5 text-indigo-900" />
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content max-w-2xl">
                    <p className="mt-2 text-base font-light leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </div>
        </div>
      </div>
    </div>
  );
}
