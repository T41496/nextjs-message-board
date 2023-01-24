import { useState } from "react";
import { Button, Form, InputNumber, Radio, Space } from "antd";
import { addNumber } from "@/src/services";

export const NumberForm = () => {
  const [form] = Form.useForm();
  const [numberType, setNumberType] = useState("normal");
  const [lastNumber, setLastNumber] = useState();
  const [average, setAverage] = useState();

  const onFinish = async (values: any) => {
    let numbers = [];
    if (values.numberType === "normal") {
      numbers.push(values.normalNumber);
    } else if (values.numberType === "negative") {
      numbers.push(values.negativeNumber);
    } else {
      numbers.push(values.fractionNumber1);
      numbers.push(values.fractionNumber2);
    }
    const res = await addNumber({ numbers });
    res.lastNumber && setLastNumber(res.lastNumber);
    res.average && setAverage(res.average);
  };

  const onNumberTypeChange = (value: { numberType: string }) => {
    value.numberType && setNumberType(value.numberType);
  };

  return (
    <>
      <Form
        form={form}
        name="horizontal_form"
        onFinish={onFinish}
        onValuesChange={onNumberTypeChange}
        initialValues={{
          numberType: "normal",
          normalNumber: 0,
          negativeNumber: 0,
          fractionNumber1: 0,
          fractionNumber2: 1,
        }}
      >
        <Form.Item name="numberType">
          <Radio.Group value={numberType}>
            <Radio value="normal">Normal</Radio>
            <Radio value="negative">Negative</Radio>
            <Radio value="fraction">Fraction</Radio>
          </Radio.Group>
        </Form.Item>
        <Space wrap align="start" size={"large"}>
          {numberType === "normal" && (
            <Form.Item name="normalNumber">
              <InputNumber min={0} max={999999} step="0.01" />
            </Form.Item>
          )}
          {numberType === "negative" && (
            <Form.Item name="negativeNumber">
              <InputNumber min={-999999} max={0} step="0.01" />
            </Form.Item>
          )}
          {numberType === "fraction" && (
            <>
              <Form.Item name="fractionNumber1">
                <InputNumber min={-999999} max={999999} step="0.01" />
              </Form.Item>
              /
              <Form.Item
                name="fractionNumber2"
                rules={[
                  {
                    pattern: RegExp("[^0]+"),
                    message: "0 is not valid number!",
                  },
                ]}
              >
                <InputNumber min={-999999} max={999999} step="0.01" />
              </Form.Item>
            </>
          )}
          <Button type="primary" htmlType="submit">
            Send and receive average
          </Button>
        </Space>
      </Form>
      <Space wrap>
        {lastNumber && <>Last Number: {lastNumber}</>}
        {average && <>Average: {average}</>}
      </Space>
    </>
  );
};
