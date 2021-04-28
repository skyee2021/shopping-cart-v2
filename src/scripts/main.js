import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
// 實作寫在這裡！

//建立購物車
import Cart from './cart'
import CartItem from './cart-item'
const cart = new Cart()

//點擊監聽：加入購物車：取出物品名稱＋價錢  
const addToCart = (btn) =>{
  btn.addEventListener('click',(e)=>{
    // alert('yaaaa');
    // console.log(e.target);
    // console.log(e.currentTarget);
    const card = e.currentTarget.parentElement.parentElement
    const title = card.querySelector('.card-title').textContent
    // const price = card.querySelector('.price').textContent
                                              // .replace('$','') //取代＄變空值，去掉＄
    const price = parseFloat(card.querySelector('.price')
                      .textContent.replace('$','')) //文字轉數字
    const id = card.dataset['productId'];
    // console.log(price)
    // console.log(title)

    //加到購物車
    //購物清單
    // const item = new CartItem(title, price)
    // const item = new CartItem({
    //   title: title,
    //   price: price
    // })   //傳物件就不用擔心順序
    
    const item = new CartItem({id, title, price }) //縮成一行
    // console.log(item);
    cart.add(item) //加到購物車

  })
};

document.addEventListener('DOMContentLoaded', () => {
  //加入購物車按鈕彈出視窗
  const catbtn = document.querySelectorAll('.card .btn')
  catbtn.forEach(addToCart)
  //變成一行:往上拉






})
