import React from "react";
import { Table, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

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
  {
    key: 'action',
    render: () => (
      <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
    ),
  },
];

class InventoryList extends React.Component {
  render() {
    return (
      <Table
        dataSource={this.props.inventory}
        rowKey="itemId"
        columns={columns}
        expandable={{
          expandedRowRender: record => <p>{record.notes}</p>
        }}
        size="small"
        onChange={this.onChange}
        pagination={{ defaultPageSize: 10, showSizeChanger: true }}
      />
    )
  }
}

export default InventoryList;