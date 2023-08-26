import styles from './Header.module.scss'
import Link from "next/link";
import Image from "next/image";
import profileIcon from './images/profile_icon.png';
import favoritesIcon from './images/favorites_icon.png';
import searchIcon from './images/search_icon.png';

export default function Header() {
  return <header className={styles.header}>
    <div className="container">
      <div className={styles.header__container}>
        <nav className={styles.nav}>
          <Link className={styles.link} href={"/profile/1"}>Коллекция</Link>
          <Link className={styles.link} href={"/profile/1"}>Лимитированное</Link>
          <Link className={styles.link} href={"/profile/1"}>Пред-заказы</Link>
          <Link className={styles.link} href={"/profile/1"}>Распродажа</Link>
        </nav>
        <div className={styles.logo}>
          LOGO HERE
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttons__wrapper}>
            <button className={styles.buttons__item}>
              <Image
                src={profileIcon}
                width={32}
                height={32}
                alt={'Profile icon'}
                priority
              />
            </button>
            <button className={styles.buttons__item}>
              <Image
                  src={favoritesIcon}
                  width={32}
                  height={32}
                  alt={'Favorites icon'}
                  priority
              />
            </button>
            <button className={styles.buttons__item}>
              <Image
                  src={searchIcon}
                  width={32}
                  height={32}
                  alt={'Search icon'}
                  priority
              />
            </button>
          </div>
            <button className={styles.basket}>Корзина ( 2 )</button>
        </div>
      </div>
    </div>
  </header>
}