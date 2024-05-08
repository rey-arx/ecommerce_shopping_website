import menshoes from "./Images/menshoes.jpg";
import kidshoes from "./Images/kidshoes.jpg";
import womenshoes from "./Images/womenshoes.jpg";
import "./styles.css";

const Category = () => {
  return (
    <div class="MainPage-Container">
      <div class="items">

            <img src={menshoes} class="kundi"/>
        <p>MEN SHOES COLLECTION</p>
        <p>
          Constructed from luxury nylons, leathers, and custom hardware,
          featuring sport details such as hidden breathing vents, waterproof +
          antimicrobial linings, and more.
        </p>

      </div>
      <div class="items">

        <img src={womenshoes} class="kundi"/>
        <p >WOMEN SHOES COLLECTION</p>
        <p >
          Constructed from luxury nylons, leathers, and custom hardware,
          featuring sport details such as hidden breathing vents, waterproof +
          antimicrobial linings, and more.
        </p>

      </div>
      <div class="items">

        <img src={kidshoes} class="kundi"/>
        <p>MEN SHOES COLLECTION</p>
<p>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</p>

      </div>
    </div>
  );
};
export default Category;
