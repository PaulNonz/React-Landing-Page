import React from "react";
import './button.css'

import FaceBook from '../img/FcaebookIcon.png'
import Twitter from '../img/twitter.png'
import LinkedIn from '../img/Linked In.png'
import Pinterest from '../img/pininterest.png'
import Location from '../img/LocationIcon.png'
import Call from '../img/CallIcon.png'
import Message from '../img/messageIcon.png'
import logoFoot from '../img/LogoFoot.png'


const ProjectsPage = () => {
  return (
    <div>


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