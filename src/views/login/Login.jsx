import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export default function Login() {

  useEffect(()=> {
    // 测试跨域，不成功重启或者换一个接口试试
    axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4').then(res => {
      console.log('res.data++++', res.data)
    })
  },[])

  useEffect(()=>{
    axios.get("/ajax/movieOnInfoList?token=&optimus_uuid=74B5F0A032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708C120&optimus_risk_level=71&optimus_code=10").then(res=>{
      console.log('res.data----', res.data)
    })
  },[])

  useEffect(()=>{
    axios.get("/speed").then(res=>{
      console.log('res.data====', res.data)
    })
  },[])

  return (
    <div>Login</div>
  )
}
