import s from "./headerForMainPage.module.scss";

export default function HeaderForMainPage() {
  return (
    <div className={s.header}>
      <div className={s.navBar}>
        <div className={s.logo}>LOGO</div>
        <div className={s.settings}>
          <div className={s.lang}>Language</div>
          <div className={s.registration}>Registration</div>
        </div>
      </div>
    </div>
  );
}
