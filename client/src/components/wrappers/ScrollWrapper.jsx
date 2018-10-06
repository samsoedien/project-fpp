import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ScrollWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  conponentDidUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    const { onWindowScroll } = this.props;

    const scrollDistance = document.documentElement.scrollTop;
    if (onWindowScroll) onWindowScroll(scrollDistance);
  }

  render() {
    return this.props.children;
  }
}

ScrollWrapper.propTypes = {
  onWindowScroll: PropTypes.func.isRequired,
};
