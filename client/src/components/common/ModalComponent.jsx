import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Modal,
  Button,
} from '@material-ui/core';

const styles = theme => ({
  modalButton: { float: 'right' },
  modalPaper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.spacing.unit * 55,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class ModalComponent extends React.Component {
  state = {
    isOpen: false,
  };

  onModalToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { buttonLabel, children, classes } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.onModalToggle} className={classes.recipeformModalButton}>{buttonLabel}</Button>
        <Modal open={isOpen} onClose={this.onModalToggle}>
          <Paper className={classes.modalPaper}>
            {children}
          </Paper>
        </Modal>
      </div>
    );
  }
}


ModalComponent.defaultProps = {
  buttonLabel: 'Open Modal',
};

ModalComponent.propTypes = {
  buttonLabel: PropTypes.string,
  classes: PropTypes.object.isRequired, // eslint-disable-line
  children: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ModalComponent);
