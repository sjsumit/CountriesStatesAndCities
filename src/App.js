import "./styles.css";
import data from "./data";
import Select from "./Select";
import React, { useState } from "react";
export default function App() {
  let { countries } = data;
  let [countrySelected, setCountrySelected] = useState("");
  let [stateSelected, setStateSelected] = useState("");
  let [citySelected, setCitySelected] = useState("");
  let [states, setStates] = useState([]);
  let [cities, setCities] = useState([]);

  const setStatesFromCountry = (countryName) => {
    let statesOfCurrentCountry = countries.find((countryObj) => {
      return countryObj.name === countryName;
    })["states"];
    setCountrySelected(countryName);
    setStates([...statesOfCurrentCountry]);
  };

  const setCitiesFromState = (stateName) => {
    let citiesOfCurrentState = states.find((stateObj) => {
      return stateObj.name === stateName;
    })["cities"];
    setStateSelected(stateName);
    setCities([...citiesOfCurrentState]);
  };

  const selectCity = (cityName) => {
    setCitySelected(cityName);
  };

  return (
    <div>
      <div>
        <Select
          fieldName={"Country:   "}
          optionSelected={countrySelected}
          setFieldData={setStatesFromCountry}
          dataList={countries}
        />
      </div>
      <div>
        <Select
          fieldName={"State: "}
          optionSelected={stateSelected}
          setFieldData={setCitiesFromState}
          dataList={states}
        />
      </div>
      <div>
        <Select
          fieldName={"City: "}
          optionSelected={citySelected}
          setFieldData={selectCity}
          dataList={cities}
        />
      </div>
      {citySelected.length > 0 && (
        <div>
          {countrySelected + " ==> " + stateSelected + " ==> " + citySelected}
        </div>
      )}
    </div>
  );
}
