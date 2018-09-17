import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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

// FooterContainer.propTypes {

// };

export default connect(null)(FooterContainer);
