"use client"

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Col, Divider, Dropdown, Row, Space } from 'antd';

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  ArrowUpOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import HeaderTop from '@/components/HeaderTop';
import Image from 'next/image';
import Link from 'next/link';
import Card from 'antd/es/card/Card';
import Statistic from 'antd/es/statistic/Statistic';
import TicketList from '@/components/TicketList';

const { Header, Content, Footer, Sider } = Layout;


const HomePage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: colorBgContainer }}>
            <Row gutter={15} className='mb-6'>
                <Col span={12}>
                    <Card bordered={false}>
                        <Statistic title="Active Tickets" value={112893}  />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card bordered={false}>
                        <Statistic title="Closed Tickets" value={112893}  />
                    </Card>
                </Col>
            </Row>
            <div className='mt-16'>
              <TicketList sorting={false} title='Recently Opened Tickets' pagination={false}/>
            </div>
        </div>
    </Content>
  );
};

export default HomePage;