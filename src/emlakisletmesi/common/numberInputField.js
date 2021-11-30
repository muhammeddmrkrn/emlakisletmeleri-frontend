import React from "react";
import { InputNumber, Form } from "antd";

const numberInputField = (props) => {
  return (
    <div>
      <Form.Item label={props.label}>
        <InputNumber
          name={props.name}
          value={props.value}
          style={{ width: 300 }}
          readOnly={props.readOnly}
          onChange={props.onChangeState}
        />
      </Form.Item>
    </div>
  );
};

export default numberInputField;
