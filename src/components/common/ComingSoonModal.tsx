"use client"

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
   maxWidth: '420px',
   width: '100%',
   position: 'relative',
   boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
   textAlign: 'center',
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

interface ComingSoonModalProps {
   isOpen: boolean
   onClose: () => void
}

const ComingSoonModal = ({ isOpen, onClose }: ComingSoonModalProps) => {
   if (!isOpen) return null

   const handleOverlayClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose()
   }

   return (
      <div style={overlayStyle} onClick={handleOverlayClick}>
         <div style={modalStyle}>
            <button style={closeBtnStyle} onClick={onClose} aria-label="Close">
               &times;
            </button>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📱</div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>
               Coming Soon
            </h3>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
               The Guidera app is currently being finalized and will be available on the App Store and Google Play very soon. Check back in a few days!
            </p>
            <button
               onClick={onClose}
               style={{
                  width: '100%',
                  padding: '14px 24px',
                  background: '#000',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: '60px',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
               }}
               onMouseEnter={(e) => { e.currentTarget.style.background = '#333' }}
               onMouseLeave={(e) => { e.currentTarget.style.background = '#000' }}
            >
               Got it
            </button>
         </div>
      </div>
   )
}

export default ComingSoonModal
