import React from 'react'
import { Card, Col, Row, List,Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

// import axios from 'axios'
export default function Home() {

    // eslint-disable-next-line no-unused-vars
    const ajax = () => {

        // id获取到对应id数据
        // http://localhost:8000/posts/:id 

        //取数据  get
        // axios.get("http://localhost:8000/posts/2").then(res=>{
        //     console.log(res.data)
        // })

        // 增  post id自增长
        // axios.post("http://localhost:8000/posts",{
        //     title:"33333",
        //     author:"xiaoming"
        // })

        // 更新 put 全部替换
        // axios.put("http://localhost:8000/posts/1",{
        //     title:"1111-修改"
        // })

        // 更新 patch 局部更新
        // axios.patch("http://localhost:8000/posts/1",{
        //     title:"1111-修改-11111"
        // }) 

        // 删除  delete
        // axios.delete("http://localhost:8000/posts/1")

        // _embed 获取相关联的表，固定拼接?_embed=想要相关联的数据库表名（json中应该算是对象）
        // axios.get("http://localhost:8000/posts?_embed=comments").then(res=>{
        //     console.log(res.data)
        // })

        // _expand 根据关联的id向上查找
        // axios.get("http://localhost:8000/comments?_expand=post").then(res=>{
        //     console.log(res.data)
        // })
    }
    
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="用户最常浏览" bordered={true}>
                        <List
                            size="small"
                            // bordered
                            dataSource={["1111", "222", "33333"]}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="用户点赞最多" bordered={true}>
                        <List
                            size="small"
                            // bordered
                            dataSource={["1111", "222", "33333"]}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
