import s from "./Footer.module.scss";

export default function FooterForMainPage() {
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.footerContent}>
          <div className={s.footerCards}>
            <h2>Product</h2>
            <ul>
              <li>
                <p>Features</p>
              </li>
              <li>
                <p>Case studies</p>
              </li>
              <li>
                <p>Book Demo</p>
              </li>
            </ul>
          </div>
          <div className={s.footerCards}>
            <h2>About</h2>
            <ul>
              <li>
                <p>Company</p>
              </li>
              <li>
                <p>Team</p>
              </li>
              <li>
                <p>Presentation</p>
              </li>
            </ul>
          </div>
          <div className={s.footerCards}>
            <h2>Community</h2>
            <ul>
              <li>
                <p>Join community</p>
              </li>
              <li>
                <p>Job opportunities</p>
              </li>
              <li>
                <p>Useful links</p>
              </li>
            </ul>
          </div>
          <div className={s.footerCards}>
            <h2>LOGO</h2>
            <ul>
              <li>
                <p>Copyright &copy;&nbsp;2024</p>
              </li>
              <li>
                <p>+7 (777) 777-77-77</p>
              </li>
            </ul>
            <div className={s.footerLinks}>
              <p>in</p>
              <p>tg</p>
              <p>inst</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
