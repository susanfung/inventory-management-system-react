import React from "react";
import './InventoryList.css';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

class InventoryList extends React.Component {
  render() {
    return (
      <div className="inventory-list item-list">
        {this.props.inventory.map(item => (
          <div className="inventory-item">
            <div className="button">
              <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
            </div>
    
            <div className="inventory-info">
              <div className="inventory-head">
                <span className="inventory-name">{item.itemName}</span>
              </div>

              <div className="details">
                <span className="label-item">Date Added: </span>
                <span className="add-date">{item.addDate}</span>
              </div>

              <div className="details">
                <span className="label-item">Location: </span>
                <span>{item.location}</span>
              </div>

              <div className="inventory-notes">{item.notes}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default InventoryList;