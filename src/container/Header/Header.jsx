import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper__info">
      <SubHeading title="Chase the new flavor"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>For FaZe, many might have thought that they missed their opportunity. They won three IGS events during their hegemony in the first half of 2022, but they — like many a great team before them</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
