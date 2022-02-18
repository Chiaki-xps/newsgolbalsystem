import React, { useState, useEffect } from 'react'
import { Button, Table, Tag, Modal,Popover, Switch} from 'antd'
import axios from 'axios'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
const { confirm } = Modal
export default function RightList() {
    const [dataSource, setdataSource] = useState([])

    useEffect(() => {
        axios.get("/rights?_embed=children").then(res => {
            const list = res.data

            list.forEach(item => {
                if (item.children.length === 0) {
                    item.children = ""
                }
            })
            setdataSource(list)
        })
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (id) => {
                return <b>{id}</b>
            }
        },
        {
            title: '权限名称',
            dataIndex: 'title'
        },
        {
            title: "权限路径",
            dataIndex: 'key',
            render: (key) => {
                return <Tag color="orange">{key}</Tag>
            }
        },
        {
            title: "操作",
            render: (item) => {
                return <div>
                    <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => confirmMethod(item)} />
                    
                    <Popover content={<div style={{textAlign:"center"}}>
                        <Switch checked={item.pagepermisson} onChange={()=>switchMethod(item)}></Switch>
                    </div>} title="页面配置项" trigger={item.pagepermisson===undefined?'':'click'}>
                        <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={item.pagepermisson===undefined}/>
                    </Popover>
                </div>
            }
        }
    ];

    const  switchMethod = (item)=>{
        item.pagepermisson = item.pagepermisson===1?0:1
        // console.log(item)
        // 强制刷新
        setdataSource([...dataSource])

        if(item.grade===1){
            axios.patch(`/rights/${item.id}`,{
                pagepermisson:item.pagepermisson
            })
        }else{
            axios.patch(`/children/${item.id}`,{
                pagepermisson:item.pagepermisson
            })
        }
    }

    const confirmMethod = (item) => {
        confirm({
            title: '你确定要删除?',
            icon: <ExclamationCircleOutlined />,
            // content: 'Some descriptions',
            onOk() {
                //   console.log('OK');
                deleteMethod(item)
            },
            onCancel() {
                //   console.log('Cancel');
            },
        });

    }
    //删除
    const deleteMethod = (item) => {
        // console.log(item)
        // 当前页面同步状态 + 后端同步
        if (item.grade === 1) {
            setdataSource(dataSource.filter(data => data.id !== item.id))
            axios.delete(`/rights/${item.id}`)
        }else{
            // console.log('dataSource', dataSource)
            // 注意filter是一个浅拷贝
            let list = dataSource.filter(data=>data.id===item.rightId)
            // console.log('list', list)
            // list是一个对象数组，里面只有一项数据，因为点击时某一列而已。
            list[0].children = list[0].children.filter(data=>data.id!==item.id)
            // setdataSource(dataSource) 传入的引用和上一次一模一样所以不会刷新
            setdataSource([...dataSource])
            axios.delete(`/children/${item.id}`)
        }
    }

    return (
        <div>
            <Table dataSource={dataSource} columns={columns}
                pagination={{
                    pageSize: 5
                }} />
        </div>
    )
}
