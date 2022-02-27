import React, { useState } from 'react'
import { Layout, Dropdown,Menu ,Avatar} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const { Header } = Layout;

function TopHeader(props) {

    console.log(props)
    const [collapsed, setCollapsed] = useState(false)
    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const {role:{roleName},username} = JSON.parse(localStorage.getItem("token"))

    const menu = (
        <Menu>
            <Menu.Item>
                {roleName}
            </Menu.Item>
            <Menu.Item danger onClick={()=>{
                localStorage.removeItem("token")
                // console.log(props.history)
                props.history.replace("/login")
            }}>退出</Menu.Item>
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
                <span>欢迎<span style={{color:"#1890ff"}}>{username}</span>回来</span>
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>

    )
}
/*
 connect(
  // mapStateToProps  
  // mapDispatchToProps
 )(被包装的组件)
*/

const mapStateToProps = ({CollApsedReducer:{isCollapsed}})=>{
    // console.log(state)
    return {
        isCollapsed
    }
}

// mapStateToProps是我们想要传入定制的状态
// mapStateToProps会被传入合并的reduce所有最新的值
// 最终在我们传入的组件中会收到这个state，并在props中
export default connect(mapStateToProps)(withRouter(TopHeader))