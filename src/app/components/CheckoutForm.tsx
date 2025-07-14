import getStripe from "@/app/utils/getStripe";
import { useState } from "react";

export default function CheckoutForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckout = async () => {
    setLoading(true);

    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: "your_stripe_price_id",
      }),
    });

    const session = await response.json();

    if (session.id) {
      // Redirect to Stripe Checkout
      const stripe = await getStripe();
      if (stripe) {
        stripe.redirectToCheckout({ sessionId: session.id });
      }
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Book a call
    </button>
  );
}
