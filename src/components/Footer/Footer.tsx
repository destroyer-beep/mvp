import styles from './Footer.module.scss'
import Link from "next/link";

export default function Footer() {
  return <footer className={styles.footer}>
    <div className="container">
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>LOGO HERE</div>
        <div className={styles.footer__links}>
          <div className={styles.footer__links_wrapper}>
            <Link className={styles.footer__links_phone} href={'tel:+78007707021'}>8 800 770 70 21</Link>
            <div className={styles.footer__links_text}>круглосуточный телефон call-центра</div>
            <Link  className={styles.footer__links_social} href={'/profile'}>Написать в WhatsApp</Link>
          </div>

          <div className={styles.footer__links_wrapper}>
            <b2 className={styles.footer__links_title}>О НАС</b2>
            <Link href={'/profile'} className={styles.footer__links_item}>политика обработки персональных данных</Link>
            <Link href={'/profile'} className={styles.footer__links_item}>документы сайта</Link>
            <Link href={'/profile'} className={styles.footer__links_item}>вакансии</Link>
            <Link href={'/profile'} className={styles.footer__links_item}>наши магазины</Link>
          </div>

          <div className={styles.footer__links_wrapper}>
            <h2 className={styles.footer__links_title}>Клиентам</h2>
            <Link href={'/profile'} className={styles.footer__links_item}>заказы и доставка</Link>
            <Link href={'/profile'} className={styles.footer__links_item}>возврат товара</Link>
            <Link href={'/profile'} className={styles.footer__links_item}>бонусная программа</Link>
          </div>

          <div className={styles.footer__links_wrapper}>
            <h2 className={styles.footer__links_title}>контакты</h2>
            <Link href={'/profile'} className={styles.footer__links_item}>общие контакты</Link>
            <Link href={'/profile'} className={styles.footer__links_item}>отдел развития</Link>
            <Link href={'/profile'} className={styles.footer__links_item}>отдел маркетинга и рекламы</Link>
            <Link href={'/profile'} className={styles.footer__links_item}>отдел закупа</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
}