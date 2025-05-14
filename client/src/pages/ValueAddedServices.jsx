import React, { useState, useEffect } from 'react';
import {
  FaBuilding,
  FaBriefcase,
  FaSeedling
} from 'react-icons/fa';
import './ValueAddedServices.css';

export default function ValueAddedServices() {
  // scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Quotation requested:
Name: ${form.fullname}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company}
Message: ${form.message}`);
    setShowForm(false);
  };

  const categories = [
    {
      icon: FaBuilding,
      title: '1. Corporations',
      subtitle: 'Enterprise Excellence',
      features: [
        'Custom-designed website with advanced UI/UX',
        'Multi-language support',
        'Scalable infrastructure for high traffic',
        'API integration with ERP, CRM, and other systems',
        'Advanced security (firewalls, SSL, DDoS protection)',
        'E-commerce functionality with custom plugins',
        'Real-time analytics and reporting dashboards',
        '24/7 technical support',
        'Dedicated project manager'
      ],
      benefits:
        'Enhanced global reach; seamless system integration; high-level security; personalized customer experience.',
      pricing:
        'Development from 150,000 | Management 40,000–50,000'
    },
    {
      icon: FaBriefcase,
      title: '2. Big Businesses',
      subtitle: 'Business Expansion Pro',
      features: [
        'Custom website design with mobile optimization',
        'CMS integration (WordPress, Joomla, Drupal)',
        'E-commerce solutions',
        'Search Engine Optimization (SEO)',
        'Email marketing & newsletter integration',
        'Basic analytics & reporting tools',
        'Priority customer support'
      ],
      benefits:
        'Increased visibility; improved online sales; cost-effective management.',
      pricing:
        'Development from 80,000 | Management 30,000–40,000'
    },
    {
      icon: FaSeedling,
      title: '3. SMEs',
      subtitle: 'Startup Boost',
      features: [
        'Pre-designed or semi-custom website templates',
        'Mobile-friendly design',
        'Basic SEO setup',
        'Social media integration',
        'Contact form & map integration'
      ],
      benefits:
        'Quick launch; improved online presence; simplified management.',
      pricing:
        'Development from 50,000 | Management 15,000–25,000'
    }
  ];

  const addons = [
    { name: 'Custom Branding', price: '10,000' },
    { name: 'Advanced SEO Services', price: '15,000 / month' },
    { name: 'Social Media Management', price: '10,000 / month' },
    { name: 'Content Writing', price: '5,000 / page' }
  ];

  return (
    <section className="vas-container">
      <h1 className="vas-title">Value Added Services</h1>

      <div className="vas-grid">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div key={i} className="vas-card">
              <Icon className="vas-icon" />
              <h2 className="vas-card-title">{cat.title}</h2>
              <h3 className="vas-card-sub">{cat.subtitle}</h3>
              <ul className="vas-features">
                {cat.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <p className="vas-benefits">
                <strong>Benefits:</strong> {cat.benefits}
              </p>
              <p className="vas-pricing">
                <strong>Pricing:</strong> {cat.pricing}
              </p>
            </div>
          );
        })}
      </div>

      <div className="vas-addons">
        <h2>Add-Ons</h2>
        <ul className="vas-features">
          {addons.map((a,i) => (
            <li key={i}>
              {a.name}: {a.price}
            </li>
          ))}
        </ul>
      </div>

      <div className="send-quote-btn-container">
        <button
          className="send-quote-button"
          onClick={() => setShowForm(true)}
        >
          Send a Quotation
        </button>
      </div>

      {showForm && (
        <div className="quote-modal">
          <div className="quote-form-container">
            <button
              className="close-button"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
            <h2 className="quote-title">Get a Quote</h2>
            <p className="quote-subtitle">
              Interested in one of our packages? Send us a quick message and we’ll be in touch.
            </p>
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your contact number"
                />
              </div>
              <div className="form-group">
                <label>Company (Optional)</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your organization"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any details or questions"
                  rows="4"
                />
              </div>
              <button type="submit" className="quote-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
