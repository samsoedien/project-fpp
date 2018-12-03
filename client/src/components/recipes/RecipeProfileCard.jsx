import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const RecipeProfileCard = ({ recipe }) => {
  // let profileCardContent;
  // if (profile === null) {
  //   profileCardContent = <span>This account no longer exists</span>
  // } else {
  //   profileCardContent = <div></div>;
  // }
  return (
    <div className="profile-recipe-card">
      <Container>
        <Row>
          <Col md="6">
            <Card>
              <CardBody className="mb-3 text-center">
                <Col xs="6">
                  <CardImg
                    src={recipe.user.avatar}
                    alt={recipe.user.name}
                    className="mx-auto d-block rounded p-2"
                    style={{ width: '75px', height: '75px' }}
                  />
                  <span className="text-primary">{recipe.user.name}</span>
                  <br />
                  <span className="">Food Designer</span>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

RecipeProfileCard.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default RecipeProfileCard;

// TODO: Work on layout.
