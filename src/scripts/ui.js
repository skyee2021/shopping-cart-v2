

const buildItemList = (cart) => {

  const list = cart.items.map(item => {
    //map回傳新的陣列，會有,
    return `
    <tr>
      <td>${item.title}</td>
      <td><input type="number" class="quantity" value="${item.quantity}"></td>
      <td>$${item.price}</td>
      <td>$20</td>
      <td><button class="remove-item-btn btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
    </tr>
    `
  })
  //用join把,取代掉
  return list.join('')
}

export { buildItemList }