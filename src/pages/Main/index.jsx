import React from 'react'
import { getAllNews } from '../../API'
import cls from './Main.module.css'
import NewsCard from '../../components/NewsCard'

const Main = () => {
    const [news, setNews] = React.useState([])


    React.useEffect(() => {
      getAllNews()
        .then(res => {
          const data = res.data.articles

          setNews(data)
        })
    }, [])

    // console.log(news)

    if (!news) return <h1>Please wait...</h1>

  return (
    <div>

      <div className={cls.newsList}>
        {
          news.map((articles) => (
            <NewsCard key={articles.content}
              newsInfo={articles}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Main