import React from "react";
import frontIcon from '../img/arrow-right.png'
import backIcon from '../img/arrow-left.png'
import FaceBook from '../img/FcaebookIcon.png'
import Twitter from '../img/twitter.png'
import LinkedIn from '../img/Linked In.png'
import Pinterest from '../img/pininterest.png'
import Location from '../img/LocationIcon.png'
import Call from '../img/CallIcon.png'
import Message from '../img/messageIcon.png'
import logoFoot from '../img/LogoFoot.png'
import PojecOne from "../img/pro-1.png";
import PojecTwo from "../img/pro-2.png";
import PojecThree from "../img/pro-3.png";


const ProjectsPage = () => {
  return (
      <div>
          <section className="container">
              <div className='TwoflexDividerChildOne1'>
                    <h1>Our</h1>
                    <h2 className='lorumTakeup'>Projects</h2>
              </div>
          </section >
          <section className="container">
              <div className="card">
                    <div className="imagePortion">
                      <img src={PojecOne} alt="" srcSet="" />
                    </div>
                    <div className="textPortion">
                      <h1>Sample Project</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.
                      </p>
                      <button className='bttnTypeTwo '>
                          VIEW MORE
                          <img className='bttnImg' src={frontIcon} alt="" />
                      </button>
                    </div>
              </div>
              <div className="card">
                    <div className="imagePortion">
                      <img src={PojecTwo} alt="" srcSet="" />
                    </div>
                    <div className="textPortion">
                      <h1>Sample Project</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.
                      </p>
                      <button className='bttnTypeTwo '>
                          VIEW MORE
                          <img className='bttnImg' src={frontIcon} alt="" />
                      </button>
                    </div>
              </div>
              <div className="card">
                  <div className="imagePortion">
                      <img src={PojecThree} alt="" srcSet="" />
                  </div>
                  <div className="textPortion">
                      <h1>Sample Project</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.
                      </p>
                      <button className='bttnTypeTwo '>
                          VIEW MORE
                          <img className='bttnImg' src={frontIcon} alt="" />
                      </button>
                    </div>
              </div>
          </section>
          <section className="container">
              <div className='galeryBtnTextSeperator'>
                      <h4 className=''> <span className='TextColNew'>0<span className='textWider'>1 </span></span>/  05</h4>
                      <div className='ButtonSeperator'>
                          <button className='GalbttnTypeOne ' type="submit">
                              <img className='bttnImg' src={backIcon} alt="" />
                          </button>
                          <button className='GalbttnTypeOne ' type="submit">
                              <img className='bttnImg' src={frontIcon} alt="" />
                          </button>
                      </div>
                  </div>
            </section>
          <section className="footer">
              <div className="Footcontainer">
                  <div className='FourflexDivider'>
                      <div className='flexer logoFootPusher'>
                          <img className="" src={logoFoot} alt="HeroOne" />
                      </div>
                      <div className='flexer'>
                          <p className='bolder'>Information</p>
                          <p>Main</p>
                          <p>Gallery</p>
                          <p>Projects</p>
                          <p>Certifications</p>
                          <p>Contacts</p>
                      </div>
                      <div className='flexer'>
                          <p className='bolder'>Contacts</p>
                          <div className="diva">
                              <img src={Location} alt="" srcSet="" />
                              <p>1234 Sample Street
                              Austin Texas 78704</p>
                          </div>              
                          <p></p>
                          <p><img src={Call} alt="" srcSet="" />512.333.2222</p>
                          <p></p>
                          <p><img src={Message} alt="" srcSet="" />sampleemail@gmail.com</p>
                      </div>
                      <div className='flexer'>
                          <p className='bolder'>Information</p>
                          <div className="FooterImgDivider imgFooterPushAway">
                              <img className="" src={FaceBook} alt="HeroOne" />
                              <img className="" src={Twitter} alt="HeroOne" />
                              <img className="" src={LinkedIn} alt="HeroOne" />
                              <img className="" src={Pinterest} alt="HeroOne" />
                          </div>
                      </div>
                  </div>
                  <br />
                  <hr />
                  <div className="just">
                      <p className='reserved-text'> &copy; 2021  All Rights Reserved </p>
                  </div>
              </div>
        </section>    
      </div>
  )
}

export default ProjectsPage