import React from 'react';

import img from '../../assets/img/foodprinted_sidedish.jpg';

export default (props) => {
  return (
    <div className="recipe-header">
      <header className="recipe-header">
        <img src={img} alt="" className="mb-4" />
      </header>
    </div>
  );
}

//FIXME: Choose if recipe image is inserted using img tags or css styling 
// for header: style={{ backgroundImage: `url(${img})` }}