import { homeData } from "../../assets/data";

// components
import HomeBanner from "../../components/Home/HomeBanner/HomeBanner";
import HomeCards from "../../components/Home/HomeCards/HomeCards";
import HomeCollage from "../../components/Home/HomeCollage/HomeCollage";
import HomeSignUp from "../../components/Home/HomeSignUp/HomeSignUp";
import HomeTrainers from "../../components/Home/HomeTrainers/HomeTrainers";

// style
import style from "./Home.module.scss";

function Home() {
  return (
    <div className={style.home}>
      <HomeBanner banner={homeData.banner} />

      <HomeCards />

      <HomeCollage banner={homeData["training-home"]} />

      <HomeTrainers />

      <HomeSignUp />
    </div>
  );
}

export default Home;
