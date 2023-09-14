import CountUp from "react-countup";
import { trainersPage } from "../../assets/data";
import { trainers } from "../../assets/data";
import { FaPeopleLine, FaFileContract } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { MdWorkspacePremium } from "react-icons/md";

// component
import PageBanner from "../../components/PageBanner/PageBanner";

// style
import style from "./Trainers.module.scss";
import TrainerCollage from "../../components/TrainerCollage/TrainerCollage";

function Trainers() {
  const generateRandomNumber = (max: number, min: number) => {
    return Math.random() * (max - min) + min;
  };

  const icons = [<FaPeopleLine />, <FaFileContract />, <GiFruitBowl />, <MdWorkspacePremium />];

  return (
    <div className={style.trainers}>
      <PageBanner title="Trainers" background={trainersPage.banner} />

      <h2 className={`${style.text_center} ${style.hero_large} ${style.text_accent_2} `}>
        Lorem, ipsum.
      </h2>

      <div className={`${style.two_column} ${style.text_center}`}>
        {icons.map((element, i) => (
          <div key={i}>
            <div className={`${style.icon_large} ${style.text_accent_2}`}>{element}</div>
            <CountUp end={generateRandomNumber(2000, 900)} className={style.text_large} />
            <h2>Lorem, ipsum.</h2>
          </div>
        ))}
      </div>

      <div>
        <h2 className={`${style.text_accent_1} ${style.text_uppercase}`}>Know</h2>
        <h2 className={`${style.hero_large} ${style.text_accent_2}`}>Your Trainers</h2>

        {trainers.map((trainer, i) => (
          <TrainerCollage
            key={trainer.name}
            name={trainer.name}
            trainerImg={trainer.img}
            backgroundImg={trainer.background}
            position={i % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default Trainers;
