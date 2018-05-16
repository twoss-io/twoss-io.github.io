import {
    PRE_IMG,
    NXT_IMG,
    DIS_IMG
} from '../actions/actions'

const initialState = {
    now: 0,
    total: 6,
    show:true,
    imgs: [
        require("../img/githublesson.jpg"), require("../img/hudson.jpg"), require("../img/invitation.png"), require("../img/pexels-photo-60132.jpeg"), require("../img/pexels-photo-336232.jpeg"), require("../img/pexels-photo-210158.jpeg")
    ],
    text: [{
        a: 'Git 版本控制入門',
        b: '2018/05/26(六) 下午14:00~17:00'
    },{
        a: '開源貢獻者培育方案',
        b: '02/10-03/31 受理報名'
    },{
        a: '',
        b: ''
    },{
        a: '開放源始碼力量',
        b: '成就非凡'
    },{
        a: 'TensorFlow',
        b: '語音/語者辨識, 影像分類/辨識'
    }, {
        a: 'OpenStack',
        b: 'VM高容錯及雲端資源管理, 效能監控'
    }]
}

export default function imgs(state = initialState, action) {
    let num = state.now
    let set = 0
    switch (action.type) {
        case PRE_IMG:
            if (num === 0) {
                set = state.total-1
            } else {
                set = num - 1
            }
            return {
                ...state,
                now: set
            }

        case NXT_IMG:
            if (num === state.total-1) {
                set = 0
            } else {
                set = num + 1
            }
            return {
                ...state,
                now: set
            }
        case DIS_IMG:
            return {
                ...state,
                show:action.show
            }
        default:
            return state
    }

}