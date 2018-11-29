import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';

export default class SearchBar extends Component {
  filterUpdate() {
    const { filterCallback } = this.props;

    const val = this.myValue.value;
    filterCallback(val);
  }

  render() {
    return (
      <div className="search-bar">
        <Container>
          <InputGroup size="lg" className="shadow-sm mb-4">
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
          </InputGroup>
        </Container>
      </div>
    );
  }
}

SearchBar.propTypes = {
  filterCallback: PropTypes.func.isRequired,
};

// FIXME: refs do not work with reactstrap Input component. regular input is used with form-control className.
