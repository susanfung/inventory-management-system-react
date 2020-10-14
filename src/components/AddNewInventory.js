import React from "react";
import { default as InventoryForm } from "./InventoryForm";
import {
  Form,
  Input,
  Button,
} from 'antd';

function AddNewInventory() {
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        layout="vertical"
      >
        <Form.Item
          name="itemName"
          label="Item Name:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      
      <InventoryForm record='null' />

      <Button type="primary" shape="round">Add New Inventory</Button>
    </>
  );
}

export default AddNewInventory;