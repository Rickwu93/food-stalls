import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
const scrollRef = React.useRef(null);

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading  title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: 'AAA', marginTop: '2rem' }}>
        The Spanish AWPer claims the first Most Valuable Player medal in his career after leading ENCE to the IEM Dallas title.</p>
        <button type="button" className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>

        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icons" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icons" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );

}

export default Gallery;
