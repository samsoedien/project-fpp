import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="ProfileHeader">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-info text-white mb-3">
              <div className="row">
                <div className="col-4 md-3 m-auto">
                  <img src="" alt="" className="rounded-circle" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="display-4 text-center">{}</h1>
                <p className="lead text-center">{profile.status} {isEmpty(profile.company) ? null : (<span>at {profile.company}</span>)}</p>
                {isEmpty(profile.location) ? null : (<p>{profile.location}</p>)}
                <p>
                  {isEmpty(profile.website) ? null : (<a href={profile.website} className="text-white p-2" target="_blank">
                    <i className="fas fa-globe fa-2x" />
                  </a>)}

                  {isEmpty(profile.social && profile.social.twitter) ? null : (<a href={profile.social.twitter} className="text-white p-2" target="_blank">
                    <i className="fab fa-twitter fa-2x" />
                  </a>)}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ProfileHeader;