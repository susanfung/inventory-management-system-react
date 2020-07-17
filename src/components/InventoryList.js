import React from "react";
import { Table } from 'antd';

const columns = [
  {
    title: 'Item',
    dataIndex: 'itemName',
    sorter: (a, b) => {return a.itemName.localeCompare(b.itemName)},
  },
  {
    title: 'Location',
    dataIndex: 'location',
    sorter: (a, b) => {return a.location.localeCompare(b.location)},
  },
  {
    title: 'Date Added',
    dataIndex: 'addDate',
    sorter: (a, b) => new Date(a.addDate) - new Date(b.addDate),
  },
];

class InventoryList extends React.Component {
  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.props.inventory}
        rowKey="itemId"
        onChange={this.onChange}
        pagination={{ defaultPageSize: 10, showSizeChanger: true }}
      />
    )
  }
}

export default InventoryList;