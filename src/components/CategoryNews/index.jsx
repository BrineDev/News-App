import React  from 'react'
import cls from './CategoryNews.module.css'

const CategoryNews = ({ categoryInfo }) => {
    const { 
      category,
      country,
      description,
      id,
      language,
      name,
      url,
    } = categoryInfo
  return (
    <div className={cls.root}>
          <h2 className={cls.name}>{name} </h2>
          <p>{description}</p>
          <a className={cls.link} href={url} target="_blank">Click</a>
    </div>
  )
}

export default CategoryNews 