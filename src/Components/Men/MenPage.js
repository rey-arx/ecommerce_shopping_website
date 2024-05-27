import Navbar from '../Navbar';
import shoe1 from './shoe1.png';
import shoe2 from './shoe2.png';
import shoe3 from './shoe3.png';
import shoe4 from './shoe4.png';
import shoe5 from './shoe5.png';
import shoe6 from './shoe6.png';
import shoe7 from './shoe7.png';
import shoe8 from './shoe8.png';

import './menPageStyle.css'
import { Link } from "react-router-dom";
const MenPage =() =>{
return(
    <div>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{marginLeft:"20%"}}>
        <Link to={'/'} style={{color:'blue',display:'inline'}}>Home</Link>       
        <p style={{display:'inline'}}> /Men</p>
        </div>
        <p style={{fontSize:"37px", fontWeight:'bolder',marginLeft:"20%"}}>MEN</p>
        <div className='menpage-GridContainer'>

            <div className='title item'>
                <p>SHOP BY</p>
                
            </div>
            <div className='sortby item'>
            <p style={{display:"inline"}}> SORT BY  :        </p>
            {/* <select class="form-field" placeholder="Default"><option selected="" value="">Default</option><option value="price">Price</option><option value="name">Name</option></select> */}
            <select class="selectt" >
                <option>Default</option>
                <option>Price</option>
                <option>Name</option>
            </select>
            </div>
            <div className='sidebarfilter item'>
            <div className='shoByFlex_container'>
                    <div className='firstShopBy flexItem'>
                    <p> 
                    Price

                        </p>
                    </div>
                    <div className=' flexItem'>
                        b
                    </div>
                    <div className=' flexItem'>
                      c  
                    </div>
                    <div className=' flexItem'>
                     d   
                    </div>
                </div>
            </div>
            <div className='item'>
            <img src={shoe1}></img>
            <p>Nike react phantom run flyknit 2</p>
            <p>$789.80</p>
            </div>
            <div className='item'>
                <img src={shoe2}></img>
                <p>Nike react phantom run flyknit 2</p>
                <p>$789.80</p>
            </div>
            <div className='item'>
                <img src={shoe3}></img>
                <p>Nike react infinity run flyknit</p>
                <p>$597.30</p>
            </div>
            <div className='item'>
                <img src={shoe4}></img>
                <p>Nike air zoom pegasus 35</p>
                <p>$452.10</p>
            </div>
            <div className='item'>
                <img src={shoe5}></img>
                <p>Seasonal color chuck 70</p>
                <p>$185.90</p>
            </div>
            <div className='item'>
                <img src={shoe6}></img>
                <p>Hacked fashion chuck taylor all star</p>
                <p>$882.20</p>
            </div>
            <div className='item'>
                <img src={shoe7}></img>
                <p>Nizza trefoil shoes</p>
                <p>$217.80</p>
            </div>
            <div className='item'>
                <img src={shoe8}></img>
                <p>Strutter shoes</p>
                <p>$422.40</p>
            </div>

        </div>
    </div>
)
}

export default MenPage;