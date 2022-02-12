import React, { useState } from 'react'
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

const { Header } = Layout;

export default function TopHeader() {
  const [collapsed] = useState(false)
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>

      {/* 相当于一个三目选择渲染组件MenuUnfoldOutlined或者MenuFoldOutlined */}
      {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
      })} */}
      {/* 等价于 */}
      {
        collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
      }
    </Header>

  )
}
