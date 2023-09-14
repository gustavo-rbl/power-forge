import Button from "../../Button/Button";
import { GiWeightLiftingUp, GiGymBag, GiWeightScale, GiSportMedal } from "react-icons/gi";

// style
import style from "./HomeCards.module.scss";

function HomeCards() {
  const icons = [<GiWeightLiftingUp />, <GiGymBag />, <GiWeightScale />, <GiSportMedal />];
  return (
    <div>
      <h2 className={`${style.hero} ${style.text_accent_2}`}>Why PowerForge</h2>

      <div className={style.cards}>
        {icons.map((icon, i) => (
          <div className={style.cards_card} key={i}>
            <div className={style.cards_card_icon}>{icon}</div>
            <h2 className={style.cards_card_title}>Lorem, ipsum.</h2>
            <p className={style.cards_card_description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, numquam!
            </p>
          </div>
        ))}
      </div>

      <Button text="Learn more" to="about" className="buttonV01" />
    </div>
  );
}

export default HomeCards;
