import React, { useState } from 'react'
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons';

const { Header } = Layout;

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const menu = (
    <Menu>
      <Menu.Item>
        超级管理员
      </Menu.Item>
      <Menu.Item danger>退出</Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-background" style={{ padding: '0 16px' }}>
      
      {/* 相当于一个三目选择渲染组件MenuUnfoldOutlined或者MenuFoldOutlined */}
      {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
      })} */}
      {/* 等价于 */}

      {
        collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />
      }

      <div style={{ float: "right" }}>
        <span>欢迎admin回来</span>
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>

  )
}

// Dropdown类似一个插槽要来显示里面的东西，预留一个位置