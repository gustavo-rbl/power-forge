import { trainers } from "../../../assets/data";

// style
import style from "./HomeTrainers.module.scss";

function HomeTrainers() {
  return (
    <div>
      <h2 className={`${style.hero} ${style.text_accent_2}`}>Yor Success Network</h2>

      <div className={style.trainers}>
        {trainers.map((trainer) => (
          <div key={trainer.name} className={style.trainers_trainer}>
            <img src={trainer.img} alt="Trainer" className={style.trainers_trainer_img} />
            <h2 className={style.trainers_trainer_name}>{trainer.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeTrainers;
