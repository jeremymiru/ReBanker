import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/#home" style={styles.link}>Home</a></li>
            <li><a href="/#about" style={styles.link}>About</a></li>
            <li><a href="/#how-it-works" style={styles.link}>How It works</a></li>
            <li><a href="/value-added-services" style={styles.link}>Value added Services</a></li>
            <li><a href="/#contact" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Contact</h4>
          <p>Nairobi, Kenya</p>
          <p>@peter@co.ke</p>
          <p>+254 (0) 700 000 000</p>
        </div>

        {/* Follow */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Follow</h4>
          <div style={styles.social}>
            <a href="https://twitter.com" style={styles.icon} target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
            <a href="https://facebook.com" style={styles.icon} target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
            <a href="https://instagram.com" style={styles.icon} target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
            <a href="https://youtube.com" style={styles.icon} target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
          </div>
        </div>
      </div>

      {/* Bottom Legal */}
      <div style={styles.bottom}>
        <p>© 2025 ReBanker. All rights reserved.</p>
        <ul style={styles.legalList}>
          <li><a href="/privacy-policy" style={styles.link}>Privacy Policy</a></li>
          <li><a href="/terms-of-service" style={styles.link}>Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#0E2431',
    color: '#fff',
    padding: '2rem 1rem',
    marginTop: 'auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '2rem',
  },
  column: { flex: '1 1 200px', minWidth: '200px' },
  heading: { fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 'bold' },
  list: { listStyle: 'none', padding: 0, margin: 0 },
  link: {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
    transition: 'color 0.3s',
  },
  social: { display: 'flex', gap: '1rem', fontSize: '1.5rem', marginTop: '0.5rem' },
  icon: { color: '#fff', transition: 'color 0.3s' },
  bottom: {
    borderTop: '1px solid #444',
    marginTop: '2rem',
    paddingTop: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  legalList: { listStyle: 'none', padding: 0, margin: '0.5rem 0 0', display: 'inline-flex', gap: '1rem' },
};
