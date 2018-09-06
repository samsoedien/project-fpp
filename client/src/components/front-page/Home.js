import React from 'react';
import Carousel from '../layout/Carousel';
import Jumbotron from '../layout/Jumbotron';

import img from '../../assets/img/foodprinted_sidedish.jpg';
import img2 from '../../assets/img/prawn11.jpg';
import img3 from '../../assets/img/DSC_1753.JPG';

export default () => {
  return (
    <div>
      <Carousel img={img} img2={img2} img3={img3} />
      <Jumbotron />
    </div>
  );
};

// TODO: Rename this component and rethink DOM structure.