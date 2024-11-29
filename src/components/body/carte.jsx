import head from'./head.jpg';
import cart from './cart.png';
import buy from './buy.png';
import './carte.css';
const Body=()=>{
    return(
      <div>
        <div className='carte'>
        <p className='p1'>produit1</p> 
        <div class="card"  >
        <img src={head} class="card-img-top" alt=""/>
        <div class="card-body">
          <h5 class="card-title">Wirless bluetooth headset</h5>
          <p class="card-text">Shipped in 3-4 days</p>
          <p>$35.99</p>
          <a href=" " class="btn " id='but2'> <img src={cart} className='cart' alt=""/> Add Cart</a>
          <a href=" " class="btn" id='but1' ><img src={buy} className='cart' alt=""/> Buy</a>
        </div>
      </div>
      </div>
      </div>
    )
  }
const Container=()=>{
    return(

            <div className='div'>
            <Body/>
            <Body/>
            <Body/>
            </div>
    )
}
export default Container;