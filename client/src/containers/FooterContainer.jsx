import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../components/layout/Footer';

class FooterContainer extends Component {
  render() {
    return (
      <div className="footer-container">
        <Footer />
      </div>
    );
  }
}

export default connect(null)(FooterContainer);
