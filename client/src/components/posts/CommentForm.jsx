import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addComment } from '../../actions/postActions';

import classnames from 'classnames';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from 'reactstrap';

const CommentForm = ({ text, errors, onChangeCallback, onSubmitCallback }) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };

  return (
    <div className="post-form mb-3">
      <div className="card card-info">
        <div className="card-header bg-info text-white">Make a comment...</div>
        <div className="card-body">
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="">Reply to Post</Label>
              <Input
                type="text"
                name="text"
                placeholder="Reply to Post"
                value={text}
                onChange={onChange}
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.text
                })}
              />
            </FormGroup>
            <Input type="submit" value="Submit" className="btn btn-dark" />
          </Form>
        </div>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  text: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
