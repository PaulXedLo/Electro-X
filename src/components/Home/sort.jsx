import React, { useState } from "react";

const ProductSort = ({ handleSort }) => {
  const [sortBy, setSortBy] = useState("");

  const handleDropdownChange = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
    handleSort(selectedSortBy);
  };

  return (
    <div className="product-sort">
      <label htmlFor="sortBy">Sort By:</label>
      <select id="sortBy" value={sortBy} onChange={handleDropdownChange}>
        <option value="">Select...</option>
        <option value="price">Price</option>
        <option value="ram">RAM</option>
      </select>
    </div>
  );
};

export default ProductSort;
