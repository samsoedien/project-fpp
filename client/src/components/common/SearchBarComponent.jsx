import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import BannerComponent from './BannerComponent';

const styles = theme => ({
  root: {
    margin: '24px 0',
  },
  searchTextfield: {
    marginTop: '100px',
  },
  searchInput: {
    fontSize: '2rem',
    background: 'white',
    color: theme.palette.primary.main,
    // padding: '8px 0',
  },
  searchIcon: {
    marginRight: '16px',
    height: '45px',
    width: '45px',
    color: theme.palette.primary.main,
  },
});

class SearchBarComponent extends Component {

  filterUpdate = () => {
    const { filterCallback } = this.props;

    const val = this.myValue.value;
    filterCallback(val);
  }

  render() {
    const { searchLabel, bannerImage, classes } = this.props;
    return (
      <div className={classes.root}>
        <BannerComponent bannerImage={bannerImage}>
          <Grid container justify="center" alignContent="center">
            <Grid item xs={10}>
              <TextField
                className={classes.searchTextfield}
                fullWidth
                placeholder={searchLabel}
                margin="normal"
                variant="outlined"
                inputRef={value => {
                  this.myValue = value;
                }}
                onChange={this.filterUpdate}
                InputProps={{
                  className: classes.searchInput,
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon className={classes.searchIcon} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid >
        </BannerComponent>
      </div >
    );
  }
}

SearchBarComponent.defaultProps = {
  searchLabel: 'Search...',
};

SearchBarComponent.propTypes = {
  searchLabel: PropTypes.string,
  bannerImage: PropTypes.string.isRequired,
  filterCallback: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(SearchBarComponent);
