import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './container.css';
import './bodyFlex.css';
import './button.css';
import './textCustom.css';
import './InnerContent.css';
import './img.css';
import './bodyFlex.css'
import './button.css'
import './textCustom.css'
import './InnerContent.css'
import './img.css'
import logoFoot from '../img/LogoFoot.png'
import backIcon from '../img/arrow-left.png'
import frontIcon from '../img/arrow-right.png'
import frontIconWhite from '../img/arrow-right-white.png'
import heroOne from '../img/hero-1.jpg'
import heroTwo from '../img/img_2-3.jpg'
import heroThree from '../img/gal_six.jpg'
import lineArt from '../img/Line.png'
import sessionTwoOne from '../img/img_2-1.jpg'
import sessionTwoTwo from '../img/img_2-2.jpg'
import sessionTwoThree from '../img/img_2-3.jpg'
import ProjPicOne from "../img/proj-1.png"
import ProjPicTwo from "../img/proj-2.png"
import ProjPicThree from "../img/Proj_3.png"
import ProjPicFour from "../img/Proj_4.png"
import ProjPicFive from "../img/Proj_5.png"
import ContactImg from "../img/conct.jpg"
import FaceBook from '../img/FcaebookIcon.png'
import Twitter from '../img/twitter.png'
import LinkedIn from '../img/Linked In.png'
import Pinterest from '../img/pininterest.png'
import Location from '../img/LocationIcon.png'
import Call from '../img/CallIcon.png'
import Message from '../img/messageIcon.png'

const HomePage = () => {
    const navigate = useNavigate();

    const handleMainClick = () => {
        navigate('/');
      };

    const handleCertClick = () => {
        navigate('/certification');
    };
    
    const handleGalleryClick = () => {
      navigate('/gallery');
    };
  
    const handleProjectsClick = () => {
      navigate('/projects');
    };

    const handleContactsClick = () => {
        navigate('/contacts');
    };

    const handleMoreProjeClick = () => {
        navigate('/moreInfoPage');
    };

    // CHANGE ICON PICTURES

    const images = [heroOne, heroTwo, heroThree];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePreviousImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  

    return (
        <div className='hide'>
            <section className="container">
                <div className='TwoflexDividerOne'>
                    <div className='TwoflexDividerChildOne1'>
                        <h1>PROJECT</h1>
                        <h2 className='lorumTakeup'>Lorum</h2>
                        <div className='ButtonSeperator'>
                            <button className='bttnTypeOne HeroButtoTOp' type="submit" onClick={handlePreviousImage}  >
                                <img className='bttnImg' src={backIcon} alt="" />
                            </button>
                            <button className='bttnTypeOne HeroButtoTOp' type="submit"onClick={handleNextImage} >
                                <img className='bttnImg' src={frontIcon} alt=""  />
                            </button>
                            <img className='HeroButtonLine' src={lineArt} alt="" />
                        </div>
                        <h4 className='LiftMe'> <span className=''>0<span className='textWider'>{currentIndex + 1} </span></span>/  03</h4>
                        </div>
                    <div className='TwoflexDividerChildOne2 HeroBackground'>
                        <div className="smallContainerzero">
                            <img className="HeroImg" src={images[currentIndex]}alt="HeroOne" />
                        </div>
                        <button className='bttnTypeTwo heroBtnMover' onClick={handleProjectsClick}>
                            VIEW PROJECT
                            <img className='bttnImg' src={frontIcon} alt="" />
                        </button>
                    </div>
                </div>
            </section>
            <section className="container  ">
                <div className='ThreeflexDiverOne'>
                    <div className='ThreeflexDiverOneChild1'>
                        <div className="smallContainer1">
                            <img className="HeroImg1" src={sessionTwoOne} alt="HeroOne" />
                        </div>
                    </div>
                    <div className='ThreeflexDiverOneChild2'>
                        <div className="smallContainer3 aboutPictureTakeDownn">
                            <img className="HeroImg1" src={sessionTwoThree} alt="HeroOne" />
                        </div>
                    </div>
                    <div className='ThreeflexDiverOneChild3 aboutTakeUp'>
                        <h1>About</h1>
                        <p className='smallPtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged.
                        </p>
                        <button className='bttnTypeTwo' onClick={handleGalleryClick}>READ MORE<img className='bttnImg' src={frontIcon} alt="" srcSet="" /></button>
                    </div>
                </div>
                <div className="smallContainer2 flyGuy">
                    <img className="HeroImg" src={sessionTwoTwo} alt="HeroOne" />
                </div>
            </section>
            <section className="container">
                <h1>Main Focus/Mission Statement</h1>
                <div className='TwoflexDividerOne '>
                    <div className='TwoflexDivider2Child1 SubChildFlex'>
                        <h3 className='colOne'>1</h3>
                        <p className='smallPtext2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et 
                            facilisis placerat.
                        </p>
                    </div>
                    <div className='TwoflexDivider2Child2 SubChildFlex'>
                        <h3 className='colOne'>2</h3>
                        <p className='smallPtext3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et 
                            facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
                        </p>
                    </div>
                </div>
            </section>
            <section className="container sectioTakeup2 ">
                <h1>Our Projects</h1>
                <div className='TwoflexDividerOne'>
                    <div className='TwoflexDivider2Child2  '>
                        <div className="smallContainer22 ProjectInnerImageTakeUp ">
                            <img className="HeroImg" src={ProjPicOne} alt="HeroOne" />
                        </div>
                    </div>
                    <div className='TwoflexDivider2Child2 '>
                        <div className="smallContainer ProjectInnerImageTakeUp ">
                            <img className="HeroImg" src={ProjPicTwo } alt="HeroOne" /> 
                        </div>
                    </div>
                </div>
                <div className='ThreeflexDiverOne aboutTakeUp2'>
                    <div className='ThreeflexDiverOneChild1'>
                        <div className="smallContainer ProjectInnerImageTakeUp">
                            <img className="HeroImg" src={ProjPicThree} alt="HeroOne" />
                        </div>
                    </div>
                    <div className='ThreeflexDiverOneChild2'>
                        <div className="smallContainer ">
                            <img className="HeroImg" src={ProjPicFour} alt="HeroOne" />
                        </div>
                    </div>
                    <div className='ThreeflexDiverOneChild3'>
                        <div className="smallContainer ">
                            <img className="HeroImg" src={ProjPicFive} alt="HeroOne" />
                        </div>
                    </div>
                </div>
                <div className='ThreeflexDiverOne'>
                    <div className='ThreeflexDiverOneChild1 projectH2Pusser'>
                        <h5 >Sample Project</h5>
                        <button className='bttnTypeThreeOne bttnUpTake' onClick={ handleMoreProjeClick}>VIEW MORE<img className='bttnImg3' src={frontIconWhite} alt="" srcSet="" /></button>
                    </div>
                    <div className='ThreeflexDiverOneChild3 projectH2Pusser'>
                        <button className='bttnTypeThree ' onClick={ handleProjectsClick}>ALL PROJECTS<img className='bttnImg3' src={frontIconWhite} alt="" srcSet="" /></button>
                    </div>
                </div>
            </section>
            <section className="container sectioTakeup">
                <h1>Contact Us</h1>
                <div className='TwoflexDividerOne'>
                    <div className='coloumner'>
                        <input type="text" name="" id="" placeholder='Name:'/>
                        <input type="text" name="" id="" placeholder='Phone Number*'/>
                        <input type="text" name="" id="" placeholder='Email*'/>
                        <input type="text" name="" id="" placeholder='Interested in:'/>
                        <textarea name="" id="" placeholder='Message*'></textarea>
                    </div>
                    <div className='coloumner'> 
                        <img className="HeroImg" src={ContactImg} alt="HeroOne" />
                    </div>
                </div>
                <div className='ThreeflexDiverOneChild3 projectH2Pusser'>
                        <button className='bttnTypeThreeFour ' onClick={ handleContactsClick}>SEND EMAIL<img className='bttnImg3' src={frontIconWhite} alt="" srcSet="" /></button>
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
                            <p className='cur' onClick={handleMainClick }>Main</p>
                            <p className='cur' onClick={handleGalleryClick }>Gallery</p>
                            <p className='cur' onClick={handleProjectsClick}>Projects</p> 
                            <p className='cur' onClick={handleCertClick }>Certifications</p>
                            <p className='cur' onClick={handleContactsClick}>Contacts</p>
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
                            <p className='cur'><img src={Message} alt="" srcSet="" />sampleemail@gmail.com</p>
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




            

export default HomePage;
