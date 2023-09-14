type PageBannerTypes = {
  title: string;
  background: string;
};

// style
import style from "./PageBanner.module.scss";

function PageBanner({ title, background }: PageBannerTypes) {
  return (
    <div className={style.banner}>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={style.banner_background}
      ></div>
      <h2 className={style.banner_title}>{title}</h2>
      <div className={style.banner_gradient}></div>
    </div>
  );
}
export default PageBanner;
