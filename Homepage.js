import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Youtube from "./Youtube";
import SupportAChildProgram from "./SupportAChild";

const images = [
  require("./images/image1.jpg"),
  require("./images/image6.jpg"),
  require("./images/image3.jpg"),
];
const content = [
  "Want to donate for youth? Then empower youth.",
  "Donate for children.",
  "Donate for women.",
];
function CallbackPopup({ isOpen, setIsOpen }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timing, setTiming] = useState("");
  const [name, setName] = useState("");

  const closePopup = () => {
    setIsOpen(false);
    setPhoneNumber("");
    setTiming("");
    setName("");
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/api/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phoneNumber, timing }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
    } else {
      alert("Failed to submit. Try again.");
    }
  };

  return (
    isOpen && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            width: "400px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <h2>Request a callback</h2>
            <button
              onClick={closePopup}
              style={{
                border: "none",
                background: "none",
                fontSize: "1.5em",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Phone number *</label>
            <input
              type="tel"
              placeholder="+1 555 123-4567"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <label>Timing options *</label>
            <select
              value={timing}
              onChange={(e) => setTiming(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            >
              <option value="">Provide the best time to call you</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>

            <label>Enter your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Request
            </button>
          </form>
        </div>
      </div>
    )
  );
}

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDonatePopup, setShowDonatePopup] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          color: " #a059de",
        }}
      >
        शहतूत संस्थान धर्मार्थ न्यास
      </header>
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontSize: "1.125rem",
        }}
      >
        📞 +91 78273 33314 | 📍 10-ए साउथ एवेन्यू मार्केट, नई दिल्ली, 110011,
        भारत | ✉️ Contact.Us@shahtoot.org
      </div>

      <div
        className="header-content-mainmenu col"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          backgroundColor: "#000",
          padding: "15px",
          color: "white",
        }}
      >
        <a
          className="normal js-w-mainmenu ul-w-mainmenu-item-link"
          href="/"
          data-type="page"
          target="_self"
          style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}
        >
          Shahtoot.org
        </a>
        <a
          className="normal js-w-mainmenu ul-w-mainmenu-item-link"
          href="/https://shahtoot.org/shahtoot_hindi"
          data-type="page"
          target="_self"
          style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}
        >
          शहतूत.संगठन
        </a>
      </div>

      <div style={{ backgroundColor: "#a059de" }}>
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
          }}
        >
          Your cart is empty 🛒
        </div>
        <section
          style={{
            textAlign: "center",
            padding: "100px 20px",
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            minHeight: "500px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            position: "relative",
          }}
        >
          <div
            className="ul-slider-item-overlay"
            style={{
              padding: "12px",
              position: "absolute",
              top: "370px",
              left: "30px",
              width: "auto",
              height: "auto",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "8px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            }}
          >
            <div
              className="ul-slider-item-overlay-edit g-theme-block-2"
              style={{
                pointerEvents: "none",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                position: "absolute",
                opacity: "0.5",
              }}
              data-theme-block='{"desktop":"g-theme-block-2", "phone":"g-theme-block-2","tablet":"g-theme-block-2"}'
            />
            <div
              className="ul-slider-item-text g-theme-block-2"
              style={{
                textAlign: "center",
                margin: "24px",
              }}
              itemprop="description"
              data-theme-block='{"desktop":"g-theme-block-2", "phone":"g-theme-block-2","tablet":"g-theme-block-2"}'
            >
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {content[currentImage]}
                </span>
              </p>
            </div>
            <div
              className="ul-slider-item-btn"
              style={{
                marginTop: "12px",
                marginLeft: "24px",
                marginRight: "24px",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              <a
                className="ul-w-btn-el ul-w-button1 middle"
                target="undefined"
                href="https://www.instamojo.com/ShahtootNGO/donation-to-shahtoot-foundation-charitable-t/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Donate for skill Classes for Kids
              </a>
            </div>
          </div>
        </section>

        <section style={{ textAlign: "center" }}>
          <div>
            <SupportAChildProgram />
          </div>
        </section>

        <section style={{ textAlign: "center" }}></section>
        <section
          style={{
            minHeight: "100vh",
            color: "Black",
            padding: "40px",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          {/* About us and what we do*/}
          <h2 style={{ fontSize: "1.875rem", fontWeight: "600" }}>About Us</h2>
          <div
            style={{
              marginTop: "16px",
              fontSize: "1.125rem",
              fontStyle: "italic",
            }}
          >
            <p>
              △ Registered in Feb 2017 to provide formal entity to charity work
              of decade
            </p>
            <p>△ Started by Mrs. Kamlesh and Mr. Subhash Chandra</p>
            <p>
              △ Based out of Delhi with volunteers spread out in rest of India
            </p>
            <p>
              △ Uses free technologies and volunteers for minimizing
              administrative cost
            </p>
          </div>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "600" }}>
            What we do
          </h2>
          <div
            style={{
              marginTop: "16px",
              fontSize: "1.125rem",
              fontStyle: "italic",
            }}
          >
            <p>△ Connecting people to empower all sections of society</p>
            <p>
              △ Focus on sponsoring a teacher to conduct classes for skill
              development
            </p>
            <p>△ Share volunteering opportunities</p>
            <p>△ Provide support to volunteers and donors</p>
          </div>
        </section>
        <section style={{ marginTop: "40px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "600" }}>Our Work</h2>
          <div>
            <Youtube />
          </div>
        </section>
        {/* Social Media Links */}
        <section style={{ marginTop: "40px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "600" }}>
            Follow Us on Social Networks
          </h2>
          <div
            style={{
              marginTop: "16px",
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              fontSize: "2rem",
            }}
          >
            <FaTwitter />
            <FaFacebook />
            <FaLinkedin />
            <FaYoutube />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </section>

        <button
          onClick={() => setShowDonatePopup(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#ff9800",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer",
            border: "none",
          }}
        >
          Donate
        </button>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#a059de",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <main
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "50px",
            }}
          >
            <section
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                width: "50%",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Join Us</h2>
              <form style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  style={{
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  style={{
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="tel"
                  placeholder="+1(234)-567-89-90"
                  required
                  style={{
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <textarea
                  placeholder="Enter your message here..."
                  required
                  style={{
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    minHeight: "100px",
                  }}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#9B59B6",
                    color: "#fff",
                    padding: "10px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Send
                </button>
              </form>
            </section>

            <button
              onClick={() => setIsOpen(true)}
              style={{
                position: "fixed",
                bottom: "20px",
                left: "20px",
                backgroundColor: "#28a745",
                color: "#fff",
                padding: "15px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              📞
            </button>
            <CallbackPopup isOpen={isOpen} setIsOpen={setIsOpen} />
          </main>
        </div>

        {showDonatePopup && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                color: "black",
                width: "300px",
              }}
            >
              <h2>Donate</h2>
              <input
                type="text"
                placeholder="Name"
                style={{ width: "100%", padding: "8px", margin: "8px 0" }}
              />
              <input
                type="email"
                placeholder="Email"
                style={{ width: "100%", padding: "8px", margin: "8px 0" }}
              />
              <input
                type="number"
                placeholder="Amount (INR)"
                style={{ width: "100%", padding: "8px", margin: "8px 0" }}
              />
              <button
                style={{
                  backgroundColor: "#6b46c1",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "4px",
                  marginTop: "16px",
                  cursor: "pointer",
                }}
              >
                Donate Now
              </button>
              <button
                onClick={() => setShowDonatePopup(false)}
                style={{
                  display: "block",
                  marginTop: "10px",
                  color: "red",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
