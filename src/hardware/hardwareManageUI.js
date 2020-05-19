import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, Table } from 'antd';
const hardwareUI = (props) => {
    return (
        <div className="hardList">
            <div className="headerNav">
                <span>硬件中心/硬件管理</span>
            </div>
            <div className="main">
                <div className="mainTop">
                    <div>
                        <Input
                            style={{ width: '250px', marginRight: '10px' }}
                            onChange={props.hardwareManageChangeValue}
                            value={props.hmInputValue}
                        />
                        <Button
                            type="primary"
                            onClick={props.hardwareManageSearchBtn}
                        >
                            搜索
                        </Button>
                    </div>
                </div>
                <div className="mainBottom">
                    <Table
                        columns={props.columns}
                        dataSource={props.list}
                        bordered
                    />
                </div>
            </div>
        </div>
    );
};
export default hardwareUI;
