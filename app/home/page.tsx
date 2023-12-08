"use client"

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Divider, Dropdown, Space } from 'antd';

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
import { Layout, Menu, theme } from 'antd';
import HeaderTop from '@/components/HeaderTop';
import Image from 'next/image';
import Link from 'next/link';

const { Header, Content, Footer, Sider } = Layout;


const HomePage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
        <p>long content</p>
        {
            // indicates very long content
            Array.from({ length: 100 }, (_, index) => (
            <React.Fragment key={index}>
                {index % 20 === 0 && index ? 'more' : '...'}
                <br />
            </React.Fragment>
            ))
        }
        </div>
    </Content>
  );
};

export default HomePage;