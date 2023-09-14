type HomeCollageTypes = {
  banner: string;
};

// component
import Button from "../../Button/Button";
import { GiStopwatch } from "react-icons/gi";
import { FaQuoteRight } from "react-icons/fa";

// style
import style from "./HomeCollage.module.scss";

function HomeCollage({ banner }: HomeCollageTypes) {
  return (
    <div className={style.collage}>
      <div className={style.collage_area_1}>
        <p className={`${style.text_accent_1} ${style.text_uppercase}`}>
          Lorem ipsum dolor sit amet.
        </p>
        <h2 className={`${style.hero_large} ${style.text_accent_2}`}>Experience PowerForge</h2>
      </div>
      <div className={style.collage_area_2}>
        <p className={style.text_accent_2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium laboriosam,
          veniam similique recusandae aliquam!
        </p>
        <p className={style.collage_area_2_margin_block}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam tenetur
          reiciendis, voluptates accusantium nobis, iure ipsa optio, consectetur consequuntur culpa
          tempora libero corporis vel!
        </p>
        <div className={style.collage_area_2_margin_block}>
          <Button text="Experience PowerForge" to="about" className="buttonV02" />
        </div>
      </div>
      <div className={style.collage_area_3}>
        <div className={style.collage_area_3_subgrid_area_1}>
          <FaQuoteRight />
        </div>
        <div className={style.collage_area_3_subgrid_area_2}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nesciunt
            exercitationem modi!
          </p>
        </div>
        <div className={style.collage_area_3_subgrid_area_3}>
          <GiStopwatch />
        </div>
      </div>
      <div style={{ backgroundImage: `url(${banner})` }} className={style.collage_area_4}></div>
    </div>
  );
}

export default HomeCollage;
