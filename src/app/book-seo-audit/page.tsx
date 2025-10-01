import type { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Book SEO Audit",
  description:
    "Book your SEO audit with Serp Sprint.",
};

export default function BookSeoAudit() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <ContactForm />
    </main>
  );
}
