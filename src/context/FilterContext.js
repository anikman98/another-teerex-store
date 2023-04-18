import { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = (props) => {
  const [colorFilter, setColorFilter] = useState([]);
  const [genderFilter, setGenderFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);

  const resetFilter = () => {
    setColorFilter([]);
    setGenderFilter([]);
    setPriceFilter([]);
    setTypeFilter([]);
  };

  const handleColorFilter = (value) => {
    setColorFilter((prev) => {
      return prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value];
    });
  };

  const handleGenderFilter = (value) => {
    setGenderFilter((prev) => {
      return prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value];
    });
  };

  const handleTypeSelect = (value) => {
    setTypeFilter((prev) => {
      return prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value];
    });
  };

  const handlePriceSelect = (e) => {
    if (e.target.checked === true) {
      let values = e.target.value.split(",");
      setPriceFilter([...priceFilter, ...values].sort());
    }
    if (e.target.checked === false) {
      let values = e.target.value.split(",");
      setPriceFilter(() => {
        return priceFilter.filter((item) => {
          return values.includes(item) ? false : item;
        });
      });
    }
  };

  return (
    <FilterContext.Provider
      value={{
        colorFilter,
        setColorFilter,
        genderFilter,
        setGenderFilter,
        typeFilter,
        setTypeFilter,
        priceFilter,
        setPriceFilter,
        resetFilter,
        handleColorFilter,
        handleTypeSelect,
        handleGenderFilter,
        handlePriceSelect,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
