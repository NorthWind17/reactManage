import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
const hardwareUI = (props) => {
    const hmColumns = [
        {
            title: '企业名称',
            dataIndex: 'corp_name',
            key: 'corp_name',
            render: (text) => <a>{text}</a>,
            align: 'center',
        },
        {
            title: '企业ID',
            dataIndex: 'corp_id',
            key: 'corp_id',
            render: (text) => <span>{text}</span>,
            align: 'center',
        },
        {
            title: 'D2操作',
            key: 'Daction',
            render: () => (
                <Button type="primary" size="small" icon={<EditOutlined />}>
                    D2开通
                </Button>
            ),
            align: 'center',
        },
        {
            title: '扬尘监测操作',
            key: 'ycaction',
            render: () => (
                <Button type="primary" size="small" icon={<EditOutlined />}>
                    扬尘开通
                </Button>
            ),
            align: 'center',
        },
        {
            title: '视频监控操作',
            key: 'saction',
            render: () => (
                <Button type="primary" size="small" icon={<EditOutlined />}>
                    视频开通
                </Button>
            ),
            align: 'center',
        },
    ];
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
                        columns={hmColumns}
                        dataSource={props.hmlist}
                        bordered
                        pagination={{
                            position: ['none', 'bottomCenter'],
                            showQuickJumper: true,
                            pageSize: 10,
                            total: props.total,
                            current: props.hmCurrent,
                            onChange: props.hardwareManagePa,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default hardwareUI;
