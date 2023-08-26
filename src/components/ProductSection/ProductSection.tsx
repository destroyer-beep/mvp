'use client';
import styles from './ProductSection.module.scss';
import {useEffect, useState} from "react";
import Card from '../Card/Card';
import Image from "next/image";

import arrow from "./images/arrow.png";
import product from "./images/product.png";

type TProduct = {
  name: string,
  title: string,
  price: number,
  status: string,
  owner: string,
  grade: number
}

type TProps = {
  data: Array<TProduct>,
  visibleInfo: boolean,
  title: string
}

export default function ProductSection({data, visibleInfo, title}:TProps) {
  const [viewCountProducts, setViewCountProducts] = useState(4);
  const [dataStruct, setDataStruct] = useState(data?.slice(0, viewCountProducts));

  useEffect(() => {
    setDataStruct(data?.slice(0, viewCountProducts));
  }, [viewCountProducts]);

  const showProduct = () => {
    if(viewCountProducts === data.length) setViewCountProducts(4);
    else setViewCountProducts(data.length);
  }

  return <section className={styles.products}>
    <div className={styles.products__header}>
      <h2 className={styles.products__title}>{title}  <span>({data.length})</span></h2>
      <p className={styles.products__collapse} onClick={showProduct}>
        показать всё
        <span>
          <Image src={arrow} width={22} height={20} alt={'Arrow'} priority/>
        </span>
      </p>
    </div>
    <div className={styles.products__wrapper}>
      {dataStruct.map(dataItem => {
        return <div key={Math.random()}>
          <Card data={dataItem} img={product}/>
        </div>
      })}
    </div>
  </section>;
}