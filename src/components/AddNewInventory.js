import React from "react";
import { default as AddNewInventoryForm } from "./AddNewInventory-Form";
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

        <AddNewInventoryForm record='null' />

        <Button type="primary" shape="round">Add New Inventory</Button>
      </Form>
    </>
  );
}

export default AddNewInventory;