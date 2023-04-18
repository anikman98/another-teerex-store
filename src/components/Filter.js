import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import '../css/Filter.css';

const Filter = () => {
  const {
    colorFilter,
    genderFilter,
    typeFilter,
    priceFilter,
    handleColorFilter,
    handleTypeSelect,
    handleGenderFilter,
    handlePriceSelect,
  } = useContext(FilterContext);

   

  return (
    <div className="filter">
      <h2>Filter</h2>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Color</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input
              type="checkbox"
              name="color1"
              checked={colorFilter.includes("Red")}
              id="color1"
              onChange={() => handleColorFilter("Red")}
            />
            <label htmlFor="color1">&nbsp;Red</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="color2"
              checked={colorFilter.includes("Blue")}
              id="color2"
              onChange={() => handleColorFilter("Blue")}
            />
            <label htmlFor="color2">&nbsp;Blue</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="color3"
              checked={colorFilter.includes("Green")}
              id="color3"
              onChange={() => handleColorFilter("Green")}
            />
            <label htmlFor="color3">&nbsp;Green</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="color4"
              checked={colorFilter.includes("Black")}
              id="color4"
              onChange={() => handleColorFilter("Black")}
            />
            <label htmlFor="color4">&nbsp;Black</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="color5"
              checked={colorFilter.includes("Pink")}
              id="color5"
              onChange={() => handleColorFilter("Pink")}
            />
            <label htmlFor="color5">&nbsp;Pink</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="color6"
              checked={colorFilter.includes("Grey")}
              id="color6"
              onChange={() => handleColorFilter("Grey")}
            />
            <label htmlFor="color6">&nbsp;Grey</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="color7"
              checked={colorFilter.includes("Purple")}
              id="color7"
              onChange={() => handleColorFilter("Purple")}
            />
            <label htmlFor="color7">&nbsp;Purple</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="color8"
              checked={colorFilter.includes("White")}
              id="color8"
              onChange={() => handleColorFilter("White")}
            />
            <label htmlFor="color8">&nbsp;White</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="color9"
              checked={colorFilter.includes("Yellow")}
              id="color9"
              onChange={() => handleColorFilter("Yellow")}
            />
            <label htmlFor="color9">&nbsp;Yellow</label>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Gender</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input
              type="checkbox"
              name="male"
              id="male"
              checked={genderFilter.includes("Men")}
              onChange={(e) => {
                handleGenderFilter("Men");
              }}
            />
            <label htmlFor="male">&nbsp;Male</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="female"
              id="female"
              checked={genderFilter.includes("Women")}
              onChange={(e) => {
                handleGenderFilter("Women");
              }}
            />
            <label htmlFor="female">&nbsp;Female</label>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Price</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input
              type="checkbox"
              name="color1"
              id="color1"
              value={"0,250"}
              checked={priceFilter.includes("0") && priceFilter.includes("250")}
              onChange={(e) => {
                handlePriceSelect(e);
              }}
            />
            <label htmlFor="color1">&nbsp;Rs.0-250</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="color1"
              id="color1"
              value={"251,450"}
              checked={
                priceFilter.includes("251") && priceFilter.includes("450")
              }
              onChange={(e) => {
                handlePriceSelect(e);
              }}
            />
            <label htmlFor="color1">&nbsp;Rs.251-450</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="color1"
              id="color1"
              value={"451,999"}
              checked={
                priceFilter.includes("451") && priceFilter.includes("999")
              }
              onChange={(e) => {
                handlePriceSelect(e);
              }}
            />
            <label htmlFor="color1">&nbsp;Rs.451 & above</label>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <h3>Type</h3>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <input
              type="checkbox"
              name="polo"
              id="polo"
              checked={typeFilter.includes("Polo")}
              onChange={() => {
                handleTypeSelect("Polo");
              }}
            />
            <label htmlFor="polo">&nbsp;Polo</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="hoodie"
              id="hoodie"
              checked={typeFilter.includes("Hoodie")}
              onChange={() => {
                handleTypeSelect("Hoodie");
              }}
            />
            <label htmlFor="hoodie">&nbsp;Hoodie</label>
          </div>
          <div className="filter-option">
            <input
              type="checkbox"
              name="basic"
              id="basic"
              checked={typeFilter.includes("Basic")}
              onChange={() => {
                handleTypeSelect("Basic");
              }}
            />
            <label htmlFor="basic">&nbsp;Basic</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
