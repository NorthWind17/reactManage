import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from '../store/index';
import HardwareUI from './hardwareManageUI';
import { hardwareManageChangeAction, getHMList } from '../store/actionCreators';

class hardwareManage extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.hardwareManageChangeValue = this.hardwareManageChangeValue.bind(
            this
        );
        this.hardwareManageSearchBtn = this.hardwareManageSearchBtn.bind(this);
        // this.deleteItem = this.deleteItem.bind(this);
        this.storeChange = this.storeChange.bind(this); //转变this指向
        store.subscribe(this.storeChange); //订阅Redux的状态
        console.log(this.state);
    }
    render() {
        return (
            <HardwareUI
                inputValue={this.state.hmInputValue}
                list={this.state.hmList}
                columns={this.state.hmColumns}
                hardwareManageChangeValue={this.hardwareManageChangeValue}
                hardwareManageSearchBtn={this.hardwareManageSearchBtn}
            />
        );
    }
    hardwareManageChangeValue(e) {
        const action = hardwareManageChangeAction(e.target.value);
        store.dispatch(action);
    }
    hardwareManageSearchBtn() {
        const action = getHMList();
        store.dispatch(action);
    }
    // deleteItem(index) {
    //     const action = deleteItemAction(index);
    //     store.dispatch(action);
    // }
    componentDidMount() {
        // axios
        //     .get(
        //         'https://www.easy-mock.com/mock/5e7c4691a123277163210d74/example/getList'
        //     )
        //     .then(res => {
        //         const data = res.data;
        //         const action = getListAction(data);
        //         store.dispatch(action);
        //     });
        const action = getHMList();
        store.dispatch(action);
    }
    storeChange() {
        this.setState(store.getState());
    }
}
export default hardwareManage;
