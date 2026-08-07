"use client"

import { useState, type SubmitEvent } from "react"
import { CheckCircle2, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

type Status = "idle" | "loading" | "success" | "error"

/** Mailchimp's `title`/`detail` are accurate but not written for end users — translate the common cases. */
function toFriendlyMessage(error: { title?: string; detail?: string } | undefined) {
  const title = error?.title ?? ""
  const detail = error?.detail ?? ""

  if (title === "Member Exists") {
    return "This email address is already subscribed to our newsletter."
  }
  if (title === "Invalid Resource" || /looks fake or invalid/i.test(detail)) {
    return "That email address doesn't look valid — please double-check it."
  }
  if (title === "Forgotten Email Not Subscribed" || /permanently deleted/i.test(detail)) {
    return "This email address can't be re-subscribed automatically. Please contact us directly."
  }

  return detail || title || "Something went wrong. Please try again."
}

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setError(null)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        const message =
          typeof data?.error === "string" ? data.error : toFriendlyMessage(data?.error)
        throw new Error(message)
      }

      setStatus("success")
      setEmail("")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="mt-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-body-s text-white">
        <CheckCircle2 className="size-4 text-success" />
        Subscription successful — check your inbox to confirm.
      </div>
    )
  }

  return (
    <form className="mt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3">
        <Mail className="size-4 text-blue-100" />
        <input
          type="email"
          required
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          className="w-full bg-transparent text-body-s text-white placeholder:text-blue-300 focus:outline-none"
        />
      </div>
      {status === "error" && <p className="text-caption text-alert">{error}</p>}
      <Button type="submit" variant="white" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}
