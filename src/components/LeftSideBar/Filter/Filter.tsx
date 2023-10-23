import React from "react";

import CategoryFilterButtons from "./FilterButtons/CategoryFilterButtons";
import ColourFilterButtons from "./FilterButtons/ColourFilterButtons";
import SizeFilterButtons from "./FilterButtons/SizeFilterButtons";

const Filter = () => {
  return (
    <div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Category</div>
        <div className="collapse-content">
          <CategoryFilterButtons />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Size</div>
        <div className="collapse-content">
          <SizeFilterButtons />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Colour</div>
        <div className="collapse-content">
          <ColourFilterButtons />
        </div>
      </div>
    </div>
  );
};

export default Filter;
