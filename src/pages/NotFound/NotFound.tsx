import { aboutPage } from "../../assets/data";

// component
import PageBanner from "../../components/PageBanner/PageBanner";
import Button from "../../components/Button/Button";

// style
import style from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={style.notFound}>
      <PageBanner title="Page Not Found" background={aboutPage.banner} />

      <Button text="Return Home" to="." className="buttonV01" />
    </div>
  );
}

export default NotFound;
