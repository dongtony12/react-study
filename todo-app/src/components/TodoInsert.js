import React,{useState,useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) =>{
    const [value, setValue] = useState('');

    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e=>{
            onInsert(value);
            setValue(''); // value 초기화

            //submit 이벤트는 browser 초기화
            //이를 방지하기위해 함수 호출
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit = {onSubmit}>
            <input 
            placeholder="할일을 입력하세요" 
            value={value}
            onChange={onChange}
            />
            <button type = "submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;