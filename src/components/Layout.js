import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header style={{ backgroundColor: '#15191d' }}>
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container">
            {/* Logo */}
            <a className="navbar-brand d-flex align-items-center text-decoration-none" href="/">
              <span className="text-white fs-4 fw-bold">Via</span>
              <span style={{ color: '#00e1ff' }} className="fs-4 fw-bold">review</span>
            </a>

            {/* Mobile Toggle */}
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
              style={{ borderColor: '#00e1ff' }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Nav Links */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <a className="nav-link" href="/about" style={{ color: '#00e1ff' }}>About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact" style={{ color: '#00e1ff' }}>Contact Us</a>
                </li>
                <li className="nav-item">
                  <a 
                    className="nav-link btn px-3 py-2 mx-2" 
                    href="/get-listed" 
                    style={{ backgroundColor: '#00e1ff', color: 'black' }}
                  >
                    Get Listed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog" style={{ color: '#00e1ff' }}>Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup" style={{ color: '#00e1ff' }}>Signup</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login" style={{ color: '#00e1ff' }}>Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1">
        {children}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#00e1ff' }} className="py-5">
        <div className="container">
          <div className="row gy-4">
            {/* Resources */}
            <div className="col-md-3 col-sm-6">
              <h5 className="fw-bold mb-3">Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/write-review" className="text-dark text-decoration-none">Write a Review</a></li>
                <li className="mb-2"><a href="/support" className="text-dark text-decoration-none">Support</a></li>
                <li className="mb-2"><a href="/faq" className="text-dark text-decoration-none">FAQ</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-md-3 col-sm-6">
              <h5 className="fw-bold mb-3">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/about" className="text-dark text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="/contact" className="text-dark text-decoration-none">Contact Us</a></li>
                <li className="mb-2"><a href="/news" className="text-dark text-decoration-none">News</a></li>
              </ul>
            </div>

            {/* Business Owners */}
            <div className="col-md-3 col-sm-6">
              <h5 className="fw-bold mb-3">Business Owners</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/" className="text-dark text-decoration-none">Home</a></li>
                <li className="mb-2"><a href="/claim-business" className="text-dark text-decoration-none">Claim Your Business</a></li>
                <li className="mb-2"><a href="/business-support" className="text-dark text-decoration-none">Business Support</a></li>
              </ul>
            </div>

            {/* Follow us */}
            <div className="col-md-3 col-sm-6">
              <h5 className="fw-bold mb-3">Follow us:</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-dark">
                  <i className="bi bi-instagram fs-4"></i>
                </a>
                <a href="#" className="text-dark">
                  <i className="bi bi-facebook fs-4"></i>
                </a>
                <a href="#" className="text-dark">
                  <i className="bi bi-twitter-x fs-4"></i>
                </a>
                <a href="#" className="text-dark">
                  <i className="bi bi-pinterest fs-4"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-4">
            <p className="mb-0">© 2024 ViaReview.com. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;