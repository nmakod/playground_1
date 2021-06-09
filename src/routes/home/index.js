import { h } from "preact";
import style from "./style.css";
import { PreactLibWithHook } from "preact-lib";

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <PreactLibWithHook />
  </div>
);

export default Home;
