import React, { useState } from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';

const Banner = ({
  ...props
}) => {

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      {bannerOpen && (
        <div {...props} className="banner">
          <div className="banner-inner text-xxs">
          
            <div className='banner-container'><a className="banner-link banner-link-white" href="/" target="_blank" rel="noopener noreferrer"> <FaWhatsappSquare /><span className="banner-hide-on-sm"> </span></a> <span className="banner-separator"></span> <a className="banner-link banner-link-green" href="whatsapp://send?text=Hello i want us to Talk about my business!&phone=+2348051531333" target="_blank" rel="noopener noreferrer"> Chat with us  </a></div>
           
            <button className="banner-close" onClick={() => setBannerOpen(false)}>
              <span className="screen-reader">Close</span>
              <svg viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;