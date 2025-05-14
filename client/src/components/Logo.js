// src/components/Logo.jsx
import React from 'react'

export default function Logo() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: 'Poppins, sans-serif',
    },
    logo: {
      width: '220px',    // adjust as needed
      height: 'auto',
    },
    slogan: {
      margin: 0,
      fontSize: '1rem',
      fontWeight: 400,
      color: '#1A1A1A',
      letterSpacing: '0.5px',
    },
  }

  return (
    <div style={styles.container}>
      {/* pulls from public/rebanker-logo.png */}
      <img
        src="/rebanker-logo.png"
        alt="ReBanker logo"
        style={styles.logo}
      />

      
    </div>
  )
}
