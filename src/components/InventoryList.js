import React from "react";
import moment from 'moment';
import { default as EditRecord } from "./EditRecord";
import {
  Table,
  Button,
  Input,
  Space
} from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';

const { Search } = Input;

class InventoryList extends React.Component {
  render() {
    let { sortedInfo } = this.props;
    sortedInfo = sortedInfo || {};

    const columns = [
      {
        title: 'Item',
        dataIndex: 'itemName',
        key: 'itemName',
        sorter: (a, b) => {return a.itemName.localeCompare(b.itemName)},
        sortOrder: sortedInfo.columnKey === 'itemName' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
        sorter: (a, b) => {return a.location.localeCompare(b.location)},
        sortOrder: sortedInfo.columnKey === 'location' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Date Added',
        dataIndex: 'addDate',
        key: 'addDate',
        render: value => moment(value).format('LLL'),
        sorter: (a, b) => new Date(a.addDate) - new Date(b.addDate),
        sortOrder: sortedInfo.columnKey === 'addDate' && sortedInfo.order,
        ellipsis: true,
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
          <Space>
            <Search
              style={{ marginBottom: 10, width: 200 }}
              placeholder="Search by..."
              defaultValue={this.props.searchTableValue}
              enterButton
              onSearch={this.props.search}
              allowClear="true"
            />
            <Button
              style={{ marginBottom: 10 }}
              onClick={this.props.clear}
            >
              <CloseCircleOutlined />
              Clear Search
            </Button>
          </Space>
        </div>

        <Table
          size="small"
          dataSource={this.props.filterTable == null ? this.props.inventory : this.props.filterTable}
          rowKey="itemId"
          columns={columns}
          loading={this.props.loading}
          onChange={this.props.handleTableChange}
          pagination={{ defaultPageSize: 10, showSizeChanger: true }}
          expandable={{
            expandedRowRender: record => <p>{record.notes}</p>
          }}
        />

        <EditRecord
          visible={this.props.visible}
          updateRecord={this.props.updateRecord}
          onCancel={this.props.onCancel}
          record={this.props.record}
        />
      </>
    )
  }
}

export default InventoryList;