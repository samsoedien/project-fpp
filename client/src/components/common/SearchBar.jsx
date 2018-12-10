import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import { Typography, InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

class SearchBar extends Component {
  filterUpdate() {
    const { filterCallback } = this.props;

    const val = this.myValue.value;
    filterCallback(val);
  }

  render() {
    const { searchLabel, classes } = this.props;
    return (
      <div className="search-bar">
        <Container>
          <Row>
            {/* <Typography variant="h4" className={classes.searchLabel}>{searchLabel}</Typography>

            <InputBase
              placeholder="Search…"
              fullWidth
              className={classes.searchInputbase}
            />
            <SearchIcon /> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Row>
        </Container>
        {/* <InputGroup size="lg" className="shadow-sm mb-4">
          <InputGroupAddon addonType="prepend">Recipes</InputGroupAddon>
          <input
            placeholder="Filter Recipes"
            ref={value => {
              this.myValue = value;
            }}
            onChange={this.filterUpdate.bind(this)}
            className="form-control"
          />
          <InputGroupAddon addonType="append">
            <Button color="primary">Search</Button>
          </InputGroupAddon>
        </InputGroup> */}
      </div >
    );
  }
}

SearchBar.propTypes = {
  filterCallback: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(SearchBar);

        // FIXME: refs do not work with reactstrap Input component. regular input is used with form-control className.
