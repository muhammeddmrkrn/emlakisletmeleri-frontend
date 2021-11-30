import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

class MusteriListesi extends React.Component {
  render() {
    return (
      <div>
        <h2>Müşteri Listesi</h2>
        <Table 
          pagination={{ pageSize: 5 }}
          dataSource={this.props.data}
          columns={COLUMNS}
          rowKey={record => record.id}
        />
      </div>
    );
  }
}

const COLUMNS = [
  {
    title: "Adı",
    dataIndex: "adi",
    width: 80,
  },
  {
    title: "Soyadi",
    dataIndex: "soyadi",
    width: 80,
  },
  {
    title: "Ev Telefonu",
    dataIndex: "evTelefonu",
    width: 80,
  },
  {
    title: "Cep Telefonu",
    dataIndex: "cepTelefonu",
    width: 80,
  },
  {
    title: "Email",
    dataIndex: "email",
    width: 80,
  },
];

export default MusteriListesi;
