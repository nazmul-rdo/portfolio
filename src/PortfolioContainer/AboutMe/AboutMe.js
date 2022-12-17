import React from "react"
import "./AboutMe.css"

function AboutMe() {
  return (
       <>
        <section id="Aboutus">
          <div class="container">
            <div class="about-contents">

              <div class="aboutImage">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLme7i3NDzY-BOBsBDHApeIHd9qQYR2DANTQ&usqp=CAUss"
                alt="no image" 
                />
              </div>
              <div class="aboutDetails">

                <div class="tiltedesc">
                  <h2>About me</h2>
                  <p>Hello! I'm Md Nazmul Hossain, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. Currently I am a final year student and pursuing my bachelor's degree in Computer Science Engineering from Bangladesh Open University at Gazipur, Bangladesh. I am available for any kind of job opportunity that suits my interests.
                  </p>

                </div>
                
                <div class="about-more">
                  <a href="https://github.com/nazmul-rdo/">MORE....</a>
                </div>


              </div>


            </div>
            



          </div>



        </section>
       </>
  );
}
export default AboutMe;
