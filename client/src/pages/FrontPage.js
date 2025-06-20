import React from 'react';
import { Link } from 'react-router-dom';
import '../resources/frontpage.css';

function FrontPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="homepage">
        <div className="homepage-content">
          <h1>Track expenses at the speed of simplicity</h1>
          <p>All-in-one solution to manage your daily expenses, analyze spending habits, and stay on top of your financial goals.</p>
          <div className="home-buttons">
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn btn-outline">Register</Link>
          </div>
        </div>
        <div className="homepage-image">
          <img src="/hero.png" alt="dashboard preview" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div>
          <h2>500+ Users</h2>
          <p>trust Expenzo to manage their personal & team finances</p>
        </div>
        <div>
          <h2>₹1Cr+</h2>
          <p>expenses tracked monthly</p>
        </div>
        <div>
          <h2>98%</h2>
          <p>positive feedback</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Expenzo?</h2>
        <div className="features-list">
          <div className="feature">
            <h3>📊 Smart Insights</h3>
            <p>Understand your spending behavior with smart visual dashboards.</p>
          </div>
          <div className="feature">
            <h3>🔒 Secure</h3>
            <p>Military-grade encryption to keep your financial data safe.</p>
          </div>
          <div className="feature">
            <h3>📱 Mobile Friendly</h3>
            <p>Track expenses anytime, anywhere from your phone.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"Expenzo helped me save over ₹20,000 in 2 months!"</p>
            <span>- Priya, Freelancer</span>
          </div>
          <div className="testimonial">
            <p>"Expense sharing with my roommates has never been this easy!"</p>
            <span>- Arjun, Student</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to take control of your finances?</h2>
        <Link to="/register" className="btn">Get Started Now</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Expenzo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FrontPage;
