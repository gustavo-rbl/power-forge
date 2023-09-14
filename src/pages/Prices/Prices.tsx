import { pricesPage } from "../../assets/data";
import Button from "../../components/Button/Button";

// component
import PageBanner from "../../components/PageBanner/PageBanner";

// style
import style from "./Prices.module.scss";

function Prices() {
  return (
    <div className={style.prices}>
      <PageBanner title="Prices" background={pricesPage.banner} />

      <div>
        <h2 className={`${style.text_accent_2} ${style.hero_large}`}>Why PowerForge</h2>
        <div className={style.two_column}>
          <div>
            <img src={pricesPage.backgroundLarge[1]} alt="gym image" />
          </div>
          <div>
            <h2 className={`${style.text_accent_1} ${style.text_uppercase}`}>
              Lorem, ipsum dolor.
            </h2>
            <h2 className={`${style.text_accent_2} ${style.text_uppercase} ${style.text_large}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aut adipisci
              deleniti sint fugiat enim doloribus?
            </p>
            <ul className={style.list_arrow}>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={style.two_column}>
        {pricesPage.rates.map((rate) => (
          <div key={rate.price}>
            <h2 className={`${style.text_uppercase} ${style.text_accent_2}`}>{rate.name}</h2>
            <h2>
              <span className={`${style.text_accent_1} ${style.text_large}`}>{rate.price}</span> /
              monthly
            </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <ul>
              {rate.benefits.map((benefit, i) => (
                <li key={i} className={style.text_accent_2}>
                  {benefit.hasBenefit ? (
                    <span className={style.text_large}>&#x2605;</span>
                  ) : (
                    <span className={style.text_large}>&#x2606;</span>
                  )}{" "}
                  <span className={style.text_accent_1}>{benefit.name}</span>
                </li>
              ))}
            </ul>

            <Button text="Learn More" to="#" className="buttonV01" />
          </div>
        ))}
      </div>

      <div className={style.two_column}>
        <div>
          <h2 className={`${style.text_accent_1} ${style.text_uppercase}`}>Lorem, ipsum dolor.</h2>
          <h2 className={`${style.text_accent_2} ${style.text_uppercase} ${style.text_large}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus aut adipisci deleniti
            sint fugiat enim doloribus?
          </p>
          <ul className={style.list_arrow}>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>

        <div>
          <img src={pricesPage.backgroundLarge[0]} alt="gym image" />
        </div>
      </div>
    </div>
  );
}

export default Prices;
