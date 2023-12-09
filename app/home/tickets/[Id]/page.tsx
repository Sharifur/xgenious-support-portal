"use client";

import { Layout, Menu, theme } from 'antd';
const {Content } = Layout;

const TicketDetails = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return ( 
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: colorBgContainer }}>
                Ticket Details
            </div>
        </Content>
     );
}
 
export default TicketDetails;