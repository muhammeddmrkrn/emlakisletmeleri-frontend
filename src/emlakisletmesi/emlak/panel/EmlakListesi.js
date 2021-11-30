import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

class EmlakListesi extends React.Component {
  render() {
    return (
      <div>
        <h2>Emlak Listesi</h2>
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
    title: "Emlak Türü",
    dataIndex: "emlakTuru",
    width: 80,
  },
  {
    title: "Müşteri",
    width: 80,
    render: (text, record) => (
      <p>{record.musteri.adi} {record.musteri.soyadi}</p>
    )
  },
  {
    title: "Metrekare",
    dataIndex: "metrekare",
    width: 80,
  },
  {
    title: "Oda Sayısı",
    dataIndex: "odaSayisi",
    width: 80,
  },
  {
    title: "Kat",
    dataIndex: "kat",
    width: 80,
  },
  {
    title: "Bina Katı",
    dataIndex: "binaKati",
    width: 80,
  },
  {
    title: "Isınma Türü",
    dataIndex: "isinmaTuru",
    width: 80,
  },
];

export default EmlakListesi;
