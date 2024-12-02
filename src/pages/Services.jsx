import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import './Services.css'

export default function Services() {

    let [NewsData,setNewsData]=useState([]);
    useEffect(()=>{
      async function getData() {
        let res= await axios.get("https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=b36ab926a63e4c05b52064343e748fdf")
        console.log(res.data.articles);
        setNewsData(res.data.articles)
      }
      getData()
    })
  return (
    <div className='NewsGrid'>
      {
         NewsData.map((e)=>(
          <div key={e.url} className='NewsCard'>

            <img src={e.urlToImage} alt="" />
            <h2>{e.title}</h2>
            <h3>{e.author}</h3>
            <h4>Publish BY:{e.name}</h4>
            <button>Read More</button>

          </div>
         ))
      }

    </div>
  )
}
