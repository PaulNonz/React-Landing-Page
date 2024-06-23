import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import backIcon from '../img/arrow-left.png';
import frontIcon from '../img/arrow-right.png';
import galone from '../img/PageGal01.png';
import galtwo from '../img/PageGal02.png';
import galthree from '../img/PageGal03.png';
import galfour from '../img/PageGal04.png';
import galfive from '../img/PageGal05.png';
import galsix from '../img/PageGal06.png';
import galseven from '../img/PageGal07.png';
import galeight from '../img/PageGal08.png';
import galnine from '../img/PageGal09.png';
import galten from '../img/PageGal10.png';
import galEleven from '../img/PageGal05.png';
import galTwelve from '../img/PageGal02.png';
import galThirteen from '../img/PageGal06.png';
import galfourteen from '../img/PageGal04.png';
import galfifteen from '../img/PageGal01.png';
import galsixteen from '../img/PageGal03.png';
import galseventeen from '../img/PageGal07.png';
import galeighteen from '../img/PageGal09.png';
import galnineteen from '../img/PageGal08.png';
import galtwenty from '../img/PageGal10.png';
import galtwentyOne from '../img/PageGal05.png';
import galtwentyTwo from '../img/PageGal07.png';
import galTwentyThree from '../img/PageGal09.png';
import galTwentFour from '../img/PageGal04.png';
import galTwentyfive from '../img/PageGal01.png';
import galTwentySix from '../img/PageGal03.png';
import galTwentySeven from '../img/PageGal01.png';
import galTwentyeight from '../img/PageGal06.png';
import galTwentynine from '../img/PageGal08.png';
import galthirty from '../img/PageGal02.png';
import FaceBook from '../img/FcaebookIcon.png';
import Twitter from '../img/twitter.png';
import LinkedIn from '../img/Linked In.png';
import Pinterest from '../img/pininterest.png';
import Location from '../img/LocationIcon.png';
import Call from '../img/CallIcon.png';
import Message from '../img/messageIcon.png';
import logoFoot from '../img/LogoFoot.png';

const GalleryPage = () => {
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

    // const handleMoreProjeClick = () => {
    //     navigate('/moreInfoPage');
    // };

    const images = [
        galone, galtwo, galthree, galfour, galfive, galsix, galseven, galeight, galnine, galten,
        galEleven, galTwelve, galThirteen, galfourteen, galfifteen, galsixteen, galseventeen, galeighteen, galnineteen, galtwenty,
        galtwentyOne, galtwentyTwo, galTwentyThree, galTwentFour, galTwentyfive, galTwentySix, galTwentySeven, galTwentyeight, galTwentynine, galthirty
    ];

    const itemsPerPage = 10; // 5 top, 5 bottom
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPages = Math.ceil(images.length / itemsPerPage);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    const currentImages = images.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

    return (
        <div>
            <section className="container">
                <div className='TwoflexDividerChildOne1'>
                    <h1>Photo</h1>
                    <h2 className='lorumTakeup'>Gallery</h2>
                    <div className="FiveFotoFlex">
                        {currentImages.slice(0, 5).map((image, index) => (
                            <div className="GalsmallContainer" key={index}>
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="FiveFotoFlex">
                        {currentImages.slice(5).map((image, index) => (
                            <div className="GalsmallContainer" key={index}>
                                <img src={image} alt={`Gallery ${index + 6}`} />
                            </div>
                        ))}
                    </div>
                    <div className='galeryBtnTextSeperator'>
                        <h4>
                            <span className='TextColNew'>0<span className='textWider'>{currentIndex + 1} </span></span>/ 0{totalPages}
                        </h4>
                        <div className='ButtonSeperator'>
                            <button className='GalbttnTypeOne' onClick={handlePrevious}>
                                <img className='bttnImg' src={backIcon} alt="Previous" />
                            </button>
                            <button className='GalbttnTypeOne' onClick={handleNext}>
                                <img className='bttnImg' src={frontIcon} alt="Next" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer">
                <div className="Footcontainer">
                    <div className='FourflexDivider'>
                        <div className='flexer logoFootPusher'>
                            <img src={logoFoot} alt="Footer Logo" />
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
                                <img src={Location} alt="Location" />
                                <p>1234 Sample Street, Austin Texas 78704</p>
                            </div>
                            <p><img src={Call} alt="Call" /> 512.333.2222</p>
                            <p className='cur'><img src={Message} alt="Email" /> sampleemail@gmail.com</p>
                        </div>
                        <div className='flexer'>
                            <p className='bolder'>Follow Us</p>
                            <div className="FooterImgDivider imgFooterPushAway">
                                <img src={FaceBook} alt="Facebook" />
                                <img src={Twitter} alt="Twitter" />
                                <img src={LinkedIn} alt="LinkedIn" />
                                <img src={Pinterest} alt="Pinterest" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <div className="just">
                        <p className='reserved-text'> &copy; 2021 All Rights Reserved </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GalleryPage;
