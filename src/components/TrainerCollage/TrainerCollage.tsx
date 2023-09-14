type TrainerCollageTypes = {
  name: string;
  trainerImg: string;
  backgroundImg: string;
  position: boolean;
};

// component
import Button from "../Button/Button";

// style
import style from "./TrainerCollage.module.scss";

function TrainerCollage({ name, trainerImg, backgroundImg, position }: TrainerCollageTypes) {
  const collageInfo = (
    <div className={style.collage_info}>
      <h2 className={`${style.hero_large} ${style.text_accent_2}`}>{name}</h2>
      <h2 className={style.text_accent_1}>Personal Trainer</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores, quidem magni doloribus
        eveniet animi itaque a possimus adipisci, rerum ab saepe dignissimos facere molestias,
        dolorum voluptatum error dolor? Qui.
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem error quidem
        tenetur adipisci labore. Asperiores, ut. Quisquam, quas in. Aliquid beatae maxime excepturi
        ipsam qui cum ipsa laboriosam alias dolorum. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
      <Button text="Contact" to="#" className="buttonV02" />
    </div>
  );

  const collageImage = (
    <div className={position ? style.collage_imgV01 : style.collage_imgV02}>
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className={position ? style.collage_imgV01_background : style.collage_imgV02_background}
      ></div>
      <div
        style={{ backgroundImage: `url(${trainerImg})` }}
        className={position ? style.collage_imgV01_foreground : style.collage_imgV02_foreground}
      ></div>
      <div
        className={position ? style.collage_imgV01_gradient : style.collage_imgV02_gradient}
      ></div>
    </div>
  );

  return (
    <div className={style.collage}>
      {position ? (
        <>
          {collageInfo}
          {collageImage}
        </>
      ) : (
        <>
          {collageImage}
          {collageInfo}
        </>
      )}
    </div>
  );
}

export default TrainerCollage;
