import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTopWrapper extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTopWrapper.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
  children: PropTypes.object.isRequired, // eslint-disable-line
};

export default withRouter(ScrollToTopWrapper);
