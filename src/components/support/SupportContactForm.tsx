"use client"

import { FormEvent, useState, type CSSProperties } from "react"

const BRAND = "#3FC39E"

type Status = "idle" | "sending" | "success" | "error"

const SupportContactForm = () => {
   const [status, setStatus] = useState<Status>("idle")
   const [errorMessage, setErrorMessage] = useState("")

   const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setStatus("sending")
      setErrorMessage("")

      const form = event.currentTarget
      const formData = new FormData(form)
      const payload = {
         name: String(formData.get("name") || "").trim(),
         email: String(formData.get("email") || "").trim(),
         message: String(formData.get("message") || "").trim(),
      }

      try {
         const res = await fetch("/api/support", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(payload),
         })
         const data = (await res.json().catch(() => ({}))) as { error?: string }

         if (!res.ok) {
            setStatus("error")
            setErrorMessage(data.error || "Something went wrong. Please email hello@guidera.one instead.")
            return
         }

         setStatus("success")
         form.reset()
      } catch {
         setStatus("error")
         setErrorMessage("Network error. Please email hello@guidera.one instead.")
      }
   }

   if (status === "success") {
      return (
         <div
            role="status"
            style={{
               background: "#fff",
               border: `1px solid ${BRAND}`,
               borderRadius: "12px",
               padding: "20px",
            }}
         >
            <p style={{ margin: 0, fontWeight: 700, color: "#111" }}>Message sent</p>
            <p style={{ margin: "8px 0 0", color: "#555" }}>
               Thanks — Cyriac from Guidera will reply from{" "}
               <a href="mailto:hello@guidera.one" style={{ color: BRAND, fontWeight: 600 }}>
                  hello@guidera.one
               </a>{" "}
               within 1–2 business days.
            </p>
         </div>
      )
   }

   const fieldStyle: CSSProperties = {
      width: "100%",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "12px 14px",
      fontSize: "16px",
      outline: "none",
      background: "#fff",
   }

   const labelStyle: CSSProperties = {
      display: "block",
      fontSize: "14px",
      fontWeight: 600,
      color: "#333",
      marginBottom: "6px",
   }

   return (
      <form onSubmit={onSubmit} noValidate style={{ display: "grid", gap: "14px" }}>
         <div>
            <label htmlFor="support-name" style={labelStyle}>
               Name
            </label>
            <input
               id="support-name"
               name="name"
               type="text"
               required
               autoComplete="name"
               maxLength={120}
               style={fieldStyle}
            />
         </div>
         <div>
            <label htmlFor="support-email" style={labelStyle}>
               Email
            </label>
            <input
               id="support-email"
               name="email"
               type="email"
               required
               autoComplete="email"
               maxLength={200}
               style={fieldStyle}
            />
         </div>
         <div>
            <label htmlFor="support-message" style={labelStyle}>
               Message
            </label>
            <textarea
               id="support-message"
               name="message"
               required
               rows={5}
               maxLength={4000}
               style={{ ...fieldStyle, resize: "vertical", minHeight: "120px" }}
            />
         </div>

         {status === "error" && (
            <p role="alert" style={{ margin: 0, color: "#b42318", fontSize: "14px" }}>
               {errorMessage}{" "}
               Or email{" "}
               <a href="mailto:hello@guidera.one" style={{ color: BRAND, fontWeight: 600 }}>
                  hello@guidera.one
               </a>
               .
            </p>
         )}

         <button
            type="submit"
            disabled={status === "sending"}
            style={{
               justifySelf: "start",
               background: "#111",
               color: "#fff",
               border: "none",
               borderRadius: "12px",
               padding: "12px 22px",
               fontSize: "15px",
               fontWeight: 700,
               cursor: status === "sending" ? "wait" : "pointer",
               opacity: status === "sending" ? 0.7 : 1,
            }}
         >
            {status === "sending" ? "Sending…" : "Send message"}
         </button>
      </form>
   )
}

export default SupportContactForm
