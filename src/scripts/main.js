import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
// 實作寫在這裡！

//建立購物車
import Cart from './cart'
import CartItem from './cart-item'
import { buildItemList } from './ui'
const cart = new Cart()

//購物車的畫面渲染
const renderUI = () => {
  const result = buildItemList(cart)
  document.querySelector('.cart tbody').innerHTML = result

  //刪除鍵事件
  document.querySelectorAll('.remove-item-btn').forEach(btn =>{
    btn.addEventListener('click', (e)=>{
      // console.log(e.currentTarget.dataset['id']);
      cart.removeItemId(e.currentTarget.dataset['id'])
      renderUI()
    })
  })

  //總價
  // document.querySelector('.cart .total-price').textContent =cart.totalPrice()
  document.querySelector('.cart .total-price').textContent = '$' + cart.total()

  

  //數量欄位
  document.querySelectorAll('.quantity').forEach(btn=>{
    btn.addEventListener('input', (e)=>{
      const newNum = document.querySelector('.quantity').value //監測輸入匡數量
      console.log(newNum)
      cart.changeNum(e.currentTarget.dataset['num'], newNum)

      // const item_total = document.querySelector('#render').textContent =cart.itemtotal()
      // console.log(document.querySelector('#render').textContent)
      // const total = document.querySelector('.cart .total-price').textContent =cart.total()
      renderUI()

      //renderII
      // console.log(total)
      // document.querySelector('#render').innerHTML = `<td>$${item_total}</td>`
      // document.querySelector('.total-price').innerHTML = `<td>$${total}</td>`
    })
  })
}


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

    //渲染到購物車頁面=>弄成function
    // const result = buildItemList(cart)
    // document.querySelector('.cart tbody').innerHTML = result
    // console.log(result);

    renderUI()

  })
};

document.addEventListener('DOMContentLoaded', () => {
  //加入購物車按鈕彈出視窗
  const catbtn = document.querySelectorAll('.card .btn')
  catbtn.forEach(addToCart)
  //變成一行:往上拉

  

  //清空購物車
  document.querySelector('.empty-cart').addEventListener('click', () => {
    cart.empty()
    renderUI() //畫面渲染
  })

  //每次進入都渲染一次
  // renderUI()
})
