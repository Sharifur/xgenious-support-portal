"use client";

import TicketList from '@/components/TicketList';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const TicketsPage = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      
    return ( 
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: colorBgContainer }}>
                <TicketList pagination={true} sorting={false} title='All Tickets you have opened' />
            </div>
        </Content>
     );
}
 
export default TicketsPage;