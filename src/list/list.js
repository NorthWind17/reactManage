import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from '../store/index';
import ToListUI from './listUi';
import {
    changeInputAction,
    addItemAction,
    deleteItemAction,
    getToList
} from '../store/actionCreators';

class ToList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.storeChange = this.storeChange.bind(this); //转变this指向
        store.subscribe(this.storeChange); //订阅Redux的状态
        console.log(this.state);
    }
    render() {
        return (
            // <div style={{ margin: '10px' }}>
            //     <div>
            //         <Input
            //             placeholder={this.state.inputValue}
            //             onChange={this.changeInputValue}
            //             style={{ width: '250px' }}
            //             value={this.state.inputValue}
            //         />
            //         <Button type="primary" onClick={this.clickBtn}>
            //             增加
            //         </Button>
            //     </div>
            //     <div style={{ margin: '10px', width: '300px' }}>
            //         <List
            //             bordered
            //             dataSource={this.state.list}
            //             renderItem={(item, index) => (
            //                 <List.Item
            //                     onClick={this.deleteItem.bind(this, index)}
            //                 >
            //                     {item}
            //                 </List.Item>
            //             )}
            //         />
            //     </div>
            // </div>
            <ToListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
        );
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }
    clickBtn() {
        const action = addItemAction();
        store.dispatch(action);
    }
    deleteItem(index) {
        const action = deleteItemAction(index);
        store.dispatch(action);
    }
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
        const action = getToList();
        store.dispatch(action);
    }
    storeChange() {
        this.setState(store.getState());
    }
}
export default ToList;
