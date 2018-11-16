import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
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
      <Container>
        <Card>
          <CardHeader className="bg-info text-white">
            Ask a Question...
          </CardHeader>
          <Row>
            <Col md="10" className="m-auto">
              <CardBody>
                <Form onSubmit={onSubmit} noValidate>
                  <FormGroup>
                    <Label for="">Create Post</Label>
                    <FormText color="muted">Type a comment.</FormText>
                    <Input
                      type="text"
                      name="text"
                      placeholder="Write a Post"
                      value={text}
                      onChange={onChange}
                    />
                    <FormText color="danger">
                      {errors ? errors.text : ''}
                    </FormText>
                  </FormGroup>
                  <Input
                    type="submit"
                    value="Submit"
                    className="btn btn-dark"
                  />
                </Form>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

PostForm.propTypes = {
  errors: PropTypes.object.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired
};

export default PostForm;
