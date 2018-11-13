import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

export default class TextAnimation extends Component {
  render() {
    return (
      <div>
        <CSSTransition appear={true} timeout={600} classNames="fade">
          <p>This is an animateable text</p>
        </CSSTransition>
      </div>
    );
  }
}
