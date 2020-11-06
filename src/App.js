import React from 'react';
import { without } from 'lodash';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined,
  PlusOutlined
} from '@ant-design/icons';
import {
  InventoryList,
  AddNewInventory,
  Error
} from './components';

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      inventory: [],
      loading: true,
      lastIndex: 0,
      filterTable: null,
      searchTableValue: null,
      visible: false,
      record: []
    };
  };

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  search = value => {
    const { inventory } = this.state;
    console.log("PASS", { value });

    const filterTable = inventory.filter(o =>
      Object.keys(o).some(k =>
        String(o[k])
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );

    this.setState({ filterTable, searchTableValue: value });
  };

  clear = () => {
    this.setState({ filterTable: null, searchTableValue: null });
  }

  deleteRecord = record => {
    let tempInventory = this.state.inventory;
    tempInventory = without(tempInventory, record);

    this.setState({ inventory: tempInventory });
  };

  editRecord = record => {
    this.setState({ visible: true, record: record });
  };

  onCreate = values => {
    console.log('Received values of form: ', values);
    this.setState({ visible: false });
  };

  onCancel = () => {
    this.setState({ visible: false });
  }

  componentDidMount() {
    fetch('./data-InventoryList.json')
      .then(response => response.json())
      .then(result => {
        const inventory = result.map(item => {
          item.itemId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        })
        this.setState({ inventory: inventory, loading: false })
      })
  }

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
                <Route path='/' exact component={(props) => (
                  <InventoryList
                    {...this.state}
                    search={this.search}
                    clear={this.clear}
                    deleteRecord={this.deleteRecord}
                    editRecord={this.editRecord}
                    onCreate={this.onCreate}
                    onCancel={this.onCancel}
                  />
                )} />
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