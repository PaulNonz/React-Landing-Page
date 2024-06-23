import React from 'react';
import backIcon from '../img/arrow-left.png'
import frontIcon from '../img/arrow-right.png'
import galone from '../img/PageGal01.png'
import galtwo from '../img/PageGal02.png'
import galthree from '../img/PageGal03.png'
import galfour from '../img/PageGal04.png'
import galfive from '../img/PageGal05.png'
import galsix from '../img/PageGal06.png'
import galseven from '../img/PageGal07.png'
import galeight from '../img/PageGal08.png'
import galnine from '../img/PageGal09.png'
import galten from '../img/PageGal10.png'
import FaceBook from '../img/FcaebookIcon.png'
import Twitter from '../img/twitter.png'
import LinkedIn from '../img/Linked In.png'
import Pinterest from '../img/pininterest.png'
import Location from '../img/LocationIcon.png'
import Call from '../img/CallIcon.png'
import Message from '../img/messageIcon.png'
import logoFoot from '../img/LogoFoot.png'



const GalleryPage = () => {
  return (
        <div>
            <section className="container">
                    <div className='TwoflexDividerChildOne1'>
                        <h1>Photo</h1>
                        <h2 className='lorumTakeup'>Gallery</h2>
                        <div className="FiveFotoFlex">
                            <div className="GalsmallContainer">
                                <img src={galone} alt="" srcSet="" />
                            </div>
                            <div className="GalsmallContainer">
                                <img src={galtwo} alt="" srcSet="" />
                            </div>
                            <div className="GalsmallContainer">
                                <img src={galthree} alt="" srcSet="" />
                            </div>
                            <div className="GalsmallContainer">
                                <img src={galfour} alt="" srcSet="" />
                            </div>
                            <div className="GalsmallContainer">
                                <img src={galfive} alt="" srcSet="" />
                            </div>
                            <div className="GalsmallContainer">
                                <img src={galsix} alt="" srcSet="" />
                            </div>
                            <div className="GalsmallContainer">
                                <img src={galseven} alt="" srcSet="" />
                            </div>
                            <div className="GalsmallContainer">
                                <img src={galeight} alt="" srcSet="" />
                            </div>
                            <div className="GalsmallContainer">
                                <img src={galnine} alt="" srcSet="" />
                            </div>
                            <div className="GalsmallContainer">
                                <img src={galten} alt="" srcSet="" />
                            </div>
                        </div>
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
  );
}

export default GalleryPage;
