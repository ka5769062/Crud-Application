"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import { DatePicker } from "antd";

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};

const AddTodo = () => {
  const [form] = Form.useForm();
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onFinish = async (values) => {
    // save to database here
    const data = { title: values.title, description: values.todo };
    const post = fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="bg-slate-300 w-full flex flex-col items-center justify-center p-4 rounded-full m-4">
      <p className="text-xl font-semibold mb-4 tracking-widest">Add Todo</p>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="todo"
          label="Todo"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="due" label="Due Date">
          <DatePicker showTime onChange={onChange} />
        </Form.Item>
        <Form.Item className="w-full flex justify-center">
          <div className="flex gap-4">
            <Button type="primary" htmlType="submit">
              Add
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Clear
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTodo;
