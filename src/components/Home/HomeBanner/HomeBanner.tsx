type HomeBannerTypes = {
  banner: string;
};

// style
import style from "./HomeBanner.module.scss";

function HomeBanner({ banner }: HomeBannerTypes) {
  return (
    <div className={style.banner}>
      <div className={style.banner_area_1}></div>
      <div className={style.banner_area_2} style={{ backgroundImage: `url(${banner})` }}></div>
      <div className={style.banner_area_3}></div>
      <div className={style.banner_area_4}>
        <h2>Find</h2>
        <h2>Your</h2>
        <h2>Focus</h2>
      </div>
    </div>
  );
}

export default HomeBanner;
