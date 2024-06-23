import { useNavigate } from 'react-router-dom';
import React from 'react';
// import backIcon from '../img/arrow-left.png'
import ExtraProOne from '../img/ExtraPro1.png';
import ExtraProTwo from '../img/ExtraPro2.png';
import ExtraProThree from '../img/ExtraPro3.png';
import FaceBook from '../img/FcaebookIcon.png'
import Twitter from '../img/twitter.png'
import LinkedIn from '../img/Linked In.png'
import Pinterest from '../img/pininterest.png'
import Location from '../img/LocationIcon.png'
import Call from '../img/CallIcon.png'
import Message from '../img/messageIcon.png'
import logoFoot from '../img/LogoFoot.png'


const ProjectTwoPage = () => {
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


    return(
      <div>
        <section className="container">
            <div className='TwoflexDividerOne'>
                <div className='TwoflexDividerChildOne12'>
                    <h1>Sample </h1>
                    <h2 className='lorumTakeup'>Project 1</h2>
                </div>
            </div>
            <div>
                <div className="smallContainerzerooo">
                    <img className="HeroImg" src={ExtraProOne} alt="HeroOne" />
                </div>
            </div>
            <div className="NewProjContainer">
                <div className="smallContainerzeroo ">
                    <img src="" className="HeroImg" src= {ExtraProTwo} alt="" srcSet="" />
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of 
                    the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                    to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                    a galley of type and scrambled it to make a type specimen book. It has survived not only 
                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with.
                </p>
            </div>
            <div className="smallContainerzerooo">
                    <img className="HeroImg" src={ExtraProThree} alt="HeroOne" />
            </div>
        </section>
        <section className="footer marger1">
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


export default ProjectTwoPage