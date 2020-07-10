import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined,
  EditOutlined,
  PlusOutlined
} from '@ant-design/icons';
import {
  InventoryList,
  UpdateInventory,
  AddNewInventory,
  Error
} from './components';

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">
              Inventory
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="inventory-list" icon={<UnorderedListOutlined />}>
                <Link to='/'>
                  Inventory List
                </Link>
              </Menu.Item>
              <Menu.Item key="update-inventory" icon={<EditOutlined />}>
                <Link to='/UpdateInventory'>
                  Update Inventory
                </Link>
              </Menu.Item>
              <Menu.Item key="add-new-inventory" icon={<PlusOutlined />}>
                <Link to='/AddNewInventory'>
                  Add New Inventory
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path='/' exact component={InventoryList} />
                <Route path='/UpdateInventory' exact component={UpdateInventory} />
                <Route path='/AddNewInventory' exact component={AddNewInventory} />
                <Route component={Error} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;