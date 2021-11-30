import React from "react";
import { Select, Form } from "antd";

const { Option } = Select;

const emlakTuruComboBoxField = (props) => {
  return (
    <div>
      <Form.Item label={props.label}>
        <Select style={{ width: 120 }} value={props.value} onChange={props.onChangeState}>
          <Option value="Satılık">Satılık</Option>
          <Option value="Kiralık">Kiralık</Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default emlakTuruComboBoxField;
