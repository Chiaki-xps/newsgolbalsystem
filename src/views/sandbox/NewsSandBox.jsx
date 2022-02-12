import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './home/Home'
import UserList from './user-manage/UserList'
import RoleList from './right-manage/RoleList'
import RightList from './right-manage/RightList'
import Nopermission from './nopermission/Nopermission'

export default function NewsSandBox() {
  return (
    <div>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>

      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/user-manage/list' component={UserList} />
        <Route path='/right-manage/role/list' component={RoleList} />
        <Route path='/right-manage/right/list' component={RightList} />

        {/* Redirect必须放在Switch最后一行 */}
        {/* 由于是模糊匹配，如果上面都匹配不到，只要带斜杆的就一定能匹配到下面这个 */}
        {/* <Redirect from='/' to='/home'/> */}
        {/* 如果我们想要精确匹配的时候，加入exact */}
        <Redirect from='/' to='/home' exact />
        {/* *表示全部匹配。应该放到最后一行，用于最后显示所有匹配失败显示404 */}
        <Route path='*' component={Nopermission} />
      </Switch>
    </div>
  )
}
