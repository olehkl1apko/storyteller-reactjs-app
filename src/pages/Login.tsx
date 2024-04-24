import { Button, Form, Input } from "antd";

export interface FieldType {
  username: string;
}

function Login() {
  const onFinish = async (values: FieldType) => {
    localStorage.setItem("user", JSON.stringify(values));
    window.location.href = "/";
  };

  const initialValues: FieldType = {
    username: "",
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" bg-sky-200 p-10 rounded-md">
        <h4 className=" text-3xl text-center text-sky-800 mb-10">
          Storyteller Login
        </h4>
        <Form
          layout="vertical"
          style={{ maxWidth: 600 }}
          initialValues={initialValues}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            style={{ fontSize: "18px" }}
          >
            <Input style={{ padding: "10px 20px", fontSize: "18px" }} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                padding: "0px 40px",
                marginTop: "28px",
                fontSize: "16px",
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
