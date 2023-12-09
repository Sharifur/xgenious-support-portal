"use client";

import Tiptap from '@/components/Tiptap';
import { Button, Card, Form, Input, Layout, Select, theme } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
const { Content } = Layout;
const { Option } = Select;

const CreateTicket = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

      const [ticket,setTicket] = useState({
        priority: "0"
      });

      
    return ( 
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: colorBgContainer }}>
            <Tiptap/>
                <h1 className='text-3xl font-medium mb-6'>Create new ticket</h1>
                <Card>
                    <Form
                        name="wrap"
                        labelCol={{ flex: '250px' }}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{ flex: 1 }}
                        colon={false}
                        style={{ maxWidth: 600 }}
                    >
                        <Form.Item label="Subject" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="A super long label text" name="password" rules={[{ required: true }]}>
                        <Input />
                        </Form.Item>
                        <Form.Item label="Product" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Purchase Code" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Subject" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Ticket Type" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item initialValue={ticket.priority} label="Priority" name="priority" rules={[{ required: true,message: "pririty field is required" }]}>
                           <Select placeholder="select prority" >
                                <Option value="0">Low</Option>
                                <Option value="1">Medium</Option>
                                <Option value="2">High</Option>
                                <Option value="3">Urgent</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label=" ">
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </Content>
     );
}
 
export default CreateTicket;