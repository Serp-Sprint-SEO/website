"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

import Navbar from "@/app/components/common/Navbar";

import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  phone: string;
  message: string;
}

// const initialState = {
//   firstName: "Arslan",
//   lastName: "Khalid",
//   email: "arslan@buttersync.com",
//   website: "https://buttersync.com",
//   phone: "+9233312345678",
//   message: "Testing",
// };

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  website: "",
  phone: "",
  message: "",
};

interface SuccessMessageProps {
  state: FormData;
}

const SuccessMessage = ({ state }: SuccessMessageProps) => {
  return (
    <div className="text-center">
      <p className="text-base font-semibold text-indigo-600">
        Hey {state.firstName}
      </p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
        Thank you for submitting{" "}
        <span className="text-indigo-500">{state.website}</span> with SERP
        Sprint for SEO Audit!
      </h1>
      <p className="mx-auto mt-6 text-lg font-medium text-pretty text-gray-500 max-w-4xl sm:text-xl/8">
        We have sent you an email at{" "}
        <span className="font-medium text-indigo-500">{state.email}</span> to
        book an onboarding meeting as per your availability or you can book a spot right now.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="https://calendar.app.google/5xQSCMLY9sxYmfHw9"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Book onboarding meeting now
        </Link>
        <Link
          href="/"
          className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-xs hover:text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default function ContactForm() {
  const [state, setState] = useState<FormData>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setValue = (key: string, value: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact",
        {
          method: "POST",
          body: JSON.stringify(state)
        }
      );
      console.log(response.status);

      if (response.status === 200) {
        // setState(initialState);
        // TODO: show toast message
        setIsSubmitted(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Navbar />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      {!isSubmitted && (
        <>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Book an SEO audit
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Get your website audited and right on track to the top SERP
              results.
            </p>
          </div>
          <form
            className="mx-auto mt-16 max-w-xl sm:mt-20"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  First name*
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    placeholder="John"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    value={state.firstName}
                    onChange={(e) => setValue("firstName", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Last name*
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Doe"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    value={state.lastName}
                    onChange={(e) => setValue("lastName", e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="website"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Website*
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://serpsprintseo.com"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    value={state.website}
                    onChange={(e) => setValue("website", e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Work Email*
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="zakki@serpsprintseo.com"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    value={state.email}
                    onChange={(e) => setValue("email", e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="123-456-7890"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    value={state.phone}
                    onChange={(e) => setValue("phone", e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Comments or Questions
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    placeholder="Looking to get more leads? Frustrated with your current results? Planning something new? Tell us what's going on."
                    value={state.message}
                    onChange={(e) => setValue("message", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                disabled={isLoading}
                type="submit"
                className="flex gap-x-6 justify-center w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading && (
                  <ArrowPathIcon className="w-5 h-5 text-white animate-spin" />
                )}
                {!isLoading && <span>Book an SEO audit</span>}
              </button>
            </div>
          </form>
        </>
      )}
      {isSubmitted && <SuccessMessage state={state} />}
    </div>
  );
}
