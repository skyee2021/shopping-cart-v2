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

  //輸入匡數量
  changeNum(num, n){
    const foundItems = this.items.find(item => item.id == num)
    foundItems.quantity = n
    
  }

  //移出購物車
  removeItemId(id){
    //filter符合條件的留下，map是所有都留下。回傳新的陣列
    this.items = this.items.filter(item => item.id != id)
    //傳入的東西不符合傳入的id(選到的物件id)就留下在陣列內 ＝>刪除選到的id
    //filter會回傳新的陣列，所以前面要多用一個this.items去接
  }

  itemtotal(){
    return this.items.forEach(item => {
      item.totalPrice()
    })
  }

  //總價
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