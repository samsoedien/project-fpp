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
      limit: 2,
    };
    this.filterUpdate = this.filterUpdate.bind(this);
    this.onShowContentCallback = this.onShowContentCallback.bind(this);
  }

  componentDidMount() {
    const { getProfiles } = this.props;
    getProfiles();
  }

  onShowContentCallback() {
    const { limit } = this.state;
    this.setState({
      limit: limit + 2,
    });
  }

  filterUpdate(value) {
    this.setState({
      filterText: value,
    });
  }

  render() {
    const { profile: { profiles, loading } } = this.props;
    const { filterText, limit } = this.state;
    return (
      <div className="profile-list-container">
        <ProfileList
          profiles={profiles}
          loading={loading}
          filterText={filterText}
          filterUpdate={this.filterUpdate}
          limit={limit}
          onShowContentCallback={this.onShowContentCallback}
        />
      </div>
    );
  }
}

ProfileListContainer.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(ProfileListContainer);
