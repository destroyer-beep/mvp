'use client';
import styles from './CardInfo.module.scss'
import {useState} from "react";
import fullStar from "./images/full_star.png";
import emptyStar from "./images/empty_star.png";
import Image from "next/image";
import classNames from "classnames";

type TProduct = {
  name: string,
  title: string,
  price: number,
  status: string,
  owner: string,
  grade: number
}

type TData = {
  data: TProduct
}
export default function CardInfo({data}:TData) {
  const [grade, setGrade] = useState(data.grade - 1);
  const gradeItems = [0, 1, 2, 3, 4];

  return <div className={styles.card}>
    <div className={styles.card__content}>
      <div className={styles.card__content_row}>
        <div className={styles.card__content_item}>Статус</div>
        <div className={styles.card__content_item}>{data.status}</div>
      </div>
      <div className={styles.card__content_row}>
        <div className={styles.card__content_item}>Продавец</div>
        <div className={styles.card__content_item}><span>{data.owner}</span></div>
      </div>
      <div className={classNames(styles.card__content_row, styles.card__content_grades)}>
        <div className={styles.card__content_item}>Оценка</div>
        <div className={styles.card__content_item}>
          <span>{data.grade}/5</span>
          <div className={styles.card__content_stars}>
            {gradeItems.map(value => {
              if(value <= grade) return <Image key={Math.random()} onMouseOver={() => setGrade(value)} onMouseOut={() => setGrade(data.grade - 1)} src={fullStar} style={{width: '80%', height: 'auto'}} alt={'Star'} priority/>;
              else return <Image key={Math.random()} onMouseOver={() => setGrade(value)} onMouseOut={() => setGrade(data.grade - 1)} src={emptyStar} style={{width: '80%', height: 'auto'}} alt={'Star'} priority/>
            })}
          </div>
        </div>
      </div>
    </div>
    <button className={styles.card__btn} onClick={e => e.stopPropagation()}>Написать отзыв о покупке</button>
  </div>
}