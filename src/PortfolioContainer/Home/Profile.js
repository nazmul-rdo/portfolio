import Typical from "react-typical"
import React from "react"
import "./Profile.css"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
                <a href="https://www.facebook.com/nazmulhossain.me">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/hossionmdnazmul/">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC66xNR9gjr0ye4eBwmxUN3w">
                  <i className="fa fa-youtube-square"></i>
                </a>
                <a href="https://twitter.com/nazmulrdo">
                  <i className="fa fa-twitter"></i>
                </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
            
              
              hello, I'M 
            </span>
          </div>

          <div className="profile-details-role">
            <span>
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                      "Nazmul Hossain ", 1000,
                      "Full Stack Developer", 1000,
                      "MERN Stack Dev.", 1000,
                      "Cross Platform ", 1000,
                      "Node js Developer ", 1000
                    ]}                 
                />
              </h1>
              <span className="profile-role-tagline">
                Knock of building application with front and back end operations.    
              </span>
            </span>
          </div>
          <div className="profile-optins">
                <button className="btn primary-btn">
                    
                    Hire Me
                </button>
                <a href="Nazmul_cvpdf.pdf" download='Nazmul Nazmul_cvpdf.pdf'>
                    <button className="btn highlighted-btn">Get Resume</button>
                </a>
          </div>
        </div>
        <div className="profile-picture">
           <div className="profile-picture-background">
            
            </div>
        </div>
      </div>
    </div>
  );
}
