import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../resources/frontpage.css";
import animationData from "../assests/frontPageAnimation.json";
import Lottie from "lottie-react";

function FrontPage() {
  return (
    <div className="landing-page">
      <header className="site-header">
        <h1 className="logo">Expenzo</h1>
      </header>

      {/* Hero Section */}
      <motion.section
        className="homepage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="homepage-content">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Track expenses at the speed of simplicity
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            All-in-one solution to manage your daily expenses, analyze spending
            habits, and stay on top of your financial goals.
          </motion.p>
          <motion.div
            className="home-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline">
              Register
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="homepage-image"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      </motion.section>

      {/* Stats */}
      <motion.section
        className="stats"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.section>

      {/* Features */}
      <motion.section
        className="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Why Choose Expenzo?</h2>
        <div className="features-list">
          {["Smart Insights", "Secure", "Mobile Friendly"].map((title, i) => (
            <motion.div
              key={i}
              className="feature"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3>
                {["📊", "🔒", "📱"][i]} {title}
              </h3>
              <p>
                {
                  {
                    "Smart Insights":
                      "Understand your spending behavior with smart visual dashboards.",
                    Secure:
                      "Military-grade encryption to keep your financial data safe.",
                    "Mobile Friendly":
                      "Track expenses anytime, anywhere from your phone.",
                  }[title]
                }
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>What Users Say</h2>
        <div className="testimonial-list">
          <motion.div className="testimonial" whileHover={{ scale: 1.03 }}>
            <p>"Expenzo helped me save over ₹20,000 in 2 months!"</p>
            <span>- Priya, Freelancer</span>
          </motion.div>
          <motion.div className="testimonial" whileHover={{ scale: 1.03 }}>
            <p>"Expense sharing with my roommates has never been this easy!"</p>
            <span>- Arjun, Student</span>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="cta"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Ready to take control of your finances?</h2>
        <Link to="/register" className="btn">
          Get Started Now
        </Link>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="footer-top">
          <p>&copy; 2025 Expenzo. All rights reserved.</p>
          <p>Made by Aakash with ❤️</p>
        </div>

        <div className="footer-logo-banner">
          <h1>Expenzo</h1>
        </div>
      </motion.footer>
    </div>
  );
}

export default FrontPage;
