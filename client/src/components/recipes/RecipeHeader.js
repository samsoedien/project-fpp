import React from 'react';

export default (props) => {
  return (
    <div className="recipe-header">
      <img src={props.img} alt="" className="mb-4" />


    </div>
  );
}

// TODO: jsx-a11y/href-no-hash
// Should consider using buttons instead of a href for anything that doesn't redirect to another page. 
// a href="" className="btn" role="button" can be used??