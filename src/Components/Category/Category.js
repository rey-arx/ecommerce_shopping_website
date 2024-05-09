import menshoes from "../Images/menshoes.jpg";
import kidshoes from "../Images/kidshoes.jpg";
import womenshoes from "../Images/womenshoes.jpg";
import "./CategoryStyles.css";

const Category = () => {
  return (
    <div class="MainPage-Container">
      <div class="items">
        <img src={menshoes} class="kundi" />
        <p class="categoryText1">MEN SHOES COLLECTION</p>
        <p class="categoryText2">
          Constructed from luxury nylons, leathers, and custom hardware,
          featuring sport details such as hidden breathing vents, waterproof +
          antimicrobial linings, and more.
        </p>
        <button className="shopButton">SHOP KIDS</button>
      </div>
      <div class="items">
        <img src={womenshoes} class="kundi" />
        <p class="categoryText1">WOMEN SHOES COLLECTION</p>
        <p class="categoryText2">
          Constructed from luxury nylons, leathers, and custom hardware,
          featuring sport details such as hidden breathing vents, waterproof +
          antimicrobial linings, and more.
        </p>
        <button className="shopButton">SHOP WOMEN</button>
      </div>
      <div class="items">
        <img src={kidshoes} class="kundi" />
        <p class="categoryText1">MEN SHOES COLLECTION</p>
        <p class="categoryText2">
          Constructed from luxury nylons, leathers, and custom hardware,
          featuring sport details such as hidden breathing vents, waterproof +
          antimicrobial linings, and more.
        </p>
        <button className="shopButton">SHOP MEN</button>
      </div>
    </div>
  );
};
export default Category;
