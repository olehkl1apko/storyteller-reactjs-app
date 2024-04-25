import { Modal, Form, Input, DatePicker } from "antd";

interface NewStoryModalProps {
  visible: boolean;
  onClose: () => void;
  onCreate: (storyData: any) => void;
}

const NewStoryModal = ({ visible, onClose, onCreate }: NewStoryModalProps) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onCreate(values);
        form.resetFields();
        onClose();
      })
      .catch((errorInfo) => {
        console.error("Failed:", errorInfo);
      });
  };

  return (
    <Modal
      title="Create New Story"
      open={visible}
      onOk={handleOk}
      onCancel={onClose}
      okText="Create"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: false, message: "Please input the description!" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[{ required: true, message: "Please select the start date!" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="endDate"
          label="End Date"
          rules={[{ required: true, message: "Please select the end date!" }]}
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewStoryModal;
