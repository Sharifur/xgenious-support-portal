"use client";

import { ReactNode } from "react";
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Link from "next/link";
import Image from "next/image";
import HeaderTop from "@/components/HeaderTop";
import type { MenuProps } from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    HomeOutlined
  } from '@ant-design/icons';
  import { Home, Ticket } from 'lucide-react';
  

const items: MenuProps['items'] = [
    {
        label: <Link className="flex items-center gap-2" href={"/home"}> <Home width={20} height={20} /> Dashboard</Link>,
        key: '0',
    },
    {
        label: <Link  className="flex items-center gap-2" href={"/home/tickets"}> <Ticket width={20} height={20} /> Tickets</Link>,
        key: '1',
    },
]

const DashboardLayout = ({children} : {children: ReactNode}) => {
    return ( 
        <Layout hasSider>
        <Sider
            style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            }}
        >
        <div className='mb-4 py-4 px-2 border-b border-gray-500'>
            <Link href={"/home"}>
                <Image src={"/xgenoius-logo.svg"} width={140} height={60} alt='xgenious logo'/>
            </Link>
        </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <HeaderTop />
            {children}
            <Footer style={{ textAlign: 'center', fontSize: 14 }}>&copy; 2017 - {new Date().getFullYear()} All right reserved by <Link href={"https://xgenious.com"}>Xgenious</Link></Footer>
        </Layout>
        </Layout>
     );
}
 
export default DashboardLayout;