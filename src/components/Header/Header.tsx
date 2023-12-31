import styles from './Header.module.scss'
import Link from "next/link";
import Image from "next/image";
import profileIcon from './images/profile_icon.png';
import favoritesIcon from './images/favorites_icon.png';
import searchIcon from './images/search_icon.png';
import messages from './images/messages.png';
import burgerIcon from './images/burgerIcon.png';
import like from './images/like.png';
import create from './images/create.png';
import settings from './images/settings.png';

export default function Header() {
  return <header className={styles.header}>
    <div className="container">
      <div className={styles.header__container}>
        <nav className={styles.nav}>
          <Link className={styles.link} href={"/"}>Главная</Link>
        </nav>
        <div className={styles.logo}>
          LOGO HERE
        </div>
        <div className={styles.links}>
          <div className={styles.links__wrapper}>
            <Link href={"/profile"} className={styles.links__item}>
              <Image
                src={profileIcon}
                width={32}
                height={32}
                alt={'Profile icon'}
                priority
              />
            </Link>
            <Link href={"/"} className={styles.links__item}>
              <Image
                  src={messages}
                  width={32}
                  height={32}
                  alt={'Messages icon'}
                  priority
              />
            </Link>
            <Link href={"/"} className={styles.links__item}>
              <Image
                  src={favoritesIcon}
                  width={32}
                  height={32}
                  alt={'Favorites icon'}
                  priority
              />
            </Link>
            <Link href={"/"} className={styles.links__item}>
              <Image
                  src={searchIcon}
                  width={32}
                  height={32}
                  alt={'Search icon'}
                  priority
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.header__mobile}>
        <button className={styles.header__mobile_burger}>
          <Image
              src={burgerIcon}
              width={32}
              height={32}
              alt={'Burger icon'}
              priority
          />
        </button>

        <div className={styles.header__mobile_logo}>
          LOGO HERE
        </div>

        <button className={styles.header__mobile_search}>
          <Image
              src={searchIcon}
              width={32}
              height={32}
              alt={'Burger icon'}
              priority
          />
        </button>
      </div>
    </div>

    <div className={styles.nav__mobile}>
      <nav className={styles.nav__mobile_items}>
        <div className={styles.nav__mobile_item}>
          <Link href={"/"} className={styles.links__item}>
            <Image
                src={like}
                width={32}
                height={32}
                alt={'Search icon'}
                priority
            />
          </Link>
          <span>Избранное</span>
        </div>
        <div className={styles.nav__mobile_item}>
          <Link href={"/"} className={styles.links__item}>
            <Image
                src={messages}
                width={32}
                height={32}
                alt={'Search icon'}
                priority
            />
          </Link>
          <span>Сообщения</span>
        </div>
        <div className={styles.nav__mobile_item}>
          <Link href={"/"} className={styles.links__item}>
            <Image
                src={create}
                width={32}
                height={32}
                alt={'Search icon'}
                priority
            />
          </Link>
          <span>Разместить</span>
        </div>
        <div className={styles.nav__mobile_item}>
          <Link href={"/"} className={styles.links__item}>
            <Image
                src={settings}
                width={32}
                height={32}
                alt={'Search icon'}
                priority
            />
          </Link>
          <span>Настройки</span>
        </div>
        <div className={styles.nav__mobile_item}>
          <Link href={"/"} className={styles.links__item}>
            <Image
                src={profileIcon}
                width={32}
                height={32}
                alt={'Search icon'}
                priority
            />
          </Link>
          <span>Аккаунт</span>
        </div>
      </nav>
    </div>
  </header>
}