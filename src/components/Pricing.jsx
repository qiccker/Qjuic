import { useNavigate, useLocation } from 'react-router-dom';
import { pricingPlans } from '../data/content';

export default function Pricing() {
  const navigate = useNavigate();
  const location = useLocation();

  const goContact = () => {
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-header-left">
            <span className="mono-label">Investment</span>
            <h2 className="display-lg">
              Website Making <span className="accent-text">Charges</span>
            </h2>
          </div>
          <div className="section-header-right">
            Transparent Pricing<br />No Hidden Fees
          </div>
        </div>
        <div className="pricing-grid stagger-children">
          {pricingPlans.map((plan, i) => (
            <div className={`pricing-card animate-on-scroll ${plan.featured ? 'featured' : ''}`} key={i}>
              {plan.featured && <div className="pricing-badge">Most Popular</div>}
              <span className="pricing-tier">{plan.tier}</span>
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-desc">{plan.desc}</p>
              <div className="pricing-amount">
                <span className="pricing-currency">{plan.currency}</span>
                <span className="pricing-price">{plan.price}</span>
                <span className="pricing-period">/ {plan.period}</span>
              </div>
              <div className="pricing-features">
                {plan.features.map((feature, j) => (
                  <div className="pricing-feature" key={j}>
                    <span className="pricing-check">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              <button
                className={plan.featured ? 'btn-juice' : 'btn-ghost'}
                onClick={goContact}
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
