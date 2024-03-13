import React from "react";
import Select from "react-select";
import { languagesData } from "@/constants";
import { customStyles } from "@/utils/customStyles";

const LanguagesDropdown = ({ onSelectChange }) => {
  
  return (
    <Select
      options={languagesData}
      styles={customStyles}
      defaultValue={languagesData[3]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
