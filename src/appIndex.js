import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import hardwareManage from './hardware/hardwareManage';
// import Video from './studyR/video';
import './index.less';
// import Index from './pages/index';
// import Study from './pages/study';
// import Footer from './pages/footer';
// import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
class AppIndex extends Component {
    rootSubmenuKeys = [
        'sub1',
        'sub2',
        'sub3',
        'sub4',
        'sub5',
        'sub6',
        'sub7',
        'sub8',
    ];
    state = {
        openKeys: ['sub1'],
    };
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(
            (key) => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    handleClick = (e) => {
        console.log('click ', e);
        // this.setState({
        //     current: e.key,
        // });
    };
    render() {
        return (
            <Router>
                <div className="appIndex">
                    <div className="topNav">
                        <div className="navContent">
                            <h3>钉钉劳务管理系统</h3>
                            <div>
                                <span className="rightName">admin</span>
                                <span>|</span>
                                <span className="rightLogot">安全退出</span>
                            </div>
                        </div>
                    </div>
                    <div className="mainContent">
                        <div className="mainContentLeft">
                            <Menu
                                onClick={this.handleClick}
                                openKeys={this.state.openKeys}
                                onOpenChange={this.onOpenChange}
                                mode="inline"
                                theme="dark"
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span className="submenu-title-wrapper">
                                            <SettingOutlined />
                                            客户中心
                                        </span>
                                    }
                                >
                                    <Menu.ItemGroup>
                                        <Menu.Item key="setting:1">
                                            <Link to="">企业管理</Link>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span className="submenu-title-wrapper">
                                            <SettingOutlined />
                                            广告中心
                                        </span>
                                    }
                                >
                                    <Menu.ItemGroup>
                                        <Menu.Item key="setting:2">
                                            <Link to="">广告管理</Link>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span className="submenu-title-wrapper">
                                            <SettingOutlined />
                                            劳务管理
                                        </span>
                                    }
                                >
                                    <Menu.ItemGroup>
                                        <Menu.Item key="setting:3">
                                            <Link to="">实名管理</Link>
                                        </Menu.Item>
                                        <Menu.Item key="setting:4">
                                            <Link to="">支付管理</Link>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                                <SubMenu
                                    key="sub4"
                                    title={
                                        <span className="submenu-title-wrapper">
                                            <SettingOutlined />
                                            劳务广场
                                        </span>
                                    }
                                >
                                    <Menu.ItemGroup>
                                        <Menu.Item key="setting:5">
                                            <Link to="">班组招聘</Link>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                                <SubMenu
                                    key="sub5"
                                    title={
                                        <span className="submenu-title-wrapper">
                                            <SettingOutlined />
                                            硬件中心
                                        </span>
                                    }
                                >
                                    <Menu.ItemGroup>
                                        <Menu.Item key="setting:6">
                                            <Link to="/hardwareManage">
                                                硬件管理
                                            </Link>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                                <SubMenu
                                    key="sub6"
                                    title={
                                        <span className="submenu-title-wrapper">
                                            <SettingOutlined />
                                            报盘管理
                                        </span>
                                    }
                                >
                                    <Menu.ItemGroup>
                                        <Menu.Item key="setting:7">
                                            <Link to="">全国报盘</Link>
                                        </Menu.Item>
                                        <Menu.Item key="setting:8">
                                            <Link to="">地方报盘</Link>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                                <SubMenu
                                    key="sub7"
                                    title={
                                        <span className="submenu-title-wrapper">
                                            <SettingOutlined />
                                            显示管理
                                        </span>
                                    }
                                >
                                    <Menu.ItemGroup>
                                        <Menu.Item key="setting:9">
                                            <Link to="">降级设置</Link>
                                        </Menu.Item>
                                        <Menu.Item key="setting:10">
                                            <Link to="">模块设置</Link>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                                <SubMenu
                                    key="sub8"
                                    title={
                                        <span className="submenu-title-wrapper">
                                            <SettingOutlined />
                                            关于系统
                                        </span>
                                    }
                                >
                                    <Menu.ItemGroup>
                                        <Menu.Item key="setting:11">
                                            <Link to="">帮助条款</Link>
                                        </Menu.Item>
                                        <Menu.Item key="setting:12">
                                            <Link to="">服务条款</Link>
                                        </Menu.Item>
                                        <Menu.Item key="setting:13">
                                            <Link to="">意见反馈</Link>
                                        </Menu.Item>
                                        <Menu.Item key="setting:14">
                                            <Link to="">关于我们</Link>
                                        </Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                            </Menu>
                        </div>
                        <div className="mainContentRight">
                            <Route
                                path="/hardwareManage"
                                component={hardwareManage}
                            />
                        </div>
                    </div>
                    {/* <div className="mainContent">
                        <Route path="/" exact component={Index} />
                        <Route path="/Study" component={Study} />
                    </div>
                    <Footer></Footer> */}
                </div>
            </Router>
        );
    }
}

export default AppIndex;
