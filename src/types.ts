export interface Product {
  id: number
  name: string
  price: number
  picture: string
}

export interface IProductViewWithQuantity extends Product {
  quantity: number
}

export interface Order {
  id: number
  products: IProductViewWithQuantity[]
}
