import React from "react";

const Select = (props) => {
  return (
    <>
      <label>{props.fieldName}</label>
      <select
        value={props.optionSelected}
        onChange={(e) => {
          props.setFieldData(e.target.value);
        }}
      >
        <option value={""} hidden>
          {"Select " + props.fieldName + "..."}
        </option>
        {props.dataList.map((dataObj, i) => {
          return (
            <option key={dataObj.id} value={dataObj.name}>
              {dataObj.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Select;
