import React from "react";
import "./styles.css";
import toy23 from "../../assets/toys23.png";

const WhyChooseUs = () => {
  return (
    <section className="about-us">

      <h1 className="about-heading" id="about-us">ABOUT US</h1>

      <div className="about-container">

        <div className="about-image">
          <img src={toy23} alt="ToyHub interior" />
        </div>

        <div className="about-content">
          <p className="about-text">
            In a world filled with noisy, disposable playthings, ToyHub stands
            as a breath of fresh air. We don’t just sell toys; we provide the
            vessels of imagination that define a child’s early years.
          </p>

          <p className="about-text">
            By merging a sophisticated, modern aesthetic with the rugged
            durability needed for real-world play, ToyHub is where style meets
            the sidewalk. Every toy we provide is designed to inspire
            creativity, exploration, and joyful childhood memories.
          </p>

          <div className="quote-box">
            <p>
              “The ToyHub Standard: Beautiful design, durable play, and
              imagination without limits.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;