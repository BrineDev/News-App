import React from 'react'
import { getAllNews } from '../../API'
import cls from './Main.module.css'
import NewsCard from '../../components/NewsCard'
import Spiner from '../../components/Spiner'

const Main = () => {
    const [news, setNews] = React.useState([])
    const [isloading, setIsLoading] = React.useState(true)


    React.useEffect(() => {
      getAllNews()
        .then(res => {
          const data = res.data.articles

          setNews(data)
          setIsLoading(true)
        })
        .finally(() => setIsLoading(false))
    }, [])


    if (isloading) return <Spiner />

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