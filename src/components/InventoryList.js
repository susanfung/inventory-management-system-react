import React from "react";
import './InventoryList.css';
import { Button, Card, Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const genExtra = () => (
  <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
);

class InventoryList extends React.Component {
  render() {
    return (
      <div className="inventory-list item-list">
        {this.props.inventory.map(item => (
          <Card
            key={item.itemId}
            style={{ marginBottom: 16 }}
            type="inner"
            title={
              <div className="inventory-name">
                {item.itemName}
              </div>
            }
            extra={genExtra()}
          >
            <Collapse expandIconPosition="right" >
              <Panel
                header={
                  <div className="inventory-info">
                  <div className="details">
                    <span className="label-item">Date Added: </span>
                    <span className="add-date">{item.addDate}</span>
                  </div>
  
                  <div className="details">
                    <span className="label-item">Location: </span>
                    <span>{item.location}</span>
                  </div>  
                </div>
                }
              >
              <div className="inventory-notes">{item.notes}</div>
              </Panel>
            </Collapse>
          </Card>
        ))}
      </div>
    )
  }
}

export default InventoryList;