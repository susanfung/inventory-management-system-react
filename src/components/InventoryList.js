import React from "react";
import moment from 'moment';
import { default as EditRecord } from "./EditRecord";
import { Table, Button, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const { Search } = Input;

class InventoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTable: null,
      baseData: this.props.inventory
    };
  };

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
    const { filterTable, baseData } = this.state;

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
        render: value => moment(value).format('LLL'),
        sorter: (a, b) => new Date(a.addDate) - new Date(b.addDate),
      },
      {
        key: 'action',
        render: record => (
          <>
            <Button
              ghost
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => this.props.editRecord(record)}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => this.props.deleteRecord(record)}
            />
          </>
        ),
      },
    ];

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
          size="small"
          dataSource={filterTable == null ? baseData : filterTable}
          rowKey="itemId"
          columns={columns}
          loading={this.props.loading}
          pagination={{ defaultPageSize: 10, showSizeChanger: true }}
          expandable={{
            expandedRowRender: record => <p>{record.notes}</p>
          }}
        />

        <EditRecord
          visible={this.props.visible}
          onCreate={this.props.onCreate}
          onCancel={this.props.onCancel}
          record={this.props.record}
        />
      </>
    )
  }
}

export default InventoryList;