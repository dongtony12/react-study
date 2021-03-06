import React from 'react';
import classNames from 'classnames/bind'
import styles from './CSSModule.module.scss'


const cx = classNames.bind(styles);

const CSSModule = () => {
    return (
        <div className={cx('wrapper','inverted')}>
            안녕하세요, 저는 <span className = "something">김동현 입니다.</span>
        </div>
    );
};

//wrapper는 기본적인 틀이고 inverted는 틀 안에 적용되는 style 여러개 계속해서 사용가능 

export default CSSModule;