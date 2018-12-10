import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../actions/profileActions';

import ProfileList from '../components/profiles/ProfileList';

class ProfileListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    this.filterUpdate = this.filterUpdate.bind(this);
  }

  componentDidMount() {
    this.props.getProfiles();
  }

  filterUpdate(value) {
    this.setState({
      filterText: value,
    });
  };

  render() {
    const { profile: { profiles, loading } } = this.props;
    const { filterText } = this.state;
    return (
      <div className="profile-list-container">
        <ProfileList
          profiles={profiles}
          loading={loading}
          filterText={filterText}
          filterUpdate={this.filterUpdate}
        />
      </div>
    );
  }
}

ProfileListContainer.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(ProfileListContainer);
