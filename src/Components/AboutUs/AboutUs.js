import React from "react";
import "./AboutUs.css";
import story1 from "../Home/Images/Frame 304.png";
import story2 from "../Home/Images/Frame 304 (2).png";
import story3 from "../Home/Images/Frame 304 (3).png";
import Download from "../Home/Download";
import Footer from "../Home/Footer";

function AboutUs() {
  return (
    <>
      <div className="aboutUs__hero">
        <div className="aboutUs__head">
          <h5>About us</h5>
        </div>
        <div className="aboutUs__title">Our Story</div>
      </div>

      <div className="aboutUs__body">
        <div className="aboutUs__body-1 column__reverse">
          <img src={story1} alt="story1"></img>
          <div className="aboutUs__body-1-text">
            <h2>Our Story</h2>
            <p>
              At Credbevy, we believe that our people are the foundation of our
              success. We are committed to creating a culture that fosters
              innovation, collaboration, and growth for our employees, as well
              as exceptional service for our customers.
              <br />
              <br /> We value integrity, empathy, and inclusivity in all that we
              do. We strive to be transparent and accountable, and to build
              trusting relationships with our team, our partners, and our
              customers. We encourage open communication, constructive feedback,
              and continuous learning.
              <br />
              <br /> We embrace diversity and promote equality, both within our
              company and in the communities we serve. We believe in giving back
              and making a positive impact through social responsibility
              initiatives.
            </p>
          </div>
        </div>
        <div className="aboutUs__body-1 column">
          <div className="aboutUs__body-1-text">
            <h2>Our Mission</h2>
            <p>
              Our mission at CredBevy is to provide access to affordable loans
              that help people achieve their financial goals. We believe that
              everyone deserves a fair chance to pursue their dreams, and we are
              committed to breaking down barriers and creating opportunities for
              all. <br />
              <br /> We strive to be a trusted partner to our customers,
              offering personalized service and innovative solutions that meet
              their unique needs. We are dedicated to transparency, honesty, and
              responsible lending practices, and we prioritize the financial
              wellness and success of our customers above all else. <br />{" "}
              <br /> We are driven by a passion for social impact, and we
              believe that by democratizing access to loans, we can help create
              a more equitable and inclusive society. We are committed to giving
              back to the communities we serve and making a positive difference
              in the world.
            </p>
          </div>
          <img src={story2} alt="story1"></img>
        </div>
        <div className="aboutUs__body-1  column__reverse ">
          <img src={story3} alt="story1"></img>
          <div className="aboutUs__body-1-text">
            <h2>Our Vision</h2>
            <p>
              {" "}
              Our vision at CredBevy is to create a world where access to
              affordable loans is universal and equitable. We believe that
              financial security is a basic human right, and we are committed to
              breaking down barriers and creating opportunities for all.<br /><br /> We
              envision a lending industry that prioritizes the needs of its
              customers, is built on transparency and trust, and fosters
              financial wellness and success. We see a future where technology
              is harnessed to make the lending process faster, more efficient,
              and more accessible, while also preserving the human touch and
              personalized service that our customers deserve.<br /><br /> We aspire to be a
              leader in the lending industry, setting the standard for
              responsible lending practices, social impact, and
              customer-centricity. We see ourselves as a trusted partner to our
              customers, helping them navigate the complexities of the financial
              world and achieve their goals.{" "}
            </p>
          </div>
        </div>
      </div>

      <Download />
      <Footer />
    </>
  );
}

export default AboutUs;
