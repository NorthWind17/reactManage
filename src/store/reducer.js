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
    hmInputValue: '',
    hmData: {},
    hmList: [],
    hmTotal: '',
    hmCurrent: '1',
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
        newState.hmInputValue = action.value;
        return newState;
    }
    // 硬件管理搜索按钮
    if (action.type === HMSEARCH_BTN) {
        //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state));
        newState.hmData = action.data;
        newState.hmList = action.data.content.list;
        newState.hmTotal = action.data.content.total;
        newState.hmCurrent = action.data.content.current_page;
        return newState;
    }
    // 硬件企业列表
    if (action.type === GET_HMLIST) {
        //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state));
        console.log('666++' + action.data);
        console.log('我++' + action.page);
        newState.hmData = action.data;
        newState.hmList = action.data.content.list;
        newState.hmTotal = action.data.content.total;
        newState.hmCurrent = action.data.content.current_page;
        return newState;
    }
    return state;
};
