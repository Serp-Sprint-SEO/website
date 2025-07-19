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
    answer: [
      "An SEO audit is critical if you want your website to perform well on search engines. You uncover hidden technical errors and content problems that prevent you from ranking higher.",
      "When you address these issues, you can improve your positions on Google. Better search visibility means you get more traffic and more opportunities to convert users into customers.",
    ],
  },
  {
    question: "How many times should you audit your site for SEO?",
    answer: [
      "You should audit your website at least once a month. However, an SEO audit should be performed anytime you make significant website changes or add major content. This routine keeps you ahead of technical errors and helps you fix issues before they grow.",
    ],
  },
  {
    question: "How much does an SEO audit cost?",
    answer: [
      "You will find huge differences in audit pricing across the SEO industry. At SERP Sprint, you pay a flat starting price of just $500 for a full audit and implementation of all fixes.",
      "This price saves you thousands of dollars compared to doing it all yourself. Many agencies or tools charge extra for implementation, but you get transparent, all-in-one pricing with SERP Sprint.",
    ],
  },
  {
    question: "What is an SEO audit report?",
    answer: [
      "An SEO audit report is a document that details every SEO-related issue affecting your site. You get a list of problems and prioritized recommendations. Each recommendation tells you what to fix first for the biggest impact. The report covers technical, on-page, content, and off-page elements.",
    ],
  },
  {
    question: "What is included in an SEO audit?",
    answer: [
      "A comprehensive SEO audit provides a complete overview of your site’s SEO. Technical parameters such as crawl issues and site speed are checked. Your content quality, keyword usage, and on-page elements are also thoroughly reviewed.",
      "The audit identifies any issues with your site's structure, navigation, internal links, mobile-friendliness, and security. This way, you know every issue that could cost you traffic.",
    ],
  },
  {
    question: "How do you conduct a technical SEO site audit?",
    answer: [
      "SERP Sprint uses expert SEO tools and proven processes to run a technical website audit. Your site is scanned for crawl errors, broken links, and slow-loading pages.",
      "Similarly, your website's mobile usability, structure, and security flaws are checked. Additionally, any issues with server settings, robots.txt, sitemaps, and schema markup are also identified and fixed.",
    ],
  },
  {
    question:
      "Does SERP Sprint provide professional SEO audit services any website?",
    answer: [
      "Yes, you can use SERP Sprint's SEO audit services no matter what type of website you run. SERP Sprint can audit e-commerce sites, business websites, blogs, and portfolios. You get solutions tailored to your specific industry and platform.",
    ],
  },
  {
    question: "Can SERP Sprint do a local SEO audit?",
    answer: [
      "Yes, you can request a specialized local SEO audit. In this type of audit, SERP Sprint checks your site’s local listings, reviews, local schema, and more.",
      "These audits look for missing citations and opportunities to appear in local search results. You get fixes for Google Business Profile gaps and advice for boosting your presence with nearby customers.",
    ],
  },
  {
    question: "What SEO audit tools does SERP Sprint use?",
    answer: [
      "SERP Sprint uses top industry tools like Ahrefs, SEMrush, and Google Search Console, along with our own checklists. You get data from multiple sources, so you never miss a critical issue.",
    ],
  },
  {
    question:
      "Can SERP Sprint audit large or complex sites with thousands of pages?",
    answer: [
      "Yes, if your site has thousands of pages or advanced features, SERP Sprint can still handle the audit efficiently. You will get a full analysis without skipped pages or missed issues. No matter the size or complexity, SERP Srpint gives you comprehensive coverage and detailed solutions.",
    ],
  },
  {
    question:
      "How does SERP Sprint handle sensitive data and maintain client confidentiality?",
    answer: [
      "As a part of the standard contract, SERP Sprint will sign a non-disclosure agreement (NDA) with you. Therefore, your website and business data are fully protected. Your details are never shared with third parties, and all access is secure and temporary.",
    ],
  },
  {
    question: "What factors determine the cost of an SEO audit?",
    answer: [
      "Where other SEO audit services vary their costs based on several factors, SERP Sprint offers a clear-cut one-price solution. Only your website's size determines the cost of the audit including the implementation of the fixes. There are no surprise costs, citing your website's complexity as the reason.",
    ],
  },
  {
    question: "Is there a money-back guarantee or satisfaction promise?",
    answer: [
      "Yes, SERP Sprint offers a money-back guarantee if you're not satisfied with the service. This satisfaction guarantee means that if all the identified issues are not completely fixed, either all those issues are fixed free of charge, or you get a full refund with no questions asked.",
    ],
  },
  {
    question:
      "How soon can I expect to see results after implementing suggested fixes?",
    answer: [
      "You will start to see improvements within a few weeks once fixes go live. Some changes appear faster, like page speed or indexing. Others, like authority and rankings, may take 1-3 months to show the full effect. Your timeframe depends on competition and the state of your site.",
    ],
  },
  {
    question: "How long does an SEO audit take to complete?",
    answer: [
      "You get a full audit and fixes within 7 days. However, the timeframe can slightly vary based on the size of your website. Small sites move faster, and bigger or more complex sites may take a bit longer. ",
    ],
  },
  {
    question:
      "What ongoing support or consultation is available after the audit is done?",
    answer: [
      "After your audit is complete and all fixes have been implemented, you will receive a detailed action plan, SEO tips, and priority recommendations. SERP Sprint checks in to see your progress and offers consultation for future changes.",
    ],
  },
  {
    question:
      "Will SERP Sprint help me implement the recommended changes, or is it audit-only?",
    answer: [
      "SERP Sprint handles both the audit and full implementation of all fixes. You don’t just get problems pointed out, you get every fix handled for you. You don't need to hire help or coordinate between teams.",
    ],
  },
  {
    question: "What deliverables will I receive from the audit?",
    answer: [
      "SERP Sprint deliverables include 20 items for one simple price. You receive a full SEO audit report, spreadsheets listing every issue, and regular progress updates. Your site gets all fixes implemented, not just a list of things to address. For more details, refer to the table above.",
    ],
  },
  {
    question:
      "How will SERP Sprint communicate the audit findings and recommendations?",
    answer: [
      "You get easy-to-read reports and summaries of all findings. SERP Sprint will set up a call or send video walk-throughs if you want them. Communication is always clear, with no jargon, so you know exactly what matters for your business.",
    ],
  },
  {
    question: "Can I see a sample audit report before buying?",
    answer: [
      "Yes, you can request a sample audit report before you start. This helps you understand the depth and format you’ll receive, and you know exactly what you’re getting from day one.",
    ],
  },
  {
    question: "Why can't I just use a free SEO audit tool?",
    answer: [
      "Free SEO tools only scratch the surface. You might find a few issues but you won’t get solutions or the expert fixes you truly need. You get generic tips, but no one guarantees implementation or ongoing support. With SERP Sprint, you solve real problems end-to-end and maximize your growth potential.",
    ],
  },
];

export default function FaqSection() {
  return (
    <div id="faq" className="bg-gray-50 py-24 sm:py-32">
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
              {faqs.map((faq, index) => (
                <AccordionItem
                  value={faq.question}
                  key={faq.question}
                  className="relative lg:pl-16"
                >
                  <AccordionTrigger className="accordion-trigger flex items-center justify-between gap-10 w-full">
                    <p className="text-base text-left font-semibold leading-7 text-gray-900">
                      {faq.question}
                    </p>
                    <ChevronUpIcon className="chevron-up-icon w-5 h-5 text-gray-900 shrink-0" />
                    <ChevronDownIcon className="chevron-down-icon w-5 h-5 text-indigo-900 shrink-0" />
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content max-w-2xl">
                    {faq.answer.map((paragraph, answerIndex) => (
                      <p
                        key={`${index}-${answerIndex}`}
                        className="mt-2 text-base font-light leading-7 text-gray-600"
                      >
                        {paragraph}
                      </p>
                    ))}
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
