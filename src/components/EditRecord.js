import React from 'react';
import { default as InventoryForm } from "./InventoryForm";
import { Modal, Form } from 'antd';

const EditRecord = ({ visible, onCreate, onCancel, record }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <InventoryForm form={form} record={record} />
    </Modal>
  );
};

export default EditRecord;