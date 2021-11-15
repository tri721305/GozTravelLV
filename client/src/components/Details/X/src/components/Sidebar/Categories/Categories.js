import React from "react";
import Category from "./Category/Category";

const Categories = (props) =>
  props.categories.map((category, index) => {
    let isActive = false;
    if (category.id === props.categoryActive && !props.showTrash) {
      isActive = true;
    }
    return (
      <Category
        key={category.id}
        index={index}
        catColor={category.catColor}
        categoryName={category.categoryTitle}
        clicked={props.clicked}
        isActive={isActive}
      />
    );
  });

export default Categories;
