import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';

const Carousel = props => (
  <div className="carousel">
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active" />
        <li data-target="#myCarousel" data-slide-to="1" />
        <li data-target="#myCarousel" data-slide-to="2" />
      </ol>
      <div className="carousel-inner" style={{ height: '640px' }}>
        <div className="carousel-item active">
          <img className="first-slide" src={props.img} alt="First slide" />
          <div className="container">
            <div className="carousel-caption text-left">
              <h1>Example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="" role="button">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="second-slide" src={props.img2} alt="Second slide" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="third-slide" src={props.img3} alt="Third slide" />
          <div className="container">
            <div className="carousel-caption text-right">
              <h1>One more for good measure.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="" role="button">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);

Carousel.propTypes = {
  img: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
};

export default Carousel;

// FIXME: Fix height to crop images correctly and display child elements
