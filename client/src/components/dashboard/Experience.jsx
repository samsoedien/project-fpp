import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import ConfirmDeleteWrapper from '../../wrappers/ConfirmDeleteWrapper';

const Experience = ({
  experience,
  onDeleteExperience
}) => {
  const onDelete = id => {
    onDeleteExperience(id);
  };

  const experienceContent = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
          ' Now'
        ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
      </td>
      <td>
        <button
          onClick={onDelete.bind(exp._id)}
          className="btn btn-danger"
        >
          Delete
          </button>
        <ConfirmDeleteWrapper />
      </td>
    </tr>
  ));
  return (
    <div>
      <h4 className="mb-4">Experience Credentials</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th />
          </tr>
          {experienceContent}
        </thead>
      </table>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.shape({}).isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default Experience;
