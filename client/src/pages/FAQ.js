import React from 'react';

function FAQ() {
  return (
    <section style={styles.container}>
      <h1>Frequently Asked Questions</h1>
      <ul>
        <li><strong>Q:</strong> How do I get started?</li>
        <li><strong>A:</strong> Simply create an account and start posting or browsing items.</li>
        <li><strong>Q:</strong> Is ReBanker free to use?</li>
        <li><strong>A:</strong> Yes! Listing your items is free.</li>
      </ul>
    </section>
  );
}

const styles = {
  container: {
    padding: '2rem'
  }
};

export default FAQ;
