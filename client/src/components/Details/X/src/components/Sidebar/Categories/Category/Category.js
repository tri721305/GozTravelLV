import React from "react";

const Category = (props) => {
  let catClass = "categoryItem";
  if (props.isActive) {
    catClass += " active";
  }
  let style = {
    borderColor: props.catColor,
  };
  return (
    <div
      onClick={() => props.clicked(props.index)}
      style={style}
      className={catClass}
    >
      <a>{props.categoryName}</a>
    </div>
  );
};

export default Category;
