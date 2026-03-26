"use client"
import { useState } from "react"

const overlayStyle: React.CSSProperties = {
   position: 'fixed',
   top: 0,
   left: 0,
   width: '100%',
   height: '100%',
   background: 'rgba(0, 0, 0, 0.5)',
   zIndex: 9999,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   padding: '20px',
}

const modalStyle: React.CSSProperties = {
   background: '#fff',
   borderRadius: '20px',
   padding: '40px 36px',
   maxWidth: '480px',
   width: '100%',
   position: 'relative',
   boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
}

const closeBtnStyle: React.CSSProperties = {
   position: 'absolute',
   top: '16px',
   right: '20px',
   background: 'none',
   border: 'none',
   fontSize: '24px',
   cursor: 'pointer',
   color: '#666',
   lineHeight: 1,
}

const labelStyle: React.CSSProperties = {
   display: 'block',
   fontSize: '14px',
   fontWeight: 600,
   color: '#333',
   marginBottom: '6px',
   marginTop: '16px',
}

const inputStyle: React.CSSProperties = {
   width: '100%',
   padding: '12px 16px',
   borderRadius: '10px',
   border: '1px solid #ddd',
   fontSize: '15px',
   outline: 'none',
   transition: 'border-color 0.2s ease',
}

const textareaStyle: React.CSSProperties = {
   ...inputStyle,
   minHeight: '100px',
   resize: 'vertical' as const,
}

const submitBtnStyle: React.CSSProperties = {
   width: '100%',
   padding: '14px 24px',
   background: '#000',
   color: '#fff',
   fontSize: '16px',
   fontWeight: 600,
   border: 'none',
   borderRadius: '60px',
   cursor: 'pointer',
   marginTop: '24px',
   transition: 'background 0.2s ease, transform 0.2s ease',
}

interface WaitlistModalProps {
   isOpen: boolean
   onClose: () => void
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
   const [submitted, setSubmitted] = useState(false)

   if (!isOpen) return null

   const handleOverlayClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
         onClose()
         setSubmitted(false)
      }
   }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.currentTarget
      const formData = new FormData(form)

      try {
         await fetch("https://submit-form.com/XJSszqDm", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: JSON.stringify({
               name: formData.get("name"),
               email: formData.get("email"),
               message: formData.get("message"),
            }),
         })
         setSubmitted(true)
      } catch {
         setSubmitted(true)
      }
   }

   const handleClose = () => {
      onClose()
      setSubmitted(false)
   }

   return (
      <div style={overlayStyle} onClick={handleOverlayClick}>
         <div style={modalStyle}>
            <button style={closeBtnStyle} onClick={handleClose} aria-label="Close">
               &times;
            </button>

            {submitted ? (
               <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>
                     You&apos;re on the list!
                  </h3>
                  <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.5 }}>
                     Thanks for joining the Guidera waitlist. We&apos;ll be in touch soon with early access details.
                  </p>
                  <button
                     style={{ ...submitBtnStyle, marginTop: '20px' }}
                     onClick={handleClose}
                  >
                     Done
                  </button>
               </div>
            ) : (
               <>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '4px', textAlign: 'center' }}>
                     Join the Waitlist
                  </h3>
                  <p style={{ color: '#666', fontSize: '15px', textAlign: 'center', marginBottom: '8px' }}>
                     Be among the first to experience Guidera.
                  </p>

                  <form onSubmit={handleSubmit}>
                     <label style={labelStyle} htmlFor="waitlist-name">Name</label>
                     <input
                        style={inputStyle}
                        type="text"
                        id="waitlist-name"
                        name="name"
                        placeholder="Your full name"
                        required
                        onFocus={(e) => e.currentTarget.style.borderColor = '#3FC39E'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                     />

                     <label style={labelStyle} htmlFor="waitlist-email">Email</label>
                     <input
                        style={inputStyle}
                        type="email"
                        id="waitlist-email"
                        name="email"
                        placeholder="you@email.com"
                        required
                        onFocus={(e) => e.currentTarget.style.borderColor = '#3FC39E'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                     />

                     <label style={labelStyle} htmlFor="waitlist-message">Message (optional)</label>
                     <textarea
                        style={textareaStyle}
                        id="waitlist-message"
                        name="message"
                        placeholder="Tell us about your travel style or what excites you about Guidera..."
                        onFocus={(e) => e.currentTarget.style.borderColor = '#3FC39E'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                     />

                     <button
                        type="submit"
                        style={submitBtnStyle}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.background = '#333'
                           e.currentTarget.style.transform = 'translateY(-1px)'
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.background = '#000'
                           e.currentTarget.style.transform = 'translateY(0)'
                        }}
                     >
                        Join the Waitlist
                     </button>
                  </form>
               </>
            )}
         </div>
      </div>
   )
}

export default WaitlistModal
