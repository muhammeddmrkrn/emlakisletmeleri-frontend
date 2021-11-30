import React, { Component } from "react";
import { Form, Select } from "antd";
import { musteriList } from "../musteri/service/MusteriService";
import {timeOutError} from '../constants/constants'

const { Option } = Select;

const initialData = {
  id: null,
  ad: "",
};

class MusteriCombobox extends Component {
  state = {
    success: false,
    data: initialData,
    musteriListesi: [],
  };

  componentDidMount() {
    musteriList().then((res) => {
      console.log(res.data);
      if (res && res.data) {
        this.setState({
          ...this.state,
          success: true,
          musteriListesi: res.data,
        });
      } else {
        this.setState({
          ...this.state,
          musteriListesi: [],
        });
      }
    })
    .catch(err => {
      this.setState({
        ...this.state,
      });
      timeOutError();
    });
  }

  render() {
    const listItems = [];
    listItems.push(<Option key={"null"} value={null}>&nbsp;</Option>);

    listItems.push(
      this.state.musteriListesi.map((musteri) => (
        <Option key={musteri.id}>{musteri.adi} {musteri.soyadi}</Option>
      ))
    );

    return (
      <Form.Item label="Müşteri: " required={this.props.required}>
        <Select
          name="mustericombobox"
          onChange={this.props.onChangeState}
          style={{ width: 300 }}
          required={this.props.required}
        >
          {listItems}
        </Select>
      </Form.Item>
    );
  }
}

export default MusteriCombobox;
