import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import frontIcon from '../img/arrow-right.png';
import backIcon from '../img/arrow-left.png';
import FaceBook from '../img/FcaebookIcon.png';
import Twitter from '../img/twitter.png';
import LinkedIn from '../img/Linked In.png';
import Pinterest from '../img/pininterest.png';
import Location from '../img/LocationIcon.png';
import Call from '../img/CallIcon.png';
import Message from '../img/messageIcon.png';
import logoFoot from '../img/LogoFoot.png';
import PojecOne from "../img/pro-1.png";
import PojecTwo from "../img/pro-2.png";
import PojecThree from "../img/pro-3.png";
import PojecFour from "../img/pro-2.png";
import PojecFive from "../img/pro-3.png";
import PojecSix from "../img/pro-1.png";
import PojecSeven from "../img/pro-3.png";
import PojecEight from "../img/pro-1.png";
import PojecNine from "../img/pro-2.png";
import PojecTen from "../img/pro-1.png";
import PojecEleven from "../img/pro-3.png";
import PojecTwelve from "../img/pro-2.png";
import PojecThirteen from "../img/pro-6.png";
import PojecFourteen from "../img/pro-3.png";
import PojecFifteen from "../img/pro-2.png";

const projectImages = [
  PojecOne, PojecTwo, PojecThree, PojecFour, PojecFive,
  PojecSix, PojecSeven, PojecEight, PojecNine, PojecTen,
  PojecEleven, PojecTwelve, PojecThirteen, PojecFourteen, PojecFifteen
];

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projectImages.length / projectsPerPage);

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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const currentProjects = projectImages.slice(
    currentIndex * projectsPerPage,
    (currentIndex + 1) * projectsPerPage
  );

  return (
    <div>
      <section className="container">
        <div className='TwoflexDividerChildOne1'>
          <h1>Our</h1>
          <h2 className='lorumTakeup'>Projects</h2>
        </div>
      </section >
      <section className="container">
        {currentProjects.map((project, index) => (
          <div className="card" key={index}>
            <div className="imagePortion">
              <img src={project} alt={`Sample Project ${index + 1}`} />
            </div>
            <div className="textPortion">
              <h1>Sample Project {currentIndex * projectsPerPage + index + 1}</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
              </p>
              <button className='bttnTypeTwo' onClick={handleMoreProjeClick}>
                VIEW MORE
                <img className='bttnImg' src={frontIcon} alt="" />
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className="container">
        <div className='galeryBtnTextSeperator'>
          <h4> <span className='TextColNew'>0<span className='textWider'>{currentIndex + 1} </span></span>/  0{totalPages}</h4>
          <div className='ButtonSeperator'>
            <button className='GalbttnTypeOne' onClick={handlePrev}>
              <img className='bttnImg' src={backIcon} alt="" />
            </button>
            <button className='GalbttnTypeOne' onClick={handleNext}>
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
              <p className='cur' onClick={handleMainClick}>Main</p>
              <p className='cur' onClick={handleGalleryClick}>Gallery</p>
              <p className='cur' onClick={handleProjectsClick}>Projects</p>
              <p className='cur' onClick={handleCertClick}>Certifications</p>
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
  );
};

export default ProjectsPage;
