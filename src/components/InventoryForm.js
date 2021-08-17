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

  componentDidMount() {
    if (this.state.record !== null) {
      this.state.form.setFieldsValue({
        location: this.state.record.location,
        notes: this.state.record.notes,
      });
    }
  }

  render() {
    const { form } = this.state;
    
    return (
      <Form
        form={form}
        labelCol={{
          span: 4,
        }}
        layout="vertical"
      >
        <Form.Item
          name="location"
          label="Location:"
          rules={[
            {
              required: true,
              message: "This information is required."
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