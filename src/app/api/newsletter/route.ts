import { NextResponse } from "next/server";
import qs from "qs";

type FormData = {
  email: string;
};

export async function POST(
  request: Request
) {
  try {
    const formData = await request.json() as FormData;
    const params = qs.stringify(formData, {
      addQueryPrefix: true
    })

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEWSLETTER_BASE_URL}${params}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-make-apikey": process.env.NEWSLETTER_FORM_PRIVATE_KEY ?? "",
        },
      }
    );

    if (response.status === 200) {
      return NextResponse.json(
      {
        status: 'success',
        message: 'Data received and processed successfully!',
      },
      { status: 200 }
    );
    }
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
