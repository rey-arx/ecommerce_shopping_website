import Homepageimage from './Images/Homepageimage.png';
import './styles.css';


const MainPage = ()=>{
return(
    <div>

    <div class="MainPage">

        <img src={Homepageimage} class="mainpageimg" />
        <div class="aaa">
        <h1 class="H1">Discount 20% For All Orders<br></br> Over $2000</h1>
        <h3 class="h31">Use coupon code <b>DISCOUNT20</b> <br></br>Use coupon DISCOUNT20 </h3>
        </div>{/* <h3 class="h32"></h3> */}
    </div>
   
    </div>
)
}
export default MainPage;