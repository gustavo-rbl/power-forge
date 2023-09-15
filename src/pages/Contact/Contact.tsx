import { contactPage } from "../../assets/data";
import LeafLetMap from "../../components/LeafLetMap/LeafLetMap";
import { FaPhoneAlt, FaEnvelope, FaAddressBook } from "react-icons/fa";

// component
import PageBanner from "../../components/PageBanner/PageBanner";

// style
import style from "./Contact.module.scss";

function Contact() {
  const cards = [
    {
      title: "Phone",
      description: "123-456-7890",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Email",
      description: "powerforge@powerforge.gym",
      icon: <FaEnvelope />,
    },
    {
      title: "Address",
      description: "123 Main Street",
      icon: <FaAddressBook />,
    },
  ];

  return (
    <div className={style.contact}>
      <PageBanner title="Contact" background={contactPage.banner} />

      <LeafLetMap />

      <div className={style.cards}>
        <div>
          <h2 className={`${style.text_uppercase} ${style.text_accent_1}`}>Lorem, ipsum dolor.</h2>
          <h2 className={`${style.text_uppercase} ${style.text_accent_2} ${style.hero_large}`}>
            Visit Us
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, odio tempora! Earum,
          architecto dolor nemo laboriosam consequatur rem aspernatur natus expedita quas sit
          commodi corrupti voluptatem! Minus blanditiis ducimus itaque.
        </p>

        <div className={style.two_column}>
          {cards.map((card) => (
            <div className={style.text_center} key={card.title}>
              <div
                className={`${style.text_uppercase} ${style.text_accent_1} ${style.hero_large} ${style.text_center}`}
              >
                {card.icon}
              </div>
              <h2 className={`${style.text_uppercase} ${style.text_accent_2}`}>{card.title}</h2>
              <h2 className={style.text_uppercase}>{card.description}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Contact;
