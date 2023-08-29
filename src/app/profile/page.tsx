import styles from './page.module.scss';
import Image from "next/image";
import Link from "next/link";
import ProductSection from "@/components/ProductSection/ProductSection";

import profilePhoto from "./images/photo_empty.png";
import messages from "./images/messages.png";
import like from "./images/like.png";
import settings from "./images/settings.png";
import announcement from "./images/add_announs.png";
import fullStar from "./images/full_star.png";
import emptyStar from "./images/empty_star.png";

import data from '../../service/data';
import classNames from "classnames";


export default function Profile() {
  return <section className={styles.profile}>
    <div className="container">
      <div className={styles.profile__container}>
        <div className={styles.header}>
          <div className={classNames(styles.view, styles.wrapper)}>
            <div className={styles.photo}>
              <Image src={profilePhoto} alt={'Profile photo'} priority/>
            </div>
            <div className={styles.link}>
              <Link className={styles.link__item} href={"/profile/"}>
                <Image src={messages} style={{width: '100%', height: 'auto'}} alt={'Messages'} priority/>
              </Link>
              <Link className={styles.link__item} href={"/profile/"}>
                <Image src={like} style={{width: '100%', height: 'auto'}} alt={'Like'} priority/>
              </Link>
              <Link className={styles.link__item} href={"/profile/"}>
                <Image src={settings} style={{width: '100%', height: 'auto'}} alt={'Settings'} priority/>
              </Link>
            </div>
          </div>
          <div className={classNames(styles.announcement, styles.wrapper)}>
            <Image src={announcement} style={{width: '60%', height: 'auto'}} alt={'Announcement'} priority/>
            <div className={styles.announcement__wrapper}>
              <h2 className={styles.announcement__title}>
                Выставить на продажу - легко
              </h2>
              <p className={styles.announcement__text}>
                Создайте объявление, и его увидят тысячи покупателей
              </p>
            </div>
            <button className={styles.announcement__button}>Создать объявление</button>
          </div>
          <div className={classNames(styles.info, styles.wrapper)}>
            <h3 className={styles.info__title}>
              Информация об аккаунте
            </h3>
            <div className={styles.rating}>
              <div>Ваш рейтинг</div>
              <div className={styles.rating__value}>4/5</div>
              <div className={styles.rating__stars}>
                <Image src={fullStar} style={{width: '15%', height: 'auto'}} alt={'Star'} priority/>
                <Image src={fullStar} style={{width: '15%', height: 'auto'}} alt={'Star'} priority/>
                <Image src={fullStar} style={{width: '15%', height: 'auto'}} alt={'Star'} priority/>
                <Image src={emptyStar} style={{width: '15%', height: 'auto'}} alt={'Star'} priority/>
                <Image src={emptyStar} style={{width: '15%', height: 'auto'}} alt={'Star'} priority/>
              </div>
            </div>

            <div className={styles.reviews}>
              <div className={styles.reviews__line}></div>
              <Link className={styles.reviews__link} href={"/profile/"}>показать&nbsp;отзывы</Link>
            </div>

            <div className={styles.stat}>
              <div className={styles.stat__item}>
                <p className={styles.stat__item_name}>
                  Кол-во продаж
                </p>
                <div className={styles.stat__item_value}>
                  23
                </div>
              </div>
              <div className={styles.stat__item}>
                <p className={styles.stat__item_name}>
                  Кол-во покупок
                </p>
                <div className={styles.stat__item_value}>
                  27
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <ProductSection data={data} title={'Мои покупки'} visibleInfo={true}></ProductSection>
          <ProductSection data={data} title={'Мои объявления'} visibleInfo={false}></ProductSection>
          <ProductSection data={data} title={'Черновики'} visibleInfo={false}></ProductSection>
          <ProductSection data={data} title={'Архив покупок'} visibleInfo={false}></ProductSection>
          <ProductSection data={data} title={'Архив продаж'} visibleInfo={false}></ProductSection>
          <ProductSection data={data} title={'Избранное'} visibleInfo={false}></ProductSection>
        </div>
      </div>
    </div>
  </section>
}