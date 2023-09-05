"use client";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { login } from "@/api/account";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("login req:", values);
    const res = login(values);
    console.log("login res:", res);
    router.push("/home");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <div className="flex">
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ span: 24 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 24, span: 12 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
