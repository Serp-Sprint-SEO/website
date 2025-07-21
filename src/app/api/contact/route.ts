import { NextResponse } from "next/server";
import qs from "qs";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  phone: string;
  message: string;
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
      `${process.env.NEXT_PUBLIC_CONTACT_BASE_URL}${params}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-make-apikey": process.env.CONTACT_FORM_PRIVATE_KEY ?? "",
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
