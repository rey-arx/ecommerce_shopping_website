import featured11 from "../Images/featured11.jpg";
import featured2 from "../Images/featured2.jpg";
import featured3 from "../Images/featured3.jpg";
import featured4 from "../Images/featured4.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div>
      <h4
        style={{
          color: "#3A3B3B",
          fontWeight: "300",
          textAlign: "center",
          fontFamily: "Arial",
          fontSize: "18px",
          letterSpacing: "1px",
        }}
      >
        FEATURED PRODUCTS
      </h4>
      <div class="featuredContainer">
        <div className="featuredItems">
        <img src={featured11}></img>
        <p className="featuredText">
          Nike air zoom pegasus 32<br></br>$452.10
        </p>
        </div>
        <div className="featuredItems">
          <img src={featured2}></img>
          <p className="featuredText">
            Seasonal color chuck 70<br></br>
            $900.90
          </p>
        </div>

        <div className="featuredItems">
          <img src={featured3}></img>
          <p className="featuredText" >
            Mix and match chuck taylor all star<br></br>
            $877.80
          </p>
        </div>

        <div className="featuredItems">
          <img src={featured4}></img>
          <p className="featuredText">
            Geography class chuck taylor all star<br></br>
            $275.00
          </p>
        </div>
      </div>

      <footer>
       <p style={{marginLeft:'68%',marginTop:'20px',color:"#737373",fontSize:"15px"}}>© 2022 Evershop. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
export default Featured;
