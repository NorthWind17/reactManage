import React, { Component } from 'react';

import { BrowserRouter as Link } from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { Input, Button, List } from 'antd';
const { SubMenu } = Menu;
class Header extends Component {
    state = {
        current: 'mail'
    };
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    };
    render() {
        return (
            <div className="topNav">
                <div className="navContent">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            <MailOutlined />
                            <Link to="/">首页</Link>
                        </Menu.Item>

                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                    <SettingOutlined />
                                    软件
                                </span>
                            }
                        >
                            <Menu.ItemGroup>
                                <Menu.Item key="setting:1">
                                    <Link to="">劳务实名制</Link>
                                </Menu.Item>
                                <Menu.Item key="setting:2">
                                    <Link to="">智慧工地</Link>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                    <SettingOutlined />
                                    硬件
                                </span>
                            }
                        >
                            <Menu.ItemGroup>
                                <Menu.Item key="setting:3">
                                    <Link to="">M2</Link>
                                </Menu.Item>
                                <Menu.Item key="setting:4">
                                    <Link to="">闸机</Link>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="study">
                            <MailOutlined />
                            <Link to="">学院</Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default Header;
