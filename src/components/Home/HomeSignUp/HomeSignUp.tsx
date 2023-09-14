// style
import style from "./HomeSignUp.module.scss";

function HomeSignUp() {
  return (
    <div className={style.signUp}>
      <h2 className={style.hero}>Stay Connected</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <input type="text" name="signUp" id="signUp" />
      </div>
      <label htmlFor="signUp">Sign Up</label>
    </div>
  );
}

export default HomeSignUp;
