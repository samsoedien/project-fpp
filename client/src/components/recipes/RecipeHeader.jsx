import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

//import './RecipeHeader.css';

import ScrollWrapper from '../../wrappers/ScrollWrapper';
import RecipeFavourite from './RecipeFavourite';

import img from '../../assets/img/foodprinted_sidedish.jpg';

const RecipeHeader = () => {
  const handleScroll = (scrollDistance) => {
    const parallaxItem = document.getElementById('myHeader');
    parallaxItem.style.transform = `translate(0px, ${-scrollDistance / 8}px)`;
  };

  return (
    <div className="recipe-header">
      <ScrollWrapper onWindowScroll={handleScroll}>
        <header className="recipe-header header-parallax" id="myHeader" style={{ backgroundImage: `url(${img})` }}>
          <RecipeFavourite />
        </header>
      </ScrollWrapper>
    </div>
  );
};

export default RecipeHeader;
