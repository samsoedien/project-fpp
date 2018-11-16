import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

const PostForm = ({ text, errors, onChangeCallback, onSubmitCallback }) => {
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
        <div className="card-header bg-info text-white">Ask a Question...</div>
        <div className="card-body">
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="">Create Post</Label>
              <Input
                type="text"
                name="text"
                placeholder="Write a Post"
                value={text}
                onChange={onChange}
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.text
                })}
              />
              <FormText color="muted">Type a comment.</FormText>
            </FormGroup>
            <Input type="submit" value="Submit" className="btn btn-dark" />
          </Form>
        </div>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  errors: PropTypes.object.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired
};

export default PostForm;
