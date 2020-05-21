import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from '../store/index';
import HardwareUI from './hardwareManageUI';
import { hardwareManageChangeAction, getHMList } from '../store/actionCreators';

class hardwareManage extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        // 输入框value
        this.hardwareManageChangeValue = this.hardwareManageChangeValue.bind(
            this
        );
        // 搜索btn
        this.hardwareManageSearchBtn = this.hardwareManageSearchBtn.bind(this);
        // 分页
        this.hardwareManagePa = this.hardwareManagePa.bind(this);
        // this.deleteItem = this.deleteItem.bind(this);
        this.storeChange = this.storeChange.bind(this); //转变this指向
        store.subscribe(this.storeChange); //订阅Redux的状态
        console.log(this.state);
    }
    render() {
        return (
            <HardwareUI
                hmInputValue={this.state.hmInputValue}
                hmlist={this.state.hmList}
                total={this.state.hmTotal}
                hmCurrent={this.state.hmCurrent}
                hardwareManageChangeValue={this.hardwareManageChangeValue}
                hardwareManageSearchBtn={this.hardwareManageSearchBtn}
                hardwareManagePa={this.hardwareManagePa}
            />
        );
    }
    hardwareManageChangeValue(e) {
        const action = hardwareManageChangeAction(e.target.value);
        store.dispatch(action);
    }
    hardwareManageSearchBtn() {
        let that = this;
        const action = getHMList(that.state);
        store.dispatch(action);
    }
    hardwareManagePa(page, pageSize) {
        let that = this;
        pageSize = 10;
        const action = getHMList(that.state, page);
        store.dispatch(action);
    }
    // deleteItem(index) {
    //     const action = deleteItemAction(index);
    //     store.dispatch(action);
    // }
    componentDidMount() {
        let that = this;
        const action = getHMList(that.state);
        store.dispatch(action);
    }
    storeChange() {
        this.setState(store.getState());
    }
}
export default hardwareManage;
