import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 문자열 맨앞의 ?를 생략
    });
    const showDetail = query.detail === 'true'; // 파싱결과값은 문자열
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
            {showDetail && <p>detail값을 true로 설정!</p>}
        </div>
    );
};

export default About;