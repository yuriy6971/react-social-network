import React from 'react'
import s from './News.module.css'; 

const News = (props) => {
    return (
        <div>
            <h1 className = {s.title}>
                This is a very good News!
            </h1>
        </div>
    )
}
export default News;
