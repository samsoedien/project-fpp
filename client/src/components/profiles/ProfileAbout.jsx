import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';

import isEmpty from '../../utils/is-empty';

const ProfileAbout = ({ profile }) => {
  // Get first name
  const firstName = profile.user.name.trim().split(' ')[0];

  // Skill List
  const skills = profile.skills.map((skill, index) => (
    <div key={index} className="p-3">
      <i className="fa fa-check" /> {skill}
    </div>
  ));

  return (
    <Row>
      <Col md="12">
        <Card className="mb-3">
          <CardBody>
            <CardTitle className="text-center text-info">
              {firstName}'s Bio
            </CardTitle>
            <CardText className="lead">
              {isEmpty(profile.bio) ? (
                <span>{firstName} does not have a bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </CardText>
            <hr />
            <h3 className="text-center text-info">Skill Set</h3>
            <Row>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {skills}
              </div>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};
export default ProfileAbout;
