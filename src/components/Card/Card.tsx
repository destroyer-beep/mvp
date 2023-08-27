'use client';
import styles from './Card.module.scss'
import Image from "next/image";

type TProduct = {
  name: string,
  title: string,
  price: number,
  status: string,
  owner: string,
  grade: number
}

type TData = {
  data: TProduct,
  img: any
}
export default function Card({data, img}:TData) {
  return <div className={styles.card}>
    <div className={styles.card__img}>
      <Image src={img} width={260} alt={'Product'} priority/>
    </div>
    <div className={styles.card__name}>{data.name}</div>
    <div className={styles.card__title}>{data.title}</div>
    <div className={styles.card__price}>от {data.price.toLocaleString('ru')} ₽</div>
  </div>
}