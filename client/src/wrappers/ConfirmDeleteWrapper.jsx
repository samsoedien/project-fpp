import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Modal,
  Button,
} from '@material-ui/core';

const styles = theme => ({
  modalButton: {
    background: theme.palette.error.main,
    color: theme.palette.common.white,
  },
  modalPaper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class ConfirmDeleteWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.onModalToggle = this.onModalToggle.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onModalToggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  onDeleteClick() {
    const { onDeleteClick } = this.props;
    onDeleteClick();
  }

  render() {
    const { isOpen } = this.state;
    const { buttonLabel, children, classes } = this.props;
    return (
      <div className="modal-component">
        <Button variant="contained" onClick={this.onModalToggle} className={classes.modalButton}>{buttonLabel}</Button>
        <Modal open={isOpen} onClose={this.onModalToggle}>
          <Paper className={classes.modalPaper}>
            {children}
            <Button color="primary" onClick={() => { this.onModalToggle(); this.onDeleteClick(); }}>Delete</Button>
          </Paper>
        </Modal>
      </div>
    );
  }
}

ConfirmDeleteWrapper.defaultProps = {
  buttonLabel: 'Delete',
};

ConfirmDeleteWrapper.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
  buttonLabel: PropTypes.string,
  onDeleteClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ConfirmDeleteWrapper);
