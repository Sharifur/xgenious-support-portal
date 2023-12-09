"use client";

import { Button, Card, Form, Input, Layout, Select, theme } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
const { Content } = Layout;
const { Option } = Select;
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const CreateTicket = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

      const [ticket,setTicket] = useState({
        priority: "0"
      });

    //   const state = {
    //     editorState: EditorState.createEmpty(),
    //   }
    
    //   onEditorStateChange: Function = (editorState) => {
    //     console.log 
    //   };
      
      
    return ( 
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: colorBgContainer }}>
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
                            

                        <Editor
                        // editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        // onEditorStateChange={this.onEditorStateChange}
                        />
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