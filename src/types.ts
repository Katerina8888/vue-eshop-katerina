export interface Product {
  id: number
  name: string
  price: number
  picture: string
}

export interface Order {
  products: Product[]
  totalQuantity: number
  totalPrice: number
}
