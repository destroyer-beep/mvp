'use client';
import styles from './ProductSection.module.scss';
import {useEffect, useState} from "react";
import Card from '../Card/Card';
import Image from "next/image";
import classNames from "classnames";

import arrow from "./images/arrow.png";
import product from "./images/product.png";
import CardInfo from "@/components/CardInfo/CardInfo";

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
  const [dataStruct, setDataStruct] = useState(data);
  const [dropdownShow, setDropdownShow] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('показать всё');
  const [cardInfoIndex, setCardInfoIndex]:any = useState(null);
  const toggleDropdown = ():void => {
    setDropdownShow(!dropdownShow);
  }

  const toggleCardInfoIndex = (index:number):void => {
    if(cardInfoIndex === index) setCardInfoIndex(null);
    else setCardInfoIndex(index)
    }

  return <section className={styles.products}>
    <div className={styles.products__header}>
      <h2 className={styles.products__title}>{title}  <span>({data.length})</span></h2>
      <div className={styles.products__collapse} onClick={toggleDropdown}>
        {dropdownValue}
        <span className={dropdownShow ? styles.products__collapse_hidden : ''}>
          <Image src={arrow} width={22} height={20} alt={'Arrow'} priority/>
        </span>

        <div className={classNames(styles.products__dropdown, dropdownShow ? styles.products__dropdown_active : '')}>
          <div className={styles.products__dropdown_item} onClick={() => setDropdownValue('показать всё')}>показать всё</div>
          <div className={styles.products__dropdown_item} onClick={() => setDropdownValue('фильтр 1')}>фильтр 1</div>
          <div className={styles.products__dropdown_item} onClick={() => setDropdownValue('фильтр 2')}>фильтр 2</div>
          <div className={styles.products__dropdown_item} onClick={() => setDropdownValue('фильтр 3')}>фильтр 2</div>
        </div>
      </div>
    </div>
    <div className={classNames(styles.products__wrapper, visibleInfo ? styles.products__wrapper_row : '')}>
      {dataStruct.map((dataItem:TProduct, index:number):JSX.Element => {
        return <div className={styles.products__card} key={Math.random()} onClick={() => visibleInfo && toggleCardInfoIndex(index)}>
          <Card data={dataItem} img={product}/>
          {index === cardInfoIndex && <CardInfo data={dataItem}/>}
        </div>
      })}
    </div>
  </section>;
}