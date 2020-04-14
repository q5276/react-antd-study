import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import TodoList from './components/TodoList'
import Logo from './logo.svg'
import './App.css'

const App = () => (
  <Layout className="layout">
    <Layout.Header>
      <div className="App-logo">
        <img src={Logo} alt="LOGO" />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">第一章</Menu.Item>
        <Menu.Item key="2">菜单2</Menu.Item>
        <Menu.Item key="3">菜单3</Menu.Item>
      </Menu>
    </Layout.Header>
    <Layout.Content style={{padding: '0 50px'}}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>第一章</Breadcrumb.Item>
        <Breadcrumb.Item>TodoList</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <TodoList></TodoList>
      </div>
    </Layout.Content>
    <Layout.Footer style={{ textAlign: 'center'}}> Tingno Created By Ant</Layout.Footer>
  </Layout>
);

export default App;