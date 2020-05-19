import React from 'react';
import {
    CHANGE_INPUT,
    ADD_ITEM,
    DELETE_ITEM,
    GET_LIST,
    HMCHANGE_INPUT,
    HMSEARCH_BTN,
    GET_HMLIST,
} from './actionTypes';
const defaultState = {
    inputValue: 'Write Something',
    // list: ['早上4点起床，锻炼身体', '中午下班游泳一小时', '打游戏']
    list: [],
    hmList: [],
    hmInputValue: '',
    hmColumns: [
        {
            title: '企业名称',
            dataIndex: 'corp_name',
            key: 'corp_name',
            render: (text) => <button>{text}</button>,
            align: 'center',
        },
        {
            title: '企业ID',
            dataIndex: 'corp_id',
            key: 'corp_id',
            render: (corp_id) => `${corp_id.first} ${corp_id.last}`,
            align: 'center',
        },
        {
            title: 'D2操作',
            key: 'Daction',
            render: () => <button>D2开通</button>,
            align: 'center',
        },
        {
            title: '扬尘监测操作',
            key: 'ycaction',
            render: () => <button>扬尘开通</button>,
            align: 'center',
        },
        {
            title: '视频监控操作',
            key: 'saction',
            render: () => <button>视频开通</button>,
            align: 'center',
        },
    ],
}; //默认数据
export default (state = defaultState, action) => {
    //就是一个方法函数
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM) {
        //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue); //push新的内容到列表中去
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1); //删除数组中对应的值
        return newState;
    }
    if (action.type === GET_LIST) {
        //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data.data.list; //复制性的List数组进去
        return newState;
    }
    // 硬件管理搜索输入框
    if (action.type === HMCHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
        newState.inputValue = action.value;
        return newState;
    }
    // 硬件管理搜索按钮
    if (action.type === HMSEARCH_BTN) {
        //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state));
        newState.hmList = action.data.content.list;
        return newState;
    }
    // 硬件企业列表
    if (action.type === GET_HMLIST) {
        //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state));
        newState.hmList = action.data.content.list;
        return newState;
    }
    return state;
};