import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNutrition } from '../actions/ingredientActions';
import isEmpty from '../validation/is-empty';

import Nutrition from '../components/ingredients/Nutrition';

class NutritionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutritions: {
        type: 'kcal',
        value: 200,
      },
      errors: {},
      isEditable: true,
    };

    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  //   if (nextProps.ingredient.ingredient) {
  //     const nutritions = nextProps.ingredient.ingredient;

  //     // If nutrition field doesnt exist, make empty string
  //     nutritions.kcal = !isEmpty(nutritions.kcal) ? nutritions.kcal: '';
  //     //nutritions.fats = !isEmpty(nutritions.fats) ? nutritions.fats: '';

  //     // Set component fields state
  //     this.setState({
  //       value: nutritions.kcal,
  //     });
  //   }
  // }

  onSubmitCallback(e) {
    const nutritionData = {
      kcal: this.state.kcal,
    };

    this.props.addNutrition(nutritionData, this.props.history);
  }

  onChangeCallback(e) {
    this.setState({ kcal: e });
  }

  // onChangeCallback(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  render() {
    const { errors } = this.state;
    const { nutritions } = this.props;

    return (
      <div className="nutrition-container">
        <Nutrition
          nutritions={nutritions} // should be from props: nutritions={nutritions}
          isEditable={this.state.isEditable}
          errors={errors}
          onChangeCallback={this.onChangeCallback}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    );
  }
}

NutritionContainer.propTypes = {
  addNutrition: PropTypes.func.isRequired,
  ingredient: PropTypes.object.isRequired,
  nutritions: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // ingredient: state.ingredient,
  errors: state.errors,
});

export default connect(mapStateToProps, { addNutrition })(withRouter(NutritionContainer));
