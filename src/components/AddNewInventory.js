import React from "react";
import { default as InventoryForm } from "./InventoryForm";
import {
  Form,
  Input,
  Button,
} from 'antd';

const AddNewInventory = ({ addRecord }) => {
  const [form] = Form.useForm();
  
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        layout="vertical"
        form={form}
      >
        <Form.Item
          name="itemName"
          label="Item Name:"
          rules={[
            {
              required: true,
              message: "This information is required."
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      
      <InventoryForm record='null' form={form} />

      <Button
        type="primary"
        shape="round"
        onClick={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              addRecord(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        Add New Inventory
      </Button>
    </>
  );
}

export default AddNewInventory;