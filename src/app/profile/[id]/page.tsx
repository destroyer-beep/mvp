import styles from './page.module.scss';
import Image from "next/image";
import Link from "next/link";

import profilePhoto from "./images/photo_empty.png";
import messages from "./images/messages.png";
import like from "./images/like.png";
import settings from "./images/settings.png";
import announcement from "./images/add_announs.png";
import fullStar from "./images/full_star.png";
import emptyStar from "./images/empty_star.png";

type Props = {
  params: {
    id: string
  }
}

export default function Profile({params: { id }}:Props) {
  console.log(id)
  return <section className={styles.profile}>
    <div className="container">
      <div className={styles.profile__container}>
        <div className={styles.header}>
          <div className={styles.view}>
            <div className={styles.photo}>
              <Image src={profilePhoto} width={250} height={250} alt={'Profile photo'} priority/>
            </div>
            <div className={styles.link}>
              <Link className={styles.link__item} href={"/profile/1"}>
                <Image src={messages} width={70} height={70} alt={'Messages'} priority/>
              </Link>
              <Link className={styles.link__item} href={"/profile/1"}>
                <Image src={like} width={70} height={70} alt={'Like'} priority/>
              </Link>
              <Link className={styles.link__item} href={"/profile/1"}>
                <Image src={settings} width={70} height={70} alt={'Settings'} priority/>
              </Link>
            </div>
          </div>
          <div className={styles.announcement}>
            <Image src={announcement} width={330} height={220} alt={'Announcement'} priority/>
            <h2 className={styles.announcement__title}>
              Выставить на продажу - легко
            </h2>
            <p className={styles.announcement__text}>
              Создайте объявление, и его увидят тысячи покупателей
            </p>
            <button className={styles.announcement__button}>Создать объявление</button>
          </div>
          <div className={styles.info}>
            <h3 className={styles.info__title}>
              Информация об аккаунте
            </h3>
            <div className={styles.rating}>
              <div>Ваш рейтинг</div>
              <div className={styles.rating__value}>4/5</div>
              <div className={styles.rating__stars}>
                <Image src={fullStar} width={27} height={43} alt={'Star'} priority/>
                <Image src={fullStar} width={27} height={43} alt={'Star'} priority/>
                <Image src={fullStar} width={27} height={43} alt={'Star'} priority/>
                <Image src={emptyStar} width={27} height={43} alt={'Star'} priority/>
                <Image src={emptyStar} width={27} height={43} alt={'Star'} priority/>
              </div>
            </div>

            <div className={styles.reviews}>
              <div className={styles.reviews__line}></div>
              <Link className={styles.reviews__link} href={"/profile/1"}>показать отзывы</Link>
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
      </div>
    </div>
  </section>
}