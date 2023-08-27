import styles from './Header.module.scss'
import Link from "next/link";
import Image from "next/image";
import profileIcon from './images/profile_icon.png';
import favoritesIcon from './images/favorites_icon.png';
import searchIcon from './images/search_icon.png';
import messages from './images/messages.png';

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
    </div>
  </header>
}