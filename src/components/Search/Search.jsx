import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { GEO_API_URL, geoAPIoptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const loadOptions = async (inputValue) => {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoAPIoptions
    );

    const responseJSON = await response.json();

    return {
      options: responseJSON.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const handleInput = (input) => {
    setSearch(input);
    onSearchChange(input);
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleInput}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
