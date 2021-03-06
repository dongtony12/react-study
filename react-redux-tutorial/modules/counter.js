const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
//액션타입 정의 
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
// 액션 생성 함수

const initialState = {
    number: 0
};

// 초기상태 

//리듀서 함수
function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default counter;

//export는 여러개 가능 
//export default는 한개만 가능 