import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNutrition } from '../actions/ingredientActions';

// import NutritionForm from '../components/ingredients/NutritionForm';
import NutritionsTable from '../components/ingredients/NutritionsTable';

class NutritionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutritions: {
        kcal: '',
      },
      errors: {},
      isEditable: true,
    };

    this.onChangeCallback = this.onChangeCallback.bind(this);
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
    this.onCheckCallback = this.onCheckCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

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

  onCheckCallback() {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { kcal, errors } = this.state;
    const { nutritions } = this.props;

    return (
      <div className="nutrition-container">
        <NutritionsTable
          nutritions={nutritions}
          isEditable={this.state.isEditable}
          errors={errors}
          kcal={kcal}
          onCheckCallback={this.onCheckCallback}
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
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ingredient: state.ingredient,
  errors: state.errors,
});

export default connect(mapStateToProps, { addNutrition })(withRouter(NutritionContainer));
