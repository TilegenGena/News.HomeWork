import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {OPTION} from "../Helpers/const"
import MediaCard from "../components/MediaCard"

const News = () => {
    const [data, setData] = useState(null)

    async function getData() {
        const response = await axios.request(OPTION)
        console.log(response);
        setData(response.data)
    }
    useEffect(() => {
        getData()
    }, [])
    if (!data) {
        return <h2> Loading...</h2>
    }
    return (
        <div>
            <h1> News</h1>
            <div className="news">
                {data.map((item)=> (
                 <MediaCard key={item.id} item={item}/>
                )   
            )}
            </div>
        </div>
    );
};

export default News;