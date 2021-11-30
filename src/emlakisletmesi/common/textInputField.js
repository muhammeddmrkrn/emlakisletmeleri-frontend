import React from "react";
import {Form, Input} from 'antd';

const textInputField = (props) => { 
    return(
        <div>
            <Form.Item label={props.label}>
            <Input 
                name= {props.name}
                style={{ width: 300 }}
                required={props.required}
                readOnly = {props.readOnly}
                onChange={props.onChangeState}
                value={props.value}/>            
            </Form.Item>
        </div>        
    );
};

export default textInputField;