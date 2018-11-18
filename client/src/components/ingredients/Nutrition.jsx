import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Table,
  Button,
} from 'reactstrap';

import isEmpty from '../../utils/is-empty';
import Spinner from '../common/Spinner';

import NutritionCellData from './NutritionCellData';

const Nutrition = ({
  nutritions,
  isEditable,
  onChangeCallback,
  onSubmitCallback,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };

  let nutritionItems;
  if (nutritions === null) {
    nutritionItems = <Spinner />;
  } else {
    if (nutritions.length > 0) {
      nutritionItems = nutritions.map(nutrition => (
        <tr>
          <th scope="row" className="text-left pl-5">
            Calories
          </th>
          <td className="text-right pr-5">
            {isEditable ? (
              <NutritionCellData
                value={nutrition.kcal}
                isEditable={isEditable}
                onChange={onChange}
              />
            ) : (
                <span>{isEmpty(nutrition.kcal) ? null : nutrition.kcal} </span>
              )}
          </td>
        </tr>
      ));
    } else {
      nutritionItems = <h4>No Nutritions found...</h4>;
    }
  }

  return (
    <div className="">
      <Container>
        <Row>
          <Col md="6">
            <Table className="table-hover">
              <thead>
                <tr>
                  <th scope="col" className="text-muted text-left pl-5">
                    Nutrition
                  </th>
                  <th scope="col" className="text-muted text-right pr-5">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>{nutritionItems}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Container>
        {isEditable ? (
          <Button onClick={onSubmit} className="btn btn-success btn-sm">
            Save Changes
          </Button>
        ) : null}
      </Container>
    </div>
  );
};

Nutrition.defaultProps = {
  isEditable: false,
};

Nutrition.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  nutritions: PropTypes.object.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
};

export default Nutrition;

//TODO: if authorized or possible to edit cells than change edit state else if prompt warning that the cells may not be changed.

//FIXME: add isEmpty function
