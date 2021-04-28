class Cart {
  constructor() {
    this.items = []
  }
  //彈性作法
  // constructor(items = []) {
  //   this.items = items
  // }

  add(item) {
    const foundItem = this.items.find(t => t.id == item.id)
    //陣列中的元素id等同於找到元素的id

    if(foundItem){
      //增加數量
      foundItem.increment(5)
    }else{
      this.items.push(item)
    }

    
    console.log(this.items);
    
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