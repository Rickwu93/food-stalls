import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">Finn "⁠karrigan⁠" Andersen executed some great calls and found frags in crucial moments to keep his team in the game.</p>
          </div>
          <p className="p__opensans">FAZE ELIMINATE NAVI AND CLINCH PARIS MAJOR PLAYOFFS SPOT. "We started to choke, we started to be nervous," said coach Andrey "⁠B1ad3⁠" Gorodenskiy in the post-match interview.</p>
        </div>

        <div className="app__chef-sign">
          <p>Steph Curry</p>
          <p className="p__opensans">Chef & Founder</p>

          <img src={images.sign} alt="sign" />
        </div>

    </div>
  </div>
);

export default Chef;
