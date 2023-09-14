import { Link } from "react-router-dom";
import { footerData } from "../../assets/data";

// style
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      {footerData.map((section) => (
        <div key={section.id}>
          <h2 className={style.footer_section_hero}>{section.section}</h2>
          <ul className={style.footer_ul}>
            {section.links?.map((link) => (
              <li key={link.id}>
                <Link to="#">{link.to}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
