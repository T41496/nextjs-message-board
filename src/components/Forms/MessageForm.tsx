import { useRouter } from "next/router";
import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { addMessage } from "@/src/services";

export const MessageForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values: any) => {
    const res = await addMessage(values);
    router.reload();
  };

  return (
    <Form
      form={form}
      name="horizontal_form"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="author"
        rules={[{ required: true, message: "Please input author name!" }]}
      >
        <Input placeholder="Author" />
      </Form.Item>
      <Form.Item
        name="content"
        rules={[{ required: true, message: "Please input content!" }]}
      >
        <Input placeholder="Content" />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Post Message
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
