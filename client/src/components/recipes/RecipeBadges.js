import React from 'react';

export default () => {
  return (
    <div>
      <div className="container">
        <span className="badge badge-pill badge-success mr-2 text-lowercase">Time 45min</span>
        <span className="badge badge-pill badge-success mr-2 text-lowercase">Capacity 40cm2</span>
      </div>
    </div>
  );
};

//TODO: map all recipe.printSettings into separate spans like in RecipeList
//TODO: Make if statement; if recommend printsettings = true, use them else use default
// TODO: Callback notice for default setting to trigger warning alert that print settings not optimised