import React, { useState } from "react";
import { initializeApp } from "../Firebase";
import { getFirestore, collection, addDoc } from "../Firebase";
import { getAuth, createUserWithEmailAndPassword } from "../Firebase";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

// Firebase configuration (replace with your own)
const firebaseConfig = {
  apiKey: "AIzaSyDU_SwcOt-c12UdOOryKA_4-q2H9h2ZOLQ",
  authDomain: "flyfair-c84d8.firebaseapp.com",
  projectId: "flyfair-c84d8",
  storageBucket: "flyfair-c84d8.firebasestorage.app",
  messagingSenderId: "541344716635",
  appId: "1:541344716635:web:c0cc6e441006f563226c7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const GetListed = () => {
  const [formData, setFormData] = useState({
    website: "",
    companyName: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    workEmail: "",
    country: "",
    category: "",
    number: "",
    annualRevenue: "",
    password: "",
    confirmPassword: "",
    demoInterest: false,
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.workEmail,
        formData.password
      );

      // Add additional user details to Firestore
      await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        website: formData.website,
        companyName: formData.companyName,
        firstName: formData.firstName,
        lastName: formData.lastName,
        jobTitle: formData.jobTitle,
        workEmail: formData.workEmail,
        country: formData.country,
        category: formData.category,
        number: formData.number,
        annualRevenue: formData.annualRevenue,
        demoInterest: formData.demoInterest,
      });

      // Reset form or redirect
      alert("Account created successfully!");
    } catch (error) {
      setError(error.message);
      console.error("Signup error:", error);
    }
  };

  return (
    <Layout>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#e6fbff",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container my-4">
          <div className="row shadow rounded overflow-hidden">
            {/* Left Column - Benefits */}
            <div
              className="col-md-5 p-5"
              style={{ backgroundColor: "#e6fbff" }}
            >
              <div className="mb-5">
                <img
                  src="/logo.png"
                  alt="Via Review Logo"
                  className="img-fluid rounded-3"
                  style={{ maxWidth: "1500px" }}
                />
              </div>

              <div>
                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-check-circle-fill text-dark me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-2">Build credibility with reviews</h5>
                    <p className="text-muted">
                      Collect trustworthy reviews on an open, transparent
                      platform millions of consumers use.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-check-circle-fill text-dark me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-2">Strengthen your reputation</h5>
                    <p className="text-muted">
                      94% of new users that automated review invites increased
                      their TrustScore*
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-dark me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-2">Grow performance</h5>
                    <p className="text-muted">
                      Viareview stars and content are proven to convert at
                      higher rates than those of competitors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div className="col-md-7 p-5 bg-white">
              <h2 className="text-center mb-4">Create a free account</h2>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <button className="btn btn-outline-dark w-100 mb-4 d-flex align-items-center justify-content-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt="Google"
                  className="me-2"
                  style={{ width: "20px", height: "20px" }}
                />
                Log in with Google
              </button>

              <div className="text-center mb-4 position-relative">
                <hr />
                <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted">
                  or
                </span>
              </div>

              <h5 className="text-center mb-4">Sign up with email</h5>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="url"
                      name="website"
                      className="form-control"
                      placeholder="Website"
                      value={formData.website}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="companyName"
                      className="form-control"
                      placeholder="Company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="jobTitle"
                      className="form-control"
                      placeholder="Job title"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      name="workEmail"
                      className="form-control"
                      placeholder="Work Email"
                      value={formData.workEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="country"
                      className="form-control"
                      placeholder="Country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <select
                      name="category"
                      className="form-select"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Category
                      </option>
                      <option value="retail">Business Services</option>
                      <option value="technology">Events & Entertainment</option>
                      <option value="services">Health & Medical</option>
                      <option value="healthcare">Home Services</option>
                      <option value="healthcare">
                        Legal Services & Government
                      </option>
                      <option value="healthcare">
                        Public & Local Services
                      </option>
                      <option value="healthcare">Restaurants & Bars</option>
                      <option value="healthcare">Travel & Vacation</option>
                      <option value="healthcare">
                        Vehicles & Transportation
                      </option>

                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      name="number"
                      className="form-control"
                      placeholder="Number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="annualRevenue"
                      className="form-control"
                      placeholder="Annual revenue"
                      value={formData.annualRevenue}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    name="demoInterest"
                    className="form-check-input"
                    id="demoInterest"
                    checked={formData.demoInterest}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="demoInterest">
                    I'd like to receive a demo of Viareview's paid plans.
                  </label>
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      backgroundColor: "black",
                      color: "#00e1ff",
                      border: "none",
                    }}
                  >
                    Create free Account
                  </button>
                </div>

                <div className="text-start mt-3 small text-muted">
                  By submitting this form you accept our Privacy Policy and
                  agree to receive emails or calls from Viareview about our
                  products and services. You may unsubscribe at any time by
                  clicking the link at the bottom of the email or by contacting
                  us at support@viareview.com. Viareview's calls may be recorded
                  for training and quality purposes.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetListed;
