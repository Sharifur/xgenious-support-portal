
import type { MenuProps } from 'antd';
import { Alert, Avatar, Button, Dropdown, Flex, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Layout, Menu, theme } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const HeaderTop = () => {


    const editProfileClick = () => {
        alert("edit profile");
    }

    const {
        token: { colorBgContainer },
      } = theme.useToken();

    const items: MenuProps['items'] = [
        {
          label: <Link onClick={editProfileClick} href={"/edit-profile"}>Edit Profile</Link>,
          key: '0',
        },
        {
          label: <Link href={"/change-password"}>Change Password</Link>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <Link href={"/logout"}>Logout</Link>,
          key: '3',
        },
      ];

    return ( 
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className={'px-5'}>
            <Flex align={"center"} justify={"space-between"}>
                <span></span>
                <div className='flex gap-4 items-center'>
                  <Button type={"default"}>
                    <Link href={"/new-ticket"}>New Ticket</Link>
                  </Button>
                  <Dropdown menu={{ items }} trigger={['click']}>
                      <a onClick={(e) => e.preventDefault()}>
                      <Space>
                          <Avatar>Sh</Avatar> <span className='text-black'>Sharifur</span>
                          <ChevronDown className='w-4 h-4 text-black'/>
                      </Space>
                      </a>
                  </Dropdown>
                </div>
            </Flex>
            </div>
        </Header>
     );
}
 
export default HeaderTop;