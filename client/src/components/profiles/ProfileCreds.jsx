import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';

const ProfileCreds = ({ experience }) => {
  const expItems = experience.map(exp => (
    <li key={exp._id} className="list-group-item">
      <h4>{exp.company}</h4>
      <p>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
        {exp.to === null ? (
          ' Now'
        ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
      </p>
      <p>
        <strong>Position:</strong> {exp.title}
      </p>
      <p>
        {exp.location === '' ? null : (
          <span>
            <strong>Location: </strong> {exp.location}
          </span>
        )}
      </p>
      <p>
        {exp.description === '' ? null : (
          <span>
            <strong>Description: </strong> {exp.description}
          </span>
        )}
      </p>
    </li>
  ));

  return (
    <Row>
      <Col md="6">
        <h3 className="text-center text-info">Experience</h3>
        {expItems.length > 0 ? (
          <ul className="list-group">{expItems}</ul>
        ) : (
            <p className="text-center">No Experience Listed</p>
          )}
      </Col>
    </Row>
  );
};

ProfileCreds.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileCreds;
