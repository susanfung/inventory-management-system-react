import React from "react";
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

        <Form.Item
          name="location"
          label="Location:"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="notes" label="Notes:">
          <Input.TextArea />
        </Form.Item>

        <Button type="primary" shape="round">Add New Inventory</Button>
      </Form>
    </>
  );
}

export default AddNewInventory;