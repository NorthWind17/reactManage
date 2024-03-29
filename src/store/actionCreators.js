import axios from 'axios';
import {
    CHANGE_INPUT,
    ADD_ITEM,
    DELETE_ITEM,
    GET_LIST,
    HMCHANGE_INPUT,
    GET_HMLIST,
} from './actionTypes';

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value,
});
export const addItemAction = () => ({
    type: ADD_ITEM,
});
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index,
});
export const getListAction = (data) => ({
    type: GET_LIST,
    data,
});
export const getToList = () => {
    return (dispatch) => {
        axios
            .get(
                'https://www.easy-mock.com/mock/5e7c4691a123277163210d74/example/getList'
            )
            .then((res) => {
                const data = res.data;
                const action = getListAction(data);
                dispatch(action);
                console.log(data);
            });
    };
};
//硬件管理搜索企业输入框
export const hardwareManageChangeAction = (value) => ({
    type: HMCHANGE_INPUT,
    value,
});
// //硬件管理搜索企业按钮
// export const hardwareManageSearchAction = (data) => ({
//     type: GET_HMLIST,
//     data,
// });
// //硬件分页
// export const hardwareManagePaAction = (data) => ({
//     type: GET_HMLIST,
//     data,
// });
// 硬件企业列表
export const getHMListAction = (data) => ({
    type: GET_HMLIST,
    data,
});
export const getHMList = (newData, page) => {
    console.log('444++' + newData.hmCurrent);
    return (dispatch) => {
        axios.post('https://zhihui.zzdingyun.com/ding/corplist').then((res) => {
            const data = res.data;
            const action = getHMListAction(data, page);
            dispatch(action);
            console.log(data);
        });
        // axios({
        //     method: 'post',
        //     url: 'https://zhihui.zzdingyun.com/ding/corplist',
        //     headers: {
        //         'Content-type': 'application/json;charset=UTF-8',
        //     },
        //     data: {
        //         corp_name: '',
        //         current_page: 1,
        //     },
        // }).then((res) => {
        //     const data = res.data;
        //     const action = getHMListAction(data);
        //     dispatch(action);
        //     console.log(res.data);
        // });
    };
};
