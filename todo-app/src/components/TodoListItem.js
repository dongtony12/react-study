import React from 'react';

import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TOdoListItem.scss';

const TOdoListItem = ()=>{
    return(
        <div className = "TodoListItem">
            <div className = "checkBox">
                <MdCheckBoxOutlineBlank/>
                <div className="text">할 일</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>

        </div>
    );
};

export default TOdoListItem;