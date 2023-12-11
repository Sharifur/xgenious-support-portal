"use client";

import Tiptap from '@/components/Tiptap';
import { Alert, Avatar, Layout, Menu, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
const {Content } = Layout;

const TicketDetails = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return ( 
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: colorBgContainer }}>
                <span className="text-gray-500 mr-4 font-medium block text-2xl">#12345</span>
                <h4 className="font-bold text-black text-2xl mb-6">
                    Show notification if today is Friday/Saturday that we are on holiday
                </h4>
                <div className={"flex flex-row justify-between"}>
                    <div className='bg-slate-50 w-3/5 p-6'>
                        <div className='mb-6'>
                            <Alert  message="This ticket has been closed two" showIcon type="warning" />
                        </div>
                        ticket details
                        <div>
                            ticket reply form 
                            <Tiptap />
                        </div>
                    </div>
                    <div className='bg-slate-50 w-2/5 p-6 border-l'>
                        <h3 className='text-xl mb-4'>Agent working on this tickets</h3>
                        <div className='flex flex-row items-center gap-2'>
                            <Avatar>U</Avatar>
                            <span className='font-medium text-sm'>Sharifur Rahman</span>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
     );
}
 
export default TicketDetails;