import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';

import TransitionWrapper from '../../wrappers/Transition';
import '../../other/animations.css';

export default class TextAnimation extends Component {
  render() {
    return (
      <div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={10000}
          classNames="fade"
        >
          <p>This is an animateable text</p>
        </CSSTransition>
      </div>
    );
  }
}
