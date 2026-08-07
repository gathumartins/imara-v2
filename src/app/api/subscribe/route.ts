import { NextRequest, NextResponse } from "next/server"
import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
})

interface MailchimpApiError {
  response: {
    text: string
  }
}

function isMailchimpApiError(error: unknown): error is MailchimpApiError {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as { response?: unknown }).response === "object" &&
    (error as { response?: unknown }).response !== null &&
    "text" in (error as { response: object }).response
  )
}

export async function POST(request: NextRequest) {
  const { email }: { email?: string } = await request.json()

  if (!email) {
    return NextResponse.json(
      { error: { title: "Email Required", detail: "Please enter your email address." } },
      { status: 400 },
    )
  }

  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID

  if (!audienceId) {
    return NextResponse.json(
      { error: { title: "Not Configured", detail: "Mailchimp audience is not configured." } },
      { status: 500 },
    )
  }

  try {
    const res = await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: "subscribed",
    })

    return NextResponse.json({ res })
  } catch (error) {
    if (isMailchimpApiError(error)) {
      let body: unknown
      try {
        body = JSON.parse(error.response.text)
      } catch {
        body = { title: "Mailchimp Error", detail: error.response.text }
      }

      const status =
        typeof body === "object" && body !== null && "status" in body && typeof (body as { status?: unknown }).status === "number"
          ? (body as { status: number }).status
          : 400

      return NextResponse.json({ error: body }, { status })
    }

    const detail = error instanceof Error ? error.message : "Something went wrong. Please try again."
    return NextResponse.json({ error: { title: "Request Failed", detail } }, { status: 500 })
  }
}
