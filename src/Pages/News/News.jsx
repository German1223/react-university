import React from 'react'
import Layout from '../../Components/Layout/Layout'

import "./News.css"
import NewsSection from '../../Components/NewsSection/NewsSection'

const News = () => {
  return (
    <Layout>
      <div className='news_page_cont'>
        <NewsSection/>
        <NewsSection/>
        <NewsSection/>
        <NewsSection/>
        <NewsSection/>
        <NewsSection/>
        <NewsSection/>
        <NewsSection/>  
      </div>
    </Layout>
  )
}

export default News
