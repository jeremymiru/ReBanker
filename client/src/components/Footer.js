import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} ReBanker. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#0E2431',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '2rem'
  }
};

export default Footer;
