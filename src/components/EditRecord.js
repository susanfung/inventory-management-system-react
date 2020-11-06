import React from 'react';
import { default as InventoryForm } from "./InventoryForm";
import { Modal, Form } from 'antd';

const EditRecord = ({ visible, updateRecord, onCancel, record }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title={record.itemName}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            updateRecord(record.itemId, values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <InventoryForm form={form} record={record} key={record.itemId} />
    </Modal>
  );
};

export default EditRecord;