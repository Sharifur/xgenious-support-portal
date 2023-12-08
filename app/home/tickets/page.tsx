"use client";

import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const TicketsPage = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      
    return ( 
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
            <p>long content</p>
            
            </div>
        </Content>
     );
}
 
export default TicketsPage;