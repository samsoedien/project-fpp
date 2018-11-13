import React from 'react';
import Carousel from './Carousel';
import Banner from './Banner';
import Jumbotron from './Jumbotron';

import TextAnimation from '../../temp/TextAnimation';

import img from '../../assets/img/prawn11.jpg';
import img2 from '../../assets/img/foodprinted_sidedish.jpg';
import img3 from '../../assets/img/DSC_1753.JPG';

const Home = () => (
  <div>
    <Carousel img={img} img2={img2} img3={img3} />
    <TextAnimation />
    <Jumbotron />
    <Banner />
    <Jumbotron />
  </div>
);

export default Home;
