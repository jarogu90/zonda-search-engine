import React, { useState } from "react";
import { Button, Dropdown, Menu, Checkbox } from "antd";
import "antd/dist/antd.css";

const ColumnsMenu = ({ columns, onChangeCheckbox }) => {
  const [visibleMenuSettings, setVisibleMenuSettings] = useState(false);

  const ColumnsDropdown = () => {
    return (
      <Menu>
        <Menu.ItemGroup title="Columns">
          {columns.map((column) => {
            return (
              <Menu.Item key={column.dataIndex}>
                <Checkbox
                  id={column.dataIndex}
                  onChange={onChangeCheckbox}
                  defaultChecked
                >
                  {column.title}
                </Checkbox>
              </Menu.Item>
            );
          })}
        </Menu.ItemGroup>
      </Menu>
    );
  };

  const handleVisibleChange = (flag) => {
    setVisibleMenuSettings(flag);
  };

  return (
    <Dropdown
      overlay={ColumnsDropdown}
      onVisibleChange={handleVisibleChange}
      visible={visibleMenuSettings}
      trigger="click"
    >
      <Button>Select Columns</Button>
    </Dropdown>
  );
};

export default ColumnsMenu;
