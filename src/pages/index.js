import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
// import Index from './studyR/stydyIndex';
// import Video from './studyR/video';
// import './index.less';
// import Footer from './pages/footer';
// import { MailOutlined, SettingOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
class Index extends Component {
    render() {
        return (
            <div className="mainPages">
                <div>
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Index;
