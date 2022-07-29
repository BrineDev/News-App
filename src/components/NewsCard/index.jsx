import React from 'react'
import cls from './NewsCard.module.css' 

const NewsCard = ({ newsInfo }) => {

  const {
    author,
    content,
    description,
    publishedAt,
    title,
    url,
    urlToImage,
  } = newsInfo

  return (
    <div className={cls.root}>
      <div className={cls.img}>

        <div className={cls.title}>
          <p>{title}</p>
        </div>
        <div className={cls.logo}>News</div>
        <div className={cls.line}></div>
        <img src={urlToImage} />
      </div>

      <div className={cls.body}>
        <h1>Author - { author ? author : 'unknown?' }</h1>
        <p>{content}</p>
        <span>{publishedAt}</span>
      </div>
    </div>
  )

}

export default NewsCard