export interface Product {
  id: number
  name: string
  price: number
  picture: string
}

export interface Order {
  id: number
  products: Product[]
  totalQuantity: number
  totalPrice: number
}
