class Cart {
  constructor() {
    this.items = []
  }
  //彈性作法
  // constructor(items = []) {
  //   this.items = items
  // }

  //清空購物車
  empty() {
    this.items = []
  }

  add(item) {
    const foundItem = this.items.find(t => t.id == item.id)
    //陣列中的元素id等同於找到元素的id

    if(foundItem){
      //增加數量
      foundItem.increment()
    }else{
      this.items.push(item)
    }

    console.log(this.items);
    
  }
  total() {
    // let total = 0
    // this.items.forEach(item => {
    //   total += item.totalPrice()
    //   //陣列中每一條相加
    // })

    // return total


    //高級寫法：歸納    累積值   目前值
    // this.items.reduce(totle, current)
    // return this.items.reduce(
    //   (total, currentItem) => total + currentItem.totalPrice(), 
    //   0
    // )

    //避免演算法的小數點計算
    return Math.round(this.items.reduce(
      (total, currentItem) => total + currentItem.totalPrice(),
      0
    )* 100) / 100
  }
}

export default Cart //傳預設模組cart
//或是寫在最前面export default class Cart

// const A = 1
// const B = 2
// export {A, B}

//main.js引用
// import Cart, { A } from './cart'
// import CartItem from './cart-item'

// const cart = new Cart()
// console.log(A);