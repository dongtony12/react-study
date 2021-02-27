import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
box-sizing:border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width:768px){
    width: 100%;
    padding-left:1rem;
    padding-right:1rem;
}
`;

const NewsList = ({category}) =>{
    
    const [loading,response,error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category = ${category}`;
        return axios.get (
            `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=4b42b6c4f9ce4409b71d1e4b33b8e628`
        );
    },[category]);
    //대기 중일때

    if(loading) {
        return <NewsListBlock>대기중 ...</NewsListBlock>;
    }
    // 아직 article 값이 설정 안됫을때
    if(!response){
        return null;
    }

    if(error){
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    //article 값이 유효할 때
    const {articles} = response.data;
    return (
        <NewsListBlock>
            {articles.map(article=>(
            <NewsItem key={article.url} article = {article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;