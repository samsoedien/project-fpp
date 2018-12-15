import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from  'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';

const styles = theme => ({

});

class SelectionControlComponent extends Component {
  state = {
    checked: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;
    return (
      <div className={classes.root}>
        <Switch
          checked={checked}
          onChange={this.handleChange('checked')}
          value="checkedA"
          color="primary"
        />
      </div>
    );
  }
}

SelectionControlComponent.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(SelectionControlComponent);
