import React from "react";
import { useState } from "react";

const RestaurantButton = ({ onAdd }) => {
  return (
    <button className="btn btn-primary" onClick={onAdd}>
      Add
    </button>
  );
};
export default RestaurantButton;
