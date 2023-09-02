import { useState } from 'react';

const Filter = ({ jobTypes, jobCategories, onFilterChange }) => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFilter = () => {
    onFilterChange(selectedType, selectedCategory);
  };

  return (
    <div className="filter-container">
      <h2>Filter Jobs</h2>
      <div className="filter-section">
        <label htmlFor="jobType">Job Type:</label>
        <select id="jobType" value={selectedType} onChange={handleTypeChange}>
          <option value="">Select Type</option>

          {jobTypes.map((type) => (
            <option key={type.id} value={type.type}>
              {type.type}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-section">
        <label htmlFor="jobCategory">Job Category:</label>
        <select id="jobCategory" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {jobCategories.map((category) => (
            <option key={category.categoryId} value={category.category}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;
