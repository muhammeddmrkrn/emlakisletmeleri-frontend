import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

class IsyeriListesi extends React.Component {
  render() {
    return (
      <div>
        <h2>İşyeri Listesi</h2>
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
    title: "İşletme Adı",
    dataIndex: "isletmeAdi",
    width: 80,
  },
  {
    title: "Yetkili",
    dataIndex: "yetkili",
    width: 80,
  },
  {
    title: "Adres",
    dataIndex: "adres",
    width: 80,
  },
  {
    title: "Telefon",
    dataIndex: "telefon",
    width: 80,
  },
  {
    title: "Fax",
    dataIndex: "fax",
    width: 80,
  },
];

export default IsyeriListesi;
