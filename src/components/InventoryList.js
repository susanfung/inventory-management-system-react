import React from "react";
import { Table, Button, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Search } = Input;

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
  constructor(props) {
    super(props);
    this.state = { filterTable: null, columns: columns, baseData: this.props.inventory };
  }

  search = value => {
    const { baseData } = this.state;
    console.log("PASS", { value });

    const filterTable = baseData.filter(o =>
      Object.keys(o).some(k =>
        String(o[k])
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );

    this.setState({ filterTable });
  };

  render() {
    const { filterTable, columns, baseData } = this.state;

    return (
      <>
        <div align="right">
          <Search
            style={{ marginBottom: 10, width: 200 }}
            placeholder="Search by..."
            enterButton
            onChange={e => this.search(e.target.value)}
            onSearch={this.search}
            allowClear="true"
          />
        </div>

        <Table
          dataSource={filterTable == null ? baseData : filterTable}
          rowKey="itemId"
          columns={columns}
          expandable={{
            expandedRowRender: record => <p>{record.notes}</p>
          }}
          size="small"
          onChange={this.onChange}
          pagination={{ defaultPageSize: 10, showSizeChanger: true }}
        />
      </>
    )
  }
}

export default InventoryList;