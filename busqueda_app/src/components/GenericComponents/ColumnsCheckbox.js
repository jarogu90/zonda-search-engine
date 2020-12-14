import React, { useState } from "react";
import TableColumns from "../TableColumns";

const ColumnsCheckbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  //const [columns, setColumns] = useState(TableColumns);
  console.log(label);

  const onChangeCheckbox = () => {
    setIsChecked(true);
  };

  return (
    <div className="columnsCheckbox">
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={onChangeCheckbox}
        />

        {label}
      </label>
    </div>
  );
};

export default ColumnsCheckbox;
