import { React, useEffect,  } from 'react'
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
      <div className={cls.box}>
        <div className={cls.body}>
          <h2 className={cls.name}>Author - {name} </h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryNews 