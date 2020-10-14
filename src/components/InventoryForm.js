import React from "react";
import {
  Form,
  Input
} from 'antd';

class InventoryForm extends React.Component {
  state = {
    form: this.props.form,
    record: this.props.record
  };

  render() {
    const { form, record } = this.state;

    return (
      <Form
        form={form}
        labelCol={{
          span: 4,
        }}
        layout="vertical"
        initialValues={{
          location: record.location,
          notes: record.notes,
        }}
      >
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
      </Form>
    );
  }
}
 
export default InventoryForm;