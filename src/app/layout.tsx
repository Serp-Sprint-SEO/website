import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SERP Sprint Seo",
  description:
    "Stop wasting money on SEO tools, freelancers, or risky DIY fixes. With SERP Sprint, you get a full SEO audit alongwith expert fixes, starting at just $500.",
  verification: {
    google: "ytNIzxTvLWMJ_p9wiZZLcTr6yn7QImZRMIbcysKwPMo",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SERP Sprint SEO",
  url: "https://www.serpsprintseo.com/",
  logo: "https://www.serpsprintseo.com/serp-sprint-logo.png",
  description:
    "Stop wasting money on SEO tools, freelancers, or risky DIY fixes. With SERP Sprint, you get a full SEO audit alongwith expert fixes, starting at just $500.",
  telephone: "+92-333-417-2579",
  priceRange: "$",
  image: "https://www.serpsprintseo.com/work-with-us.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "740 Street 17",
    addressLocality: "Rawalpindi",
    addressRegion: "RWP",
    postalCode: "46500",
    addressCountry: "PK",
  },
  serviceArea: {
    "@type": "State",
    name: "US",
    containsPlace: [
      { "@type": "City", name: "New York" },
      { "@type": "City", name: "Los Angeles" },
      { "@type": "City", name: "Chicago" },
      { "@type": "City", name: "Houston" },
      { "@type": "City", name: "Phoenix" },
      { "@type": "City", name: "Philadelphia" },
      { "@type": "City", name: "San Antonio" },
      { "@type": "City", name: "San Diego" },
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "San Jose" },
    ],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Our SEO Audit Process",
  step: [
    {
      "@type": "HowToStep",
      name: "We audit your website",
      text: "We uncover every technical, content, and off-page SEO issue holding you back. You see exactly what needs fixing, prioritized for maximum impact.",
    },
    {
      "@type": "HowToStep",
      name: "We fix everything",
      text: "Our SEO and development experts fix every issue for you, from technical errors to content gaps. Your site is upgraded and ready to rank in just 7 days.",
    },
    {
      "@type": "HowToStep",
      name: "You get a growth roadmap",
      text: "We don’t just fix; we help you grow. After the fixes, you will receive a customized SEO playbook with tips on how to sustain growth and outrank competition.",
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SERP Sprint SEO",
  url: "https://www.serpsprintseo.com/",
  logo: "https://www.serpsprintseo.com/logo.png",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is an SEO audit important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An SEO audit is critical if you want your website to perform well on search engines. You uncover hidden technical errors and content problems that prevent you from ranking higher. When you address these issues, you can improve your positions on Google. Better search visibility means you get more traffic and more opportunities to convert users into customers.",
      },
    },
    {
      "@type": "Question",
      name: "How many times should you audit your site for SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should audit your website at least once a month. However, an SEO audit should be performed anytime you make significant website changes or add major content. This routine keeps you ahead of technical errors and helps you fix issues before they grow.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an SEO audit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You will find huge differences in audit pricing across the SEO industry. At SERP Sprint, you pay a flat starting price of just $500 for a full audit and implementation of all fixes. This price saves you thousands of dollars compared to doing it all yourself. Many agencies or tools charge extra for implementation, but you get transparent, all-in-one pricing with SERP Sprint.",
      },
    },
    {
      "@type": "Question",
      name: "What is an SEO audit report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An SEO audit report is a document that details every SEO-related issue affecting your site. You get a list of problems and prioritized recommendations. Each recommendation tells you what to fix first for the biggest impact. The report covers technical, on-page, content, and off-page elements.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in an SEO audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A comprehensive SEO audit provides a complete overview of your site’s SEO. Technical parameters such as crawl issues and site speed are checked. Your content quality, keyword usage, and on-page elements are also thoroughly reviewed. The audit identifies any issues with your site's structure, navigation, internal links, mobile-friendliness, and security. This way, you know every issue that could cost you traffic.",
      },
    },
    {
      "@type": "Question",
      name: "How do you conduct a technical SEO site audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SERP Sprint uses expert SEO tools and proven processes to run a technical website audit. Your site is scanned for crawl errors, broken links, and slow-loading pages. Similarly, your website's mobile usability, structure, and security flaws are checked. Additionally, any issues with server settings, robots.txt, sitemaps, and schema markup are also identified and fixed.",
      },
    },
    {
      "@type": "Question",
      name: "Does SERP Sprint provide professional SEO audit services for any website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can use SERP Sprint's SEO audit services no matter what type of website you run. SERP Sprint can audit e-commerce sites, business websites, blogs, and portfolios. You get solutions tailored to your specific industry and platform.",
      },
    },
    {
      "@type": "Question",
      name: "Can SERP Sprint do a local SEO audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can request a specialized local SEO audit. In this type of audit, SERP Sprint checks your site’s local listings, reviews, local schema, and more. These audits look for missing citations and opportunities to appear in local search results. You get fixes for Google Business Profile gaps and advice for boosting your presence with nearby customers.",
      },
    },
    {
      "@type": "Question",
      name: "What SEO audit tools does SERP Sprint use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SERP Sprint uses top industry tools like Ahrefs, SEMrush, and Google Search Console, along with our own checklists. You get data from multiple sources, so you never miss a critical issue.",
      },
    },
    {
      "@type": "Question",
      name: "Can SERP Sprint audit large or complex sites with thousands of pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if your site has thousands of pages or advanced features, SERP Sprint can still handle the audit efficiently. You will get a full analysis without skipped pages or missed issues. No matter the size or complexity, SERP Sprint gives you comprehensive coverage and detailed solutions.",
      },
    },
    {
      "@type": "Question",
      name: "How does SERP Sprint handle sensitive data and maintain client confidentiality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a part of the standard contract, SERP Sprint will sign a non-disclosure agreement (NDA) with you. Therefore, your website and business data are fully protected. Your details are never shared with third parties, and all access is secure and temporary.",
      },
    },
    {
      "@type": "Question",
      name: "What factors determine the cost of an SEO audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Where other SEO audit services vary their costs based on several factors, SERP Sprint offers a clear-cut one-price solution. Only your website's size determines the cost of the audit including the implementation of the fixes. There are no surprise costs, citing your website's complexity as the reason.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a money-back guarantee or satisfaction promise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, SERP Sprint offers a money-back guarantee if you're not satisfied with the service. This satisfaction guarantee means that if all the identified issues are not completely fixed, either all those issues are fixed free of charge, or you get a full refund with no questions asked.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can I expect to see results after implementing suggested fixes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You will start to see improvements within a few weeks once fixes go live. Some changes appear faster, like page speed or indexing. Others, like authority and rankings, may take 1-3 months to show the full effect. Your timeframe depends on competition and the state of your site.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an SEO audit take to complete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You get a full audit and fixes within 7 days. However, the timeframe can slightly vary based on the size of your website. Small sites move faster, and bigger or more complex sites may take a bit longer.",
      },
    },
    {
      "@type": "Question",
      name: "What ongoing support or consultation is available after the audit is done?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After your audit is complete and all fixes have been implemented, you will receive a detailed action plan, SEO tips, and priority recommendations. SERP Sprint checks in to see your progress and offers consultation for future changes.",
      },
    },
    {
      "@type": "Question",
      name: "Will SERP Sprint help me implement the recommended changes, or is it audit-only?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SERP Sprint handles both the audit and full implementation of all fixes. You don’t just get problems pointed out, you get every fix handled for you. You don't need to hire help or coordinate between teams.",
      },
    },
    {
      "@type": "Question",
      name: "What deliverables will I receive from the audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SERP Sprint deliverables include 20 items for one simple price. You receive a full SEO audit report, spreadsheets listing every issue, and regular progress updates. Your site gets all fixes implemented, not just a list of things to address.",
      },
    },
    {
      "@type": "Question",
      name: "How will SERP Sprint communicate the audit findings and recommendations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You get easy-to-read reports and summaries of all findings. SERP Sprint will set up a call or send video walk-throughs if you want them. Communication is always clear, with no jargon, so you know exactly what matters for your business.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see a sample audit report before buying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can request a sample audit report before you start. This helps you understand the depth and format you’ll receive, and you know exactly what you’re getting from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Why can't I just use a free SEO audit tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free SEO tools only scratch the surface. You might find a few issues but you won’t get solutions or the expert fixes you truly need. You get generic tips, but no one guarantees implementation or ongoing support. With SERP Sprint, you solve real problems end-to-end and maximize your growth potential.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
      <Script
        id="professional-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <Script
        id="how-to"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <Script
        id="organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </html>
  );
}
