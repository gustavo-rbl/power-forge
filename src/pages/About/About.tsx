import { aboutPage } from "../../assets/data";
import { GiWeightLiftingUp } from "react-icons/gi";

// components
import PageBanner from "../../components/PageBanner/PageBanner";
import Button from "../../components/Button/Button";

// style
import style from "./About.module.scss";

function About() {
  return (
    <div className={style.about}>
      <PageBanner title="About" background={aboutPage.banner} />
      <div className={style.two_column}>
        <div>
          <h2 className={`${style.text_accent_1} ${style.text_uppercase}`}>
            Lorem ipsum dolor sit.
          </h2>
          <h2 className={`${style.text_accent_2} ${style.hero_large}`}>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo, possimus ullam
            libero amet eum placeat illum, laboriosam nemo cum consequuntur dignissimos quis
            consectetur quas quaerat. Neque assumenda repellendus fugiat!
          </p>

          <div className={style.two_column}>
            <Button text="Lorem ipsum" to="#" className="buttonV01" />
            <Button text="Lorem ipsum" to="#" className="buttonV02" />
          </div>
        </div>
        <div>
          <img src={aboutPage.backgroundLarge[1]} alt="gym image from unsplash" />
        </div>
      </div>

      <div className={style.two_column}>
        <div className={style.collageV01}>
          <GiWeightLiftingUp className={style.collageV01_icon} />
          <p className={`${style.text_accent_1} ${style.text_uppercase}`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ipsam harum modi?
          </p>
          <h2 className={`${style.hero} ${style.text_accent_2}`}>Lorem, ipsum dolor.</h2>
        </div>
        <div className={style.collageV02}>
          {aboutPage.backgroundSmall.map((element) => (
            <div key={element.bg}>
              <h2 className={`${style.text_uppercase} ${style.text_accent_2}`}>Lorem, ipsum.</h2>
              <img src={element.bg} alt="gym background" />
              <p>Lorem ipsum dolor sit amet, consectet.</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${style.two_column} ${style.background_accent_2} ${style.padding_large}`}>
        <div>
          <img src={aboutPage.backgroundLarge[0]} alt="gym image from unsplash" />
        </div>
        <div>
          <h2 className={`${style.text_accent_1} ${style.text_uppercase}`}>
            Lorem ipsum dolor sit.
          </h2>
          <h2 className={`${style.text_gray_0} ${style.hero_large}`}>Lorem, ipsum dolor.</h2>
          <p className={style.text_gray_0}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo, possimus ullam
            libero amet eum placeat illum, laboriosam nemo cum consequuntur dignissimos quis
            consectetur quas quaerat. Neque assumenda repellendus fugiat!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
